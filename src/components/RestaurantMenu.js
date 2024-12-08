import React, { useEffect, useState } from "react";
import { IMG_URL, MENU_URL } from "../utils/constants";
import { useNavigate, useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";
import { useSelector } from "react-redux";

const RestaurantMenu = (props) => {
  const [resDetail, setResDetail] = useState(null);
  const [category, setCategory] = useState([]);
  const { restaurantId } = useParams();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          MENU_URL + restaurantId + "&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await response.json();
        setResDetail(json?.data?.cards[2]?.card?.card?.info);
        const categoryList =
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
              c?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        setCategory(categoryList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="menu-container">
      <div className="block-container">
        <h3> {resDetail?.name} </h3>
        <div className="block">
          <p>Total Rating: {resDetail?.totalRatings} </p>
          <p>Cusines: {resDetail?.cuisines.join(", ")} </p>
          <p>Outlet: {resDetail?.areaName}</p>
          <p>{resDetail?.sla?.deliveryTime} Minutes </p>
        </div>
      </div>
      <div className="menu-item-list">
        <strong>Dishes</strong>

        {category?.map((item, index) => (
          <>
            <div
              style={{ marginTop: "10px", padding: "6px" }}
              key={item?.card?.card?.title}
            >
              <div
                className={`accordion-title ${
                  expandedIndex === index ? "expanded" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {item?.card?.card?.title} ({item?.card?.card?.itemCards.length})
                <span>{expandedIndex === index ? "▲" : "▼"}</span>
              </div>

              {expandedIndex === index && (
                <RestaurantCategory data={item?.card?.card?.itemCards} />
              )}
            </div>
          </>
        ))}
      </div>
      <Notification />
    </div>
  );
};

export default RestaurantMenu;

const Notification = () => {
  const cartItem = useSelector((s) => s.cart.items.length);
  const navigate = useNavigate();

  return (
    cartItem > 0 && (
      <div style={showCart}>
        <p>{cartItem} Item{cartItem > 1 ? 's' : ''} Added</p>
        <p style={{ cursor: 'pointer'}} onClick={() => navigate('/cart')}>View Cart 🛒</p>
      </div>
    )
  );
};

const showCart = {
  border: "1px solid green",
  backgroundColor: "green",
  padding: "12px",
  position: "fixed",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  bottom: "0px",
  width: "57vw",
};
