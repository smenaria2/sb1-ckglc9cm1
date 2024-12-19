import { RefObject, useEffect } from 'react';

export function useGridObserver(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const element = ref.current;
    let resizeObserver: ResizeObserver | null = null;

    if (element) {
      resizeObserver = new ResizeObserver((entries) => {
        // Handle resize if needed
        entries.forEach(() => {
          // Placeholder for future grid-specific logic
        });
      });

      resizeObserver.observe(element);
    }

    return () => {
      if (element && resizeObserver) {
        resizeObserver.unobserve(element);
        resizeObserver.disconnect();
      }
    };
  }, [ref]);
}