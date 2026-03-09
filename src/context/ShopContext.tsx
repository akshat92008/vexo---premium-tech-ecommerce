import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product, products as staticProducts } from '../data/products';
import { db } from '../lib/firebase';
import { collection, addDoc, onSnapshot, query, serverTimestamp } from 'firebase/firestore';

interface CartItem extends Product {
  quantity: number;
}

interface ShopContextType {
  cart: CartItem[];
  wishlist: Product[];
  products: Product[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  clearCart: () => void;
  placeOrder: (orderData: any) => Promise<string>;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load Products from Firestore or Fallback
  useEffect(() => {
    if (!db) {
      console.warn("Firestore not initialized. Falling back to local hardware manifest.");
      setProducts(staticProducts);
      return;
    }

    try {
      const q = query(collection(db, 'products'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Product[];
        if (items.length > 0) {
          setProducts(items);
        }
      }, (error) => {
        console.error("Firestore stream error:", error);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Failed to establish neural link with Firestore:", error);
    }
  }, []);

  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('vexo_cart');
    const savedWishlist = localStorage.getItem('vexo_wishlist');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('vexo_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('vexo_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = async (orderData: any) => {
    try {
      const docRef = await addDoc(collection(db, 'orders'), {
        ...orderData,
        items: cart,
        total: cartTotal,
        createdAt: serverTimestamp(),
        status: 'pending'
      });
      clearCart();
      return docRef.id;
    } catch (error) {
      console.error("Error placing order:", error);
      throw error;
    }
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <ShopContext.Provider value={{
      cart,
      wishlist,
      products,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist,
      isInWishlist,
      clearCart,
      placeOrder,
      cartTotal,
      cartCount,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}
