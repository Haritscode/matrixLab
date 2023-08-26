import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'MatrixLab',
  projectId: '774bffc5cc5c46527b0a2bee1ebbee16',
  chains
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})
export {wagmiConfig,chains}