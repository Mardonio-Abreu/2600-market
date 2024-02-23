import cartLogo from "../../logo/iconmonstr-shopping-cart.svg"
const CartWidget = ({ quantity }) => {
  return (
    <>
      <button className="btn">
        <p>
          <img src={cartLogo} alt="cart logo"/>
          {quantity}
        </p>
      </button>
    </>
  );
};

export default CartWidget;
