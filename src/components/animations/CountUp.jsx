import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CountUp({ end, duration = 2, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    // Extrair número do valor (ex: "R$2M+" -> 2)
    const numericEnd = parseFloat(end.toString().replace(/[^\d.]/g, ''));

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = numericEnd * easeOutQuart;
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  // Formatar o valor
  const formatValue = (value) => {
    const endStr = end.toString();
    if (endStr.includes('M')) {
      return `${prefix}${value.toFixed(0)}M${suffix}`;
    } else if (endStr.includes('+')) {
      return `${prefix}${Math.floor(value)}+${suffix}`;
    } else if (endStr.includes('x')) {
      return `${prefix}${value.toFixed(1)}x${suffix}`;
    }
    return `${prefix}${Math.floor(value)}${suffix}`;
  };

  return (
    <span ref={ref}>
      {formatValue(count)}
    </span>
  );
}