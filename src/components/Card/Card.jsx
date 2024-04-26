import { useState } from "react";

const Card = ({ name, price, image, onSetTotalHandler }) => {
  const [count, setCount] = useState(0);
  const plusHandler = () => {
    setCount(count + 1);
    onSetTotalHandler(Number(price));
  };
  const minusHandler = () => {
    count > 0 ? (setCount(count - 1), onSetTotalHandler(-Number(price))) : "";
  };
  return (
    <article className="food">
      <img src={`./assets/images/${image}.png`} />
      <section className="food-info">
        <h3 className="food-name">{name}</h3>
        <p className="food-price">{price} تومان</p>
        <div className="food-qty">
          <span
            className="increase-icon cursor-pointer icon-active"
            onClick={plusHandler}
          >
            +
          </span>
          <span className="food-qty-input">{count}</span>
          <span
            className="decrease-icon cursor-pointer icon-active"
            onClick={minusHandler}
          >
            -
          </span>
        </div>
      </section>
      <p className="food-total-price food-total-price-1">
        <span>{price * count}</span> تومان
      </p>
    </article>
  );
};

export default Card;
