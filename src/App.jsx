import { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import ProductList, { sampleProducts } from './components/ProductList';
import Cart from './components/Cart';

const categories = ['All', ...new Set(sampleProducts.map((p) => p.category))];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState('All');

  const handleAddToCart = (product) => {
    setCartItems((prev) =>
      prev.some((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <header className="app-header">
        <h1>Shopping App</h1>
        <DarkModeToggle
          darkMode={darkMode}
          onToggle={() => setDarkMode((prev) => !prev)}
        />
      </header>

      <label className="filter">
        Filter by category{' '}
        <select
          data-testid="category-filter"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>

      <ProductList
        products={sampleProducts}
        category={category}
        onAddToCart={handleAddToCart}
      />
      <Cart items={cartItems} />
    </div>
  );
}