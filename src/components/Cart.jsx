export default function Cart({ items }) {
  return (
    <section className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{`${item.name} is in your cart.`}</li>
          ))}
        </ul>
      )}
      <p>
        Cart total: {items.length} {items.length === 1 ? 'item' : 'items'}
      </p>
    </section>
  );
}