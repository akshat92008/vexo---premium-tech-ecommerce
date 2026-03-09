export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  specs: Record<string, string>;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: 'h1',
    name: 'Aura Sonic Pro',
    category: 'Headphones',
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.9,
    reviews: 1240,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Experience unparalleled audio fidelity with the Aura Sonic Pro. Featuring advanced active noise cancellation and spatial audio technology, these headphones deliver a truly immersive listening experience.',
    features: [
      'Active Noise Cancellation (ANC)',
      'Spatial Audio with Dynamic Head Tracking',
      'Up to 40 hours of listening time',
      'Transparency mode',
      'Premium memory foam ear cushions'
    ],
    specs: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Bluetooth': '5.3',
      'Weight': '250g',
      'Battery Life': '40 Hours'
    },
    isNew: true,
    isFeatured: true
  },
  {
    id: 'h2',
    name: 'Nexus Echo',
    category: 'Headphones',
    price: 249.99,
    rating: 4.7,
    reviews: 856,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'The Nexus Echo blends minimalist design with powerful sound. Perfect for daily commuters and audiophiles alike.',
    features: [
      'Hybrid Noise Cancellation',
      'Multipoint Connection',
      'Customizable EQ via App',
      'Fast Charging (10 mins = 5 hours)'
    ],
    specs: {
      'Driver Size': '35mm',
      'Bluetooth': '5.2',
      'Weight': '220g',
      'Battery Life': '30 Hours'
    },
    isFeatured: true
  },
  {
    id: 'h3',
    name: 'Vortex Quantum',
    category: 'Headphones',
    price: 499.99,
    rating: 5.0,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Audiophile-grade wireless headphones crafted from aerospace aluminum and premium leather.',
    features: [
      'Planar Magnetic Drivers',
      'Lossless Audio Support',
      'Adaptive ANC',
      'Studio-grade microphones'
    ],
    specs: {
      'Driver Type': 'Planar Magnetic',
      'Bluetooth': '5.3 with aptX Lossless',
      'Weight': '310g',
      'Battery Life': '25 Hours'
    },
    isNew: true
  },
  {
    id: 'e1',
    name: 'Pulse Earbuds X',
    category: 'Earbuds',
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviews: 2100,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800', // Placeholder
    gallery: [],
    description: 'Compact, powerful, and ready for anything. The Pulse Earbuds X offer incredible sound in a tiny package.',
    features: ['IPX7 Water Resistance', 'Wireless Charging Case', 'Touch Controls'],
    specs: { 'Bluetooth': '5.2', 'Battery Life': '8 Hours (32 with case)' }
  },
  {
    id: 's1',
    name: 'Nova Smartwatch',
    category: 'Accessories',
    price: 299.99,
    rating: 4.8,
    reviews: 540,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800',
    gallery: [],
    description: 'Track your fitness, stay connected, and look great doing it with the Nova Smartwatch.',
    features: ['AMOLED Display', 'ECG Monitor', '7-Day Battery Life'],
    specs: { 'Display': '1.4" AMOLED', 'Water Resistance': '5ATM' },
    isFeatured: true
  }
];

export const categories = [
  'All',
  'Headphones',
  'Earbuds',
  'Smartphones',
  'Laptops',
  'Accessories'
];
