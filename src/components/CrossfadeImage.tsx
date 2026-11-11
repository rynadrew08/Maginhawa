import { useEffect, useState } from 'react';

interface CrossfadeImageProps {
  images: string[];
  alt: string;
  intervalMs?: number;
  offsetMs?: number;
  className?: string;
  imgClassName?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export function CrossfadeImage({
  images,
  alt,
  intervalMs = 3000,
  offsetMs = 0,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  onClick,
  ariaLabel,
}: CrossfadeImageProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, intervalMs);
    }, offsetMs);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [images.length, intervalMs, offsetMs]);

  const content = (
    <div className={`relative overflow-hidden img-float-hover ${className}`}>
      {images.map((src, idx) => (
        <img
          key={`${src}-${idx}`}
          src={src}
          alt={idx === activeIndex ? alt : ''}
          aria-hidden={idx !== activeIndex}
          referrerPolicy="no-referrer"
          className={`${imgClassName} transition-opacity duration-700 ease-in-out ${
            idx === 0 ? 'relative' : 'absolute inset-0'
          } ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel || alt}
        className="block w-full h-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2C799]"
      >
        {content}
      </button>
    );
  }

  return content;
}
