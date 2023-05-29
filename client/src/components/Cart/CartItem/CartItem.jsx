import "./CartItem.scss";
// import prod from "../../../assets/products/earbuds-prod-1.webp";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);
  console.log("mera bharat mahan");
  console.log(cartItems);

  return (
    <div className="cart-products">
      {cartItems?.map((item) => {
        return (
          <div key={item.id} className="cart-product">
            <div className="img-container">
              <img
                src={
                  process.env.REACT_APP_DEV_URL +
                  item?.attributes?.img?.data?.[0]?.attributes?.url
                }
                alt="img"
              />
            </div>
            <div className="prod-details">
              {console.log({ item })}
              <span className="name">{item?.attributes?.title}</span>
              <MdClose
                className="close-btn"
                onClick={() => handleRemoveFromCart(item)}
              ></MdClose>
              <div className="quantity-buttons">
                <span onClick={() => handleCartProductQuantity("dec", item)}>
                  -
                </span>
                <span>{item?.attributes?.quantity}</span>
                <span onClick={() => handleCartProductQuantity("inc", item)}>
                  +
                </span>
              </div>
              <div className="text">
                <span>{item?.attributes?.quantity}</span>
                <span>x</span>
                <span>
                  &#8377;{item?.attributes?.price * item?.attributes?.quantity}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
