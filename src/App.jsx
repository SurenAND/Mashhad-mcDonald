import { useState } from "react";
import Card from "./components/Card/Card";
import Orders from "./components/Orders/Orders";
import { fastFoods } from "./consts/db";

function App() {
  const [total, setTotal] = useState(0);
  const setTotalHandler = (price) => {
    setTotal((prev) => prev + price);
  };
  return (
    <section className="main-section">
      <section className="foods-section animate__animated animate__zoomIn">
        <h1 className="foods-section-header">رستوران مک دونالد شعبه مشهد</h1>
        <section className="foods" dir="rtl">
          {fastFoods.map((item) => (
            <Card
              name={item.name}
              price={item.price}
              image={item.image}
              onSetTotalHandler={setTotalHandler}
            />
          ))}
        </section>
      </section>
      {/* ---------- */}
      <Orders totalPrice={total} />
    </section>
  );
}

export default App;
