import React from 'react';
import { WalletState } from '../types';
interface WalletDashboardProps {
    walletState: WalletState;
    onTransfer: (to: string, amount: string) => Promise<void>;
    onDisconnect: () => void;
}
export declare const WalletDashboard: React.FC<WalletDashboardProps>;
export {};
