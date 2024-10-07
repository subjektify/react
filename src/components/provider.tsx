import { ReactNode } from 'react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

export type SubjektifyProviderProps = {
    children: ReactNode
}

export function SubjektifyProvider({ children }: SubjektifyProviderProps) {
    const config = createConfig({
        chains: [mainnet, sepolia],
        transports: {
          [mainnet.id]: http('https://mainnet.example.com'),
          [sepolia.id]: http('https://sepolia.example.com'),
        },
    });
    return (
        <WagmiProvider config={config}>
            {children}
        </WagmiProvider>
    )
}
