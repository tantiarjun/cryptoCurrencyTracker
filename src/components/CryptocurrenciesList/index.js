import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()
    const updatedData = data.map(eachData => ({
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      usdValue: eachData.usd_value,
      id: eachData.id,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state

    return (
      <div className="list-container">
        <ul className="all-currency-container">
          <li className="each-currency-container">
            <div className="coin-type-container">
              <h1 className="coin-type-text">CoinType</h1>
            </div>
            <div className="usd-uro-container">
              <h1 className="coin-type-text usd">USD</h1>
              <h1 className="coin-type-text usd">EURO</h1>
            </div>
          </li>
          <div className="blog-list-container">
            {isLoading ? (
              <div data-testid="loader">
                <Loader type="Rings" color="#ffffff" height={80} width={80} />
              </div>
            ) : (
              currencyList.map(item => (
                <CryptocurrencyItem currencyDetails={item} key={item.id} />
              ))
            )}
          </div>
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
