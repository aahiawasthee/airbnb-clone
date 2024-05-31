import React from "react";
import star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <p className="badge-text">{badgeText}</p>}
      <img src={props.coverImg} alt="card" className="card-image" />
      <div className="card-stats">
        <img src={star} alt="star" className="card-rating" />
        <span>
          {" "}
          ({props.stats.rating}) • {props.location}
        </span>
      </div>
      <div className="card-details">
        <p>{props.title}</p>
        <p>
          <strong>From ${props.price}</strong>/ person
        </p>
      </div>
    </div>
  );
}
