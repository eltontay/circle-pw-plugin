import { CircleWalletConfig, LoginMethod, WalletState } from './types';

export class CircleWallet {
  private config: CircleWalletConfig;
  private state: WalletState;

  constructor(config: CircleWalletConfig) {
    this.config = {
      enabledLoginMethods: ['email', 'google', 'apple', 'facebook'],
      ...config
    };
    
    this.state = {
      isConnected: false,
      balance: '0',
      address: '',
    };
  }

  public async connect(method: LoginMethod): Promise<void> {
    const enabledMethods = this.config.enabledLoginMethods ?? [];
    if (!enabledMethods.some(m => m === method)) {
      throw new Error(`Login method ${method} is not enabled`);
    }

    try {
      // Connect to Circle's API
      // Update state accordingly
      this.state.isConnected = true;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to connect: ${error.message}`);
      }
      throw new Error('Failed to connect: Unknown error');
    }
  }

  public async getBalance(): Promise<string> {
    if (!this.state.isConnected) {
      throw new Error('Wallet not connected');
    }
    return this.state.balance;
  }

  public async transfer(to: string, amount: string): Promise<void> {
    if (!this.state.isConnected) {
      throw new Error('Wallet not connected');
    }
    // Implement transfer logic
  }

  public disconnect(): void {
    this.state.isConnected = false;
    this.state.balance = '0';
    this.state.address = '';
  }
}

export * from './types'; 