import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails

  return (
    <li className="each-currency-container">
      <div className="coin-type-container">
        <img src={currencyLogo} alt={currencyName} className="currencyLogo" />
        <p className="coin-type-text">{currencyName}</p>
      </div>
      <div className="usd-uro-container">
        <p className="coin-type-text usd ">{euroValue}</p>
        <p className="coin-type-text usd ">{usdValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
