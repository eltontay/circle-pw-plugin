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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Test App</h1>
        <ConnectButton 
          onConnect={handleConnect}
          buttonColor="bg-violet-500 hover:bg-violet-600"
        />
      </div>
    </div>
  );
}

export default App;
