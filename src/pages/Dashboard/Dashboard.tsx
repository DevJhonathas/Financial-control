//Components
import FormWallet from "../../componets/form/FormWallet"


const Dashboard = () => {
  return (
    <main className="container_dashboard">
      <div className="wallet_title_group">
        <h1 className="wallet_title_group">My Wallet</h1>
        <p className="wallet_subtitle_group">Keep track your financial plan</p>
      </div> {/*container_dashboard*/}

      <div className="container_presentation">
        <div className="account_user">
          <h1 className="user_name">🖐 Hi Johnny!</h1>
          <p className="user_value">R$124,542</p>
        </div>

        <div className="send_and_request_payment">
            <div className="send_payment">
              {/* Ico */}
              <p>Send a payment</p>
            </div>
            <div className="request_payment">
              {/* ico */}
              <p>Request a payment</p>
            </div>
        </div>
      </div> {/*container_presentation */}

      <div className="container_wallet_grid">
        <div className="wallet">
          <h2 className="wallet_title">Emergency Fund</h2>
          <p className="last_paid_date">Last paid on August 28, 2022</p>
          <div className="porcent_wallet">
            <p className="invested_to_date">R$300</p>
            <p className="estimated_investment">R$1000</p>
          </div>
        </div>

        <div className="wallet">
          <h2 className="wallet_title">Travel Plan</h2>
          <p className="last_paid_date">Last paid on August 28, 2022</p>
          <div className="porcent_wallet">
            <p className="invested_to_date">R$300</p>
            <p className="estimated_investment">R$1000</p>
          </div>
        </div>

      <FormWallet />
      </div>{/*container_wallet_grid*/}
    </main>
  )
}

export default Dashboard
