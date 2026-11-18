import ProductCard from './ProductCard';

export const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits' },
  { id: 2, name: 'Milk', category: 'Dairy' },
  { id: 3, name: 'Cheese', category: 'Dairy' },
  { id: 4, name: 'Bread', category: 'Bakery' },
  { id: 5, name: 'Banana', category: 'Fruits' },
];

export default function ProductList({ products, category, onAddToCart }) {
  const visible =
    category === 'All'
      ? products
      : products.filter((p) => p.category === category);

  if (visible.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <ul className="product-list">
      {visible.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </ul>
  );
}