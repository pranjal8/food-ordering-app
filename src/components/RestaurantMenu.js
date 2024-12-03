import React, { useEffect, useState } from "react";
import { IMG_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = (props) => {
  const [resDetail, setResDetail] = useState(null);
  const [menuItem, setMenuItem] = useState([]);
  const { restaurantId } = useParams();
  
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          MENU_URL + restaurantId + "&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await response.json();
        setResDetail(json?.data?.cards[2]?.card?.card?.info);
        setMenuItem(
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
            ?.card?.card?.itemCards
        );
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
        <strong>Menu</strong>
        <ul>
          {menuItem?.map((item) => (
            <li className="menu-item-details" key={item?.card?.info?.id}>
              <div className="details">
                <strong>{item?.card?.info?.name} </strong>
                <p>Rs. {item?.card?.info?.price / 100}</p>
                <p>
                  Rating: {item?.card?.info?.ratings?.aggregatedRating?.rating}{" "}
                </p>
                <p>{item?.card?.info?.description} </p>
              </div>
              <img
                src={IMG_URL + item?.card?.info?.imageId}
                alt="Biryani"
                className="item-image"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
