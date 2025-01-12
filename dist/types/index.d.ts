export interface CircleWalletConfig {
    apiKey: string;
    enabledLoginMethods?: LoginMethod[];
    theme?: ThemeOverrides;
}
export type LoginMethod = 'google' | 'apple' | 'facebook' | 'email';
export interface ThemeOverrides {
    primary?: string;
    secondary?: string;
    background?: string;
    text?: string;
}
export interface WalletState {
    isConnected: boolean;
    balance: string;
    address: string;
}
