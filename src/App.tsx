import NewsFeed from "./components/newsFeed/NewsFeed";
import CurrencyConverter from "./components/currencyConverter/CurrencyConverter";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <div className="app">
      <h1>Crypto Dashboard</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CurrencyConverter />
        </Grid>
        <Grid item xs={6}>
          <NewsFeed />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
