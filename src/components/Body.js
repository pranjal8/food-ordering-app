import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredResaurant, setFilteredResaurant] = useState([]);
  const [search, setSearch] = useState("");

  const handleFilterRating = () => {
    let filteredData = listOfRestaurant?.filter(
      (item) => item?.info?.avgRating > 4
    );
    setFilteredResaurant(filteredData);
  };

  const handleFilterRestaurant = () => {
    const filterRes = listOfRestaurant.filter((item) => {
      return item?.info?.name?.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredResaurant(filterRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      const restaurantList =
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log(restaurantList);
      setListOfRestaurant(restaurantList);
      setFilteredResaurant(restaurantList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleFilterRestaurant}>Search</button>
      </div>
      <div className="filter">
        <button onClick={handleFilterRating}>Top Rated Restaurant</button>
        <button onClick={fetchData}>All Restaurant</button>
      </div>
      <div className="restaurant-container">
        {filteredResaurant?.map((item) => (
          <>
            <Link to={"/restaurants/" + item?.info?.id} key={item?.info?.id}>
              {" "}
              <RestaurantCard resData={item} />{" "}
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Body;
