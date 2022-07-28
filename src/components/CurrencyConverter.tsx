import { useState } from "react";
import { ExchangeRate } from "./ExchangeRate";
import axios from "axios";

export const CurrencyConverter = () => {
  const currencies: string[] = ["BTC", "ETH", "USD", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState(
    currencies[0]
  );
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState(
    currencies[1]
  );
  const [amount, setAmount] = useState(0);
  const [exchangedData, setExchangedData] = useState({
    primaryCurrency: currencies[0],
    secondaryCurrency: currencies[1],
    exchangeRate: 0,
  });

  const [result, setResult] = useState(0);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
      headers: {
        "X-RapidAPI-Key": "82120f930dmshbde2f6c1441f9d3p16199djsn82edf2efbfd8",
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setExchangedData({
          primaryCurrency: chosenPrimaryCurrency,
          secondaryCurrency: chosenSecondaryCurrency,
          exchangeRate:
            response.data["Realtime Currency Exchange Rate"][
              "5. Exchange Rate"
            ],
        });
        setResult(exchangedData.exchangeRate * amount);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="currency-converter__main">
      <h2>CurrencyConverter</h2>
      <div className="currency-converter__input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  id="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  aria-label="First currency amount"
                />
              </td>
              <td>
                <select
                  value={chosenPrimaryCurrency}
                  name="currency-option-1"
                  className="currency-converter__options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                  aria-label="First currency selector"
                >
                  {currencies.map((currency, index) => (
                    <option key={index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <td>Secondary Currency</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-2"
                  value={result}
                  disabled={true}
                  aria-label="Second currency selector"
                />
              </td>
              <td>
                <select
                  value={chosenSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-converter__options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                  aria-label="Second currency amount"
                >
                  {currencies.map((currency, index) => (
                    <option key={index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button id="convert-button" onClick={convert}>
          Convert
        </button>
      </div>
      <ExchangeRate exchangedData={exchangedData} />
    </div>
  );
};

export default CurrencyConverter;
