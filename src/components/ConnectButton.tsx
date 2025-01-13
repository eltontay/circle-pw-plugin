import React, { useState } from 'react';
import { LoginModal } from './LoginModal';
import { LoginMethod } from '../types';

interface ConnectButtonProps {
  onConnect: (method: LoginMethod) => Promise<void>;
}

export const ConnectButton: React.FC<ConnectButtonProps> = ({
  onConnect,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
        onClick={() => setShowModal(true)}
      >
        Login or sign up
      </button>
      
      {showModal && (
        <LoginModal
          onClose={() => setShowModal(false)}
          onConnect={onConnect}
        />
      )}
    </>
  );
}; 