import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import data from "../data";

export default function ProductScreen(props:any) {
  const { id } = useParams();
  const product = data.products.find((x) => x._id === id);

  if (!product) {
    return <div> Product is Not Found</div>;
  }
  return (
    <div> 
     <Link to="/">Back To Result </Link>
      <div className="row top">
        <div className="col-2">
          <img src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numreviews={product.numReviews} />
            </li>
            <li>${product.price}</li>
            <li>{product.description}</li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price ">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>States</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success"> In Stack</span>
                    ) : (
                      <span className="error">Unavalable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary black">Add To Cart </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
