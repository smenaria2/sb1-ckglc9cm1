import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '../utils/constants';

export function useCompetitionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem(STORAGE_KEYS.COMPETITION_POPUP);
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEYS.COMPETITION_POPUP, 'true');
  };

  return { isOpen, handleClose };
}