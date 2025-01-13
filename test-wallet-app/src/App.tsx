import React from 'react';
import { ConnectButton } from 'circle-pw-sdk';

function App() {
  const handleConnect = async (method: string) => {
    try {
      console.log('Connected with:', method);
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Test App</h1>
        <ConnectButton 
          onConnect={handleConnect}
          buttonColor="bg-[var(--circle-blue)] hover:bg-[var(--circle-blue-dark)]"
        />
      </div>
    </div>
  );
}

export default App;
