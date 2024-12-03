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
