
import "../styles/card.css";

interface product {
    name:string,
    description :string,
    price:number
}

function Card({ name, description, price }:product) {
  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>
      <p className="card-desc">{description}</p>
      <p className="card-price">₹{price}</p>
      <button className="card-btn">Add to Cart</button>
    </div>
  );
}

export default Card;
