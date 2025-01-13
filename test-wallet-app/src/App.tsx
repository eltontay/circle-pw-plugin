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
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <ConnectButton 
          onConnect={handleConnect}
          enabledMethods={['email', 'google']}
        />
      </div>
    </div>
  );
}

export default App;
