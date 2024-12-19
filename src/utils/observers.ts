export const cleanupResizeObserver = (element: HTMLElement | null) => {
  if (element) {
    const observers = (window as any).__resizeObservers__ || [];
    observers.forEach((observer: any) => {
      try {
        observer.unobserve(element);
      } catch (error) {
        console.error('Error cleaning up ResizeObserver:', error);
      }
    });
  }
};