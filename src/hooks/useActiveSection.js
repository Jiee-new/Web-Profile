import { useEffect, useState } from 'react';

/**
 * Menandai section yang sedang terlihat supaya link navigasi bisa di-highlight.
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState('');
  const key = ids.join('|');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section) => section !== null);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY < 200) setActiveId('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
    // `key` mewakili isi array ids.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return activeId;
}
