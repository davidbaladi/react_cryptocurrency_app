import React, { useState, useEffect, useRef } from "react";
import Api from "./Api";
import Coin from "./Coin";
import "./CryptoApp.css";

const CryptoApp = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("componentDidMount");

    Api().then((res) => setCoins(res));
  }, []);

  console.log("Coin Data:", coins);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log("Filtered Coins:", filteredCoins);

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search For A Currency.</h1>
        <form>
          <input
            ref={inputRef}
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
};

export default CryptoApp;
