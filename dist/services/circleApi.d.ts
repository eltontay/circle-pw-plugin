import { LoginMethod, WalletState } from '../types';
export declare class CircleApiService {
    private apiKey;
    constructor(apiKey: string);
    connect(method: LoginMethod): Promise<WalletState>;
    getBalance(address: string): Promise<string>;
    transfer(from: string, to: string, amount: string): Promise<void>;
}
