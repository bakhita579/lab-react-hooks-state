export default function ProductCard({ product, onAddToCart }) {
  return (
    <li className="product-card">
      <h3>{product.name}</h3>
      <button
        data-testid={`product-${product.id}`}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </li>
  );
}