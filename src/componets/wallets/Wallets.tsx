import styles from './wallets.module.css';

import { Wallet } from '../../interfaces/wallet.interface';

interface WalletProps {
  wallet: Wallet;
};

const Wallets: React.FC<WalletProps> = ({wallet}) => {
  return (
    <div>
      <div className={styles.wallet}>
        <h2 className={styles.wallet_title}>{wallet.name}</h2>
        <p className={styles.last_paid_date}>Last paid on August {wallet.createdAt.toLocaleDateString()}</p>
        <div className={styles.porcent_wallet}>
          <p className={styles.invested_to_date}>R${wallet.value}</p>
          <p className={styles.estimated_investment}>R${wallet.estimatedValue}</p>
        </div>
      </div>
    </div>
  )
}

export default Wallets
