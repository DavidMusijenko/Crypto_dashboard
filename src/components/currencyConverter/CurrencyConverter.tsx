import { useState } from "react";
import { ExchangeRate } from "./exchangeRate/ExchangeRate";
import axios from "axios";
import { Select, MenuItem, Button, TextField, Grid } from "@mui/material";

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
      url: "http://localhost:8000/convert",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setResult(response.data * amount);

        setExchangedData({
          primaryCurrency: chosenPrimaryCurrency,
          secondaryCurrency: chosenSecondaryCurrency,
          exchangeRate: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="currency-converter__main">
      <h2>Currency Converter</h2>
      <div className="currency-converter__input-box">
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              type="number"
              label="Primary Currency"
              name="currency-amount-1"
              id="currency-amount-1"
              fullWidth
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              aria-label="First currency amount"
            />
          </Grid>
          <Grid item xs={2}>
            <Select
              value={chosenPrimaryCurrency}
              name="currency-option-1"
              className="currency-converter__options"
              onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
              aria-label="First currency selector"
            >
              {currencies.map((currency, index) => (
                <MenuItem value={currency} key={index}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Result"
              type="number"
              name="currency-amount-2"
              value={result}
              disabled={true}
              aria-label="Second currency selector"
            />
          </Grid>
          <Grid item xs={2}>
            <Select
              value={chosenSecondaryCurrency}
              name="currency-option-2"
              className="currency-converter__options"
              onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
              aria-label="Second currency amount"
            >
              {currencies.map((currency, index) => (
                <MenuItem value={currency} key={index}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          id="convert-button"
          className="currency-converter__button"
          onClick={convert}
          size="large"
        >
          Convert
        </Button>
      </div>
      <ExchangeRate exchangedData={exchangedData} />
    </div>
  );
};

export default CurrencyConverter;
