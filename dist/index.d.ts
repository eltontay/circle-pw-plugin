import { CircleWalletConfig, LoginMethod } from './types';
export declare class CircleWallet {
    private config;
    private state;
    constructor(config: CircleWalletConfig);
    connect(method: LoginMethod): Promise<void>;
    getBalance(): Promise<string>;
    transfer(to: string, amount: string): Promise<void>;
    disconnect(): void;
}
export * from './types';
