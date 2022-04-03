import Rating from "./Rating";
import React from "react";

export default function Product(props: any) {
  return (
    <div className="card">
      <a href={`/product/${props.product._id}`}>
        <img
          className="medium"
          src={props.product.image}
          alt={props.product.name}
        />
      </a>
      <div className="card-body">
        <a href={`/product/${props.product._id}`}>
          <h2>{props.product.brand}</h2>
        </a>
        <Rating
          rating={props.product.rating}
          numReviews={props.product.numReviews}
        ></Rating>
        <div className="price">${props.product.price}</div>
      </div>
    </div>
  );
}
