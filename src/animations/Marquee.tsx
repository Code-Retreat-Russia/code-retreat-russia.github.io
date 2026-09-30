import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  /** Направление движения */
  direction?: 'left' | 'right';
  /** Секунды на один цикл */
  duration?: number;
  className?: string;
}

/**
 * Бегущая строка. Содержимое дублируется, чтобы цикл был бесшовным.
 * При prefers-reduced-motion анимация полностью останавливается.
 */
export function Marquee({ children, direction = 'left', duration = 28, className }: MarqueeProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={`marquee marquee--static ${className ?? ''}`} aria-hidden="true">
        <div className="marquee__track">{children}</div>
      </div>
    );
  }

  return (
    <div className={`marquee ${className ?? ''}`} aria-hidden="true">
      <motion.div
        className="marquee__track"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}