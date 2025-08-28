import React from 'react'
import styles from './ServicesTable.module.css'
import Link from '@docusaurus/Link'

interface ChainRow {
  name: string
  blockchain: string
  category: string
}

const chains: ChainRow[] = [
  { name: 'Arbitrum One', blockchain: 'arbitrum-one', category: 'EVM' },
  { name: 'Arbitrum Sepolia Testnet', blockchain: 'arbitrum-sepolia-testnet', category: 'EVM' },
  { name: 'Avalanche', blockchain: 'avax', category: 'EVM' },
  { name: 'Avalanche DFK Subnet', blockchain: 'avax-dfk', category: 'EVM' },
  { name: 'Base', blockchain: 'base', category: 'EVM' },
  { name: 'Base Sepolia Testnet', blockchain: 'base-testnet', category: 'EVM' },
  { name: 'Berachain', blockchain: 'berachain', category: 'EVM' },
  { name: 'Blast', blockchain: 'blast', category: 'EVM' },
  { name: 'Boba Network', blockchain: 'boba', category: 'EVM' },
  { name: 'BNB Smart Chain', blockchain: 'bsc', category: 'EVM' },
  { name: 'Celo', blockchain: 'celo', category: 'EVM' },
  { name: 'Ethereum', blockchain: 'eth', category: 'EVM' },
  { name: 'Ethereum Holesky Testnet', blockchain: 'eth-holesky-testnet', category: 'EVM' },
  { name: 'Ethereum Sepolia Testnet', blockchain: 'eth-sepolia-testnet', category: 'EVM' },
  { name: 'Fantom', blockchain: 'fantom', category: 'EVM' },
  { name: 'Fraxtal', blockchain: 'fraxtal', category: 'EVM' },
  { name: 'Fuse Network', blockchain: 'fuse', category: 'EVM' },
  { name: 'Gnosis Chain', blockchain: 'gnosis', category: 'EVM' },
  { name: 'Harmony', blockchain: 'harmony', category: 'EVM' },
  { name: 'Ink', blockchain: 'ink', category: 'EVM' },
  { name: 'IoTeX', blockchain: 'iotex', category: 'EVM' },
  { name: 'Kaia', blockchain: 'kaia', category: 'EVM' },
  { name: 'Kava EVM', blockchain: 'kava', category: 'EVM' },
  { name: 'Linea', blockchain: 'linea', category: 'EVM' },
  { name: 'Mantle', blockchain: 'mantle', category: 'EVM' },
  { name: 'Metis', blockchain: 'metis', category: 'EVM' },
  { name: 'Moonbeam', blockchain: 'moonbeam', category: 'EVM' },
  { name: 'Moonriver', blockchain: 'moonriver', category: 'EVM' },
  { name: 'Near', blockchain: 'near', category: 'non-EVM' },
  { name: 'Oasys', blockchain: 'oasys', category: 'EVM' },
  { name: 'opBNB', blockchain: 'opbnb', category: 'EVM' },
  { name: 'Optimism', blockchain: 'optimism', category: 'EVM' },
  { name: 'Optimism Sepolia Testnet', blockchain: 'optimism-sepolia-testnet', category: 'EVM' },
  { name: 'Osmosis', blockchain: 'osmosis', category: 'non-EVM' },
  { name: 'Pocket Network', blockchain: 'pocket', category: 'non-EVM' },
  { name: 'Polygon', blockchain: 'polygon', category: 'EVM' },
  { name: 'Polygon Amoy Testnet', blockchain: 'polygon-amoy-testnet', category: 'EVM' },
  { name: 'Polygon zkEVM', blockchain: 'polygon-zkevm', category: 'EVM' },
  { name: 'Radix', blockchain: 'radix', category: 'non-EVM' },
  { name: 'Scroll', blockchain: 'scroll', category: 'EVM' },
  { name: 'Sei', blockchain: 'sei', category: 'non-EVM' },
  { name: 'Solana', blockchain: 'solana', category: 'non-EVM' },
  { name: 'Sonic', blockchain: 'sonic', category: 'EVM' },
  { name: 'Sui', blockchain: 'sui', category: 'non-EVM' },
  { name: 'Taiko', blockchain: 'taiko', category: 'EVM' },
  { name: 'Taiko Hekla Testnet', blockchain: 'taiko-hekla-testnet', category: 'EVM' },
  { name: 'Tron', blockchain: 'tron', category: 'non-EVM' },
  { name: 'XRPL EVM', blockchain: 'xrplevm', category: 'EVM' },
  { name: 'XRPL EVM Testnet', blockchain: 'xrplevm-testnet', category: 'EVM' },
  { name: 'zkLink Nova', blockchain: 'zklink-nova', category: 'EVM' },
  { name: 'zkSync Era', blockchain: 'zksync-era', category: 'EVM' },
]

export default function ServicesTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Service</th>
          <th>Category</th>
          <th>Spec</th>
        </tr>
      </thead>
      <tbody>
        {chains.map((chain) => (
          <tr key={chain.blockchain}>
            <td>{chain.name}</td>
            <td>{chain.category}</td>
            <td><Link to={`/service-apis/${chain.blockchain}-api`}>See specification</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
