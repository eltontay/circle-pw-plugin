import React, { useState } from 'react';
import { WalletState } from '../types';

interface WalletDashboardProps {
  walletState: WalletState;
  onTransfer: (to: string, amount: string) => Promise<void>;
  onDisconnect: () => void;
}

export const WalletDashboard: React.FC<WalletDashboardProps> = ({
  walletState,
  onTransfer,
  onDisconnect,
}) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onTransfer(recipient, amount);
      setRecipient('');
      setAmount('');
    } catch (error) {
      console.error('Transfer failed:', error);
    }
  };

  return (
    <div className="p-6 border border-blue-500 rounded-lg max-w-[500px]">
      <h2 className="text-xl font-bold">Your Wallet</h2>
      <div className="text-2xl font-bold my-4">
        Balance: {walletState.balance} USDC
      </div>
      <div className="font-mono bg-gray-100 p-3 rounded-lg my-4">
        Address: {walletState.address}
      </div>

      <form onSubmit={handleTransfer} className="flex flex-col gap-3 mt-6">
        <input
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRecipient(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          placeholder="Amount (USDC)"
          value={amount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg"
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg hover:opacity-90"
        >
          Transfer
        </button>
      </form>

      <button 
        onClick={onDisconnect}
        className="w-full mt-4 bg-red-500 text-white p-3 rounded-lg hover:opacity-90"
      >
        Disconnect
      </button>
    </div>
  );
}; 