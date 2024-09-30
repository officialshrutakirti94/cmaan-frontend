import { useEffect, useState } from 'react';
import styles from '../styles/crypto.module.css';
import TradingViewWidget from '../components/tradingView'

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState('BTCUSDT'); // Default symbol to BTCUSDT

  useEffect(() => {
    const fetchCryptos = async () => {
      const res = await fetch('/api/crypto');
      const data = await res.json();
      setCryptos(data);
      setFilteredCryptos(data); // Set filtered data to full crypto list initially
    };

    fetchCryptos();
  }, []);

  useEffect(() => {
    // Filter the cryptos based on the search query
    const results = cryptos.filter(crypto =>
      crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCryptos(results);
  }, [searchQuery, cryptos]);

  const handleRowClick = (symbol) => {
    setSelectedSymbol(symbol.toUpperCase() + 'USDT'); // Update the selected symbol
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search Cryptocurrencies..."
        className={styles.searchBar}
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      {/* Pass the selected symbol to TradingViewWidget */}
      <TradingViewWidget symbol={selectedSymbol} />
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCell}>Name</th>
            <th className={styles.headerCell}>Symbol</th>
            <th className={styles.headerCell}>Price</th>
            <th className={styles.headerCell}>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {filteredCryptos.map(crypto => (
            <tr key={crypto.id} className={styles.row} onClick={() => handleRowClick(crypto.symbol)}>
              <td className={`${styles.cell} ${styles.nameCell}`}>
                <img src={crypto.image} alt={crypto.name} className={styles.icon} />
                {crypto.name}
              </td>
              <td className={styles.cell}>{crypto.symbol.toUpperCase()}</td>
              <td className={styles.cell}>${crypto.current_price.toFixed(2)}</td>
              <td className={styles.cell} style={{ color: crypto.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
