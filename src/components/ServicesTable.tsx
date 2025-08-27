import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from './ServicesTable.module.css';

interface Chain {
  id: string;
  blockchain: string;
  description: string;
  active: boolean;
}

const ServicesTable: React.FC = () => {
  const chains = usePluginData('grove-chains') as Chain[];

  if (!chains || chains.length === 0) {
    return <div>Loading services...</div>;
  }

  // Sort chains alphabetically by description (Service name)
  const sortedChains = chains.sort((a, b) => a.description.localeCompare(b.description));

  return (
    <div className={styles.tableContainer}>
      <table className={styles.servicesTable}>
        <thead>
          <tr>
            <th>Service</th>
            <th>Service ID</th>
            <th>Service Specification</th>
          </tr>
        </thead>
        <tbody>
          {sortedChains.map((chain) => (
            <tr key={chain.id}>
              <td>{chain.description}</td>
              <td className={styles.serviceId}>{chain.blockchain}</td>
              <td><a href={`../../service-apis/${chain.blockchain}-api`}>See specification</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
