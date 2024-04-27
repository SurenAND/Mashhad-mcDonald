const Modal = ({ isOpen, toggleOpen }) => {
  const handleCloseModal = () => {
    toggleOpen();
    window.location.reload();
  };
  return (
    <>
      <section
        className={`purchase-successful-modal ${isOpen ? "showModal" : ""}`}
        dir="rtl"
      >
        <div className="container animate__animated animate__zoomIn">
          <div className="psModalContent">
            <button className="close cursor-pointer" onClick={handleCloseModal}>
              ✖
            </button>
            <img src="/assets/images/purchase.png" alt="Winner PNG" />
            <p>خریدت با موفقیت ثبت شد!</p>
            <p>از انتخابت پشیمون نمیشی 😉</p>
            <details className="purchase-details">
              <summary>
                سفارش ها
                <span>
                  <img
                    src="./assets/images/Down-Circle-2.svg"
                    alt="Down Circle 2"
                    className="purchase-details-img"
                  />
                </span>
              </summary>
              <section className="foods-details">
                <section className="foods-details-title">
                  <p className="food-details-name">نام غذا</p>
                  <p className="food-details-qty">تعداد</p>
                </section>
              </section>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;
