import { useState } from "react";

const Orders = ({ totalPrice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalHandler = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div
        className={`purchase-successful-modal ${
          isModalOpen ? "showModal" : "hideModal"
        }`}
      >
        hi
      </div>
      <section
        className="check-out-section animate__animated animate__zoomIn"
        dir="rtl"
      >
        <section className="check-out-info">
          <section className="check-out-sum">
            <p>
              جمع کل سفارشات:
              <span>
                <span>{totalPrice}</span> تومان
              </span>
            </p>
          </section>
          <section className="check-out-service">
            <p>
              حق سرویس و کارمزد:
              <span>
                <span>1200</span> تومان
              </span>
            </p>
          </section>
          <section className="check-out-discount-section">
            <section className="check-out-discount">
              <p>
                تخفیف:
                <span>
                  <span>0</span> تومان
                </span>
              </p>
            </section>
            <section className="discount-input">
              <input type="text" name="discount" />
              <span className="discount-input-icon cursor-pointer icon-active">
                &#10004;
              </span>
            </section>
          </section>
        </section>
        <section className="check-out-purchase">
          <section className="check-out-total">
            <p>
              مبلغ قابل پرداخت:
              <span>
                <span>{totalPrice !== 0 ? totalPrice + 1200 : 0}</span> تومان
              </span>
            </p>
          </section>
          <button
            className="check-out-purchase-btn cursor-pointer icon-active"
            onClick={modalHandler}
          >
            ثبت سفارش
          </button>
        </section>
      </section>
    </>
  );
};

export default Orders;
