import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function NeuralCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);
  
  const ringSpringConfig = { damping: 30, stiffness: 150 };
  const ringSpringX = useSpring(ringX, ringSpringConfig);
  const ringSpringY = useSpring(ringY, ringSpringConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
      ringX.set(e.clientX - 20);
      ringY.set(e.clientY - 20);
      if (!isVisible) setIsVisible(true);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, .product-card');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          scale: isHovered ? 1.5 : 1,
        }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          x: ringSpringX,
          y: ringSpringY,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? 'rgba(0, 240, 255, 0.8)' : 'rgba(0, 240, 255, 0.3)',
        }}
      />
    </>
  );
}
