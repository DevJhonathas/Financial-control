//Components
import FormWallet from "../../componets/form/FormWallet"

//CSS
import styles from './dashboard.module.css'

import Wallets from "../../componets/wallets/wallets"


const walletData = {
  id: 1,
  name: "Carteira Principal",
  value: 1500,
  estimatedValue: 1500,
  createdAt: new Date,
};

const Dashboard: React.FC = () => {
  return (
    <main className={styles.container_dashboard}>
      <div className={styles.wallet_title_group}>
        <h1 className={styles.wallet_title_group}>My Wallet</h1>
        <p className={styles.wallet_subtitle_group}>Keep track your financial plan</p>
      </div> {/*container_dashboard*/}

      <div className={styles.container_presentation}>
        <div className={styles.account_user}>
          <h1 className={styles.user_name}>🖐 Hi Johnny!</h1>
          <p className={styles.user_value}>R$124,542</p>
        </div>

        <div className={styles.send_and_request_payment}>
            <div className={styles.send_payment}>
              {/* Ico */}
              <p>Send a payment</p>
            </div>
            <div className={styles.request_payment}>
              {/* ico */}
              <p>Request a payment</p>
            </div>
        </div>
      </div> {/*container_presentation */}

      <div className={styles.container_wallet_grid}>
        <Wallets wallet={walletData} />
      </div>{/*container_wallet_grid*/}
      <FormWallet />
    </main>
  )
}

export default Dashboard
