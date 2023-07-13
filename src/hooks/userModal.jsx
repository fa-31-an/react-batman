import { useState } from 'react';

export default function useModal() {
  const [isOpen, setIsOpen ] = useState(false);

  function toggleModle() {
    setIsOpen(!isOpen)
  };

  return { isOpen, toggleModle };
};