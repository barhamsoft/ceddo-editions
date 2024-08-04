import React from 'react';
import Image from 'next/image';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      'https://wa.me/221762773266?text=Bonjour,%20je%20souhaite%20vous%20contacter.',
      '_blank',
    );
  };

  return (
    <div className="fixed z-50 bottom-10 right-10">
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg"
      >
        <Image src="/whatsapp.png" alt="WhatsApp" width={50} height={32} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
