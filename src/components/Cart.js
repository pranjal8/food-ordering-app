import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem, removeItem, clearCart } from "../utils/createSlice";

const Cart = () => {
  const dispatch = useDispatch();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.card.info.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div style={container}>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start adding some items!</p>
      ) : (
        <div style={{ width: "80vw", margin: "10px 20vw" }}>
          <ul style={{ listStyle: "none" }}>
            {cartItems.map((item) => {
              const { id, name, price, imageId } = item.card.info;
              return (
                <li key={id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "20px",
                      borderBottom: "1px solid #efefef",
                    }}
                  >
                    <div
                      style={{
                        padding: "10px",
                        lineHeight: "1.5",
                      }}
                    >
                      <strong>{name}</strong>
                      <p>Price: Rs. {price / 100}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <img
                        src={IMG_URL + imageId}
                        alt={name}
                        style={{ width: "130px", height: "130px" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "-16px",
                          padding: "6px",
                        }}
                      >
                        <button
                          style={{ padding: "2px", margin: "2px" , backgroundColor:'black', color:'white'}}
                          onClick={() => dispatch(addItem(item))}
                        >
                          +
                        </button>
                        <button
                          style={{ padding: "2px", margin: "2px",  backgroundColor:'black', color:'white' }}
                          onClick={() => dispatch(removeItem(item))}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
              borderTop: "1px solid gray",
            }}
          >
            <h2>Total: Rs. {totalPrice / 100}</h2>
            <button
              style={{
                padding: "10px",
                borderRadius: "10px",
              }}
              onClick={handleClearCart}
              className="clear-cart"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

export const container={ display: "flex", alignItems: "center", justifyContent:'center' }
