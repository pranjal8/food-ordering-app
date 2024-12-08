import React, { useState } from "react";
import { IMG_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/createSlice";
import { Link, useNavigate } from "react-router";

const RestaurantCategory = ({ data }) => {
  const dispatch = useDispatch();

  // Access cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Function to get the quantity of an item in the cart
  const getItemQuantity = (itemId) => {
    const cartItem = cartItems.find(
      (cartItem) => cartItem.card.info.id === itemId
    );
    return cartItem ? cartItem.quantity : 0; // Return 0 if not found
  };

  const handleAddMenu = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveMenu = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <ul>
        {data?.map((item, index) => {
          const itemId = item?.card?.info?.id;
          const info = item?.card?.info;
          const itemQuantity = getItemQuantity(itemId);

          return (
            <div>
              <li className="menu-item-details" key={itemId}>
                <div className="details">
                  <strong>{info?.name} </strong>
                  <p>Rs. {info?.price / 100}</p>
                  <p>
                    {info?.ratings?.aggregatedRating?.rating
                      ? "Rating: " +
                        info?.ratings?.aggregatedRating?.rating +
                        "⭐️"
                      : ""}
                  </p>
                  <p>{info?.description} </p>
                </div>
                <div className="add-menu">
                  <img
                    src={IMG_URL + info?.imageId}
                    alt="Biryani"
                    className="item-image"
                  />
                  {itemQuantity > 0 ? (
                    <div className="btn-inc-dec">
                      <button
                        style={{ padding: "2px" }}
                        onClick={() => handleAddMenu(item)}
                      >
                        +
                      </button>
                      <span style={{ padding: "2px" }}>{itemQuantity}</span>
                      <button
                        style={{ padding: "2px" }}
                        onClick={() => handleRemoveMenu(item)}
                      >
                        -
                      </button>
                    </div>
                  ) : (
                    <button className="add" onClick={() => handleAddMenu(item)}>
                      Add
                    </button>
                  )}
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantCategory;
