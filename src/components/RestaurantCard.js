import React from "react";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    avgRating,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    areaName,
    sla,
  } = resData?.info;

  return (
    <>
      <div className="restaurant-card">
        <img src={IMG_URL + cloudinaryImageId} />

        <p>
          {" "}
          <strong>{name}</strong>{" "}
        </p>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          ⭐️ {avgRating} <span> {sla?.deliveryTime} Minutes </span>
        </p>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          {" "}
          {costForTwo}{" "}
          <span>
            {" "}
            <em> {areaName} </em>{" "}
          </span>{" "}
        </p>
        <p> {cuisines.join(", ")} </p>
      </div>
    </>
  );
};

export default RestaurantCard;

export const withRestaurantDiscount = (RestaurantCard) => {
 
  return (props) => {
    const discountHeader = props?.resData?.info?.aggregatedDiscountInfoV3?.header;
    const discountSubHeader = props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader;
  
    return (
      <div>
        <label htmlFor="" style={lableStyle}>
        {discountHeader} {discountSubHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

const lableStyle = {
  position: "absolute",
  margin: "0.125rem 0.8125rem",
  padding: "0.5rem",
  background: "black",
  color: "white",
  borderRadius: "12px",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  border: "1px solid black",
  pointerEvents: "none",
};
