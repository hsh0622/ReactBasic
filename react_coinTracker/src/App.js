import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  function handleSelect(event) {
    setSelectedCoin(coins.find((coin) => coin.id === event.target.value));
  }
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={handleSelect} defaultValue="default">
          <option value="default" disabled>
            Select a coin
          </option>
          {coins.map((coin) => (
            <option value={coin.id} key={coin.id}>
              {coin.name} ({coin.symbol})
            </option>
          ))}
        </select>
      )}
      {selectedCoin ? <h1>{selectedCoin.quotes.USD.price}</h1> : null}
    </div>
  );
}

export default App;
