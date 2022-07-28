import { ExchangeRate } from "./ExchangeRate";

export const CurrencyConverter = () => {
  const currencies = [];

  return (
    <div className="currency-converter__main">
      <h2>CurrencyConverter</h2>
      <div className="currency-converter__input-box">
        <table>
          <body>
            <tr>
              <td>Primary Currency</td>
              <td>
                <input type="number" name="currency-amount-1" value={""} />
              </td>
              <td>
                <select
                  value={""}
                  name="currency-option-1"
                  className="currency-converter__options"
                >
                  <option></option>
                </select>
              </td>
            </tr>

            <tr>
              <td>Secondary Currency</td>
              <td>
                <input type="number" name="currency-amount-2" value={""} />
              </td>
              <td>
                <select
                  value={""}
                  name="currency-option-2"
                  className="currency-converter__options"
                >
                  <option></option>
                </select>
              </td>
            </tr>
          </body>
        </table>
      </div>
      <ExchangeRate />
    </div>
  );
};

export default CurrencyConverter;
