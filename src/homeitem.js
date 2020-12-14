/**
 * This is the child component of the Home. This component is created to populate the product in our Home component.
 */

import React from "react";
import AppContext from "./AppContext";

class HomeItem extends React.Component {
  render() {
    let { products } = this.props; // reeving data from parent component Home.
    return (
      <div className="col-sm-3">
        <div className="card p-3 mb-5">
          <div className="text-center">
            <img className="img-fluid" src={products.imageUrl} alt="" />
          </div>
          <hr />
          <h4 className="card-title">{products.name}</h4>
          <p className="card-text">{products.description}</p>
          <h5 className="card-text">
            Price: <small>${products.price}</small>
          </h5>
          <span className="card-text">
            <small>Available Quantity:</small>
            {products.available_quantity}
          </span>
          <div
            className="btn btn-sm  btn-warning"
            onClick={() => {
              this.context.addToCart(products, 1);
            }}
          >
            cart
          </div>
        </div>
      </div>
    );
  }
}
HomeItem.contextType = AppContext;
export default HomeItem;
