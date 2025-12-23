
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ isOpen, imageUrl, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-all"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
      >
        <X size={24} />
      </button>
      <img 
        src={imageUrl} 
        alt="Visualização" 
        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
