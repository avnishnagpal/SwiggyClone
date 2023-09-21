import React from "react";
import "./restCard.css";

const RestCard = (props) => {
  return (
    <div className="container">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props.imageId
        }
      />
      <div className="r-name">{props.name1}</div>
      <div className="c-name">{props.cuisine.join(", ")}</div>
      <div className="c-name ">{props.ratings}</div>
    </div>
  );
};

//Higher Order Component

export const PromotedRestCard = (RestCard) => {
  return (props) => {
    return (
      <>
        <label>Promoted</label>
        <RestCard {...props} />
      </>
    );
  };
};

export default RestCard;
