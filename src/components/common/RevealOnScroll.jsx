import React, { useEffect, useRef, useState } from 'react';

function RevealOnScroll({ children, delay = 0, immediate = false }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(immediate);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.18,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div
      ref={elementRef}
      className={`revealOnScroll${isVisible ? ' isVisible' : ''}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default RevealOnScroll;
