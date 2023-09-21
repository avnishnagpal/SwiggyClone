import RestCard from "./RestCard";
//import rest from "../utilis/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { PromotedRestCard } from "./RestCard";

const Body = () => {
  const [restData, setRestData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterRestro, setFilterRestro] = useState([]);

  const RestCardPromoted = PromotedRestCard(RestCard);

  useEffect(() => {
    fetchData();
  }, []); // useEffect(callback function, [dependencies]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4473388&lng=78.3564887&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setFilterRestro(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  function onClickHandler() {
    setFilterRestro(restData.filter((r) => r.info.avgRating > 4));
  }

  function onResetHandler() {
    setFilterRestro(restData);
  }

  function onSearchHandler() {
    let restfilter = restData.filter((f) => {
      return f.info.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    setFilterRestro(restfilter);
  }

  if (restData?.length === 0) {
    return <Shimmer />;
  } else
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          className="inputBar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button className="searchBtn" onClick={onSearchHandler}>
          Search
        </button>
        <button className="btn" onClick={() => onClickHandler()}>
          Top Rated
        </button>
        <button className="btn reset" onClick={() => onResetHandler()}>
          Reset
        </button>
        <div className="Card-Container">
          {filterRestro &&
            filterRestro.map((r) => {
              return r.info.promoted == true ? (
                <RestCardPromoted
                  key={r.info.id}
                  name1={r.info.name}
                  cuisine={r.info.cuisines}
                  ratings={r.info.avgRating}
                  imageId={r.info.cloudinaryImageId}
                />
              ) : (
                <RestCard
                  key={r.info.id}
                  name1={r.info.name}
                  cuisine={r.info.cuisines}
                  ratings={r.info.avgRating}
                  imageId={r.info.cloudinaryImageId}
                />
              );
            })}
        </div>
      </div>
    );
};

export default Body;
