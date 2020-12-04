/*Cart item becomes a child component of our cart component

*/
import { queryByTestId } from "@testing-library/react";
import React from "react";
import AppContext from "../AppContext";

class CartItem extends React.Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-body">
          <img
            className="float-left"
            alt=""
            src={product.imageUrl}
            style={{ width: "12%" }}
          ></img>
          <h4 className="card-title">{product.name}</h4>
          <h5 className="card-text">
            <small>price:</small>${product.price}
          </h5>
          <span className="card-text">
            <small>Quantity added: </small>
            {product.qty}
          </span>
          <button
            className="btn btn-sm btn-warning float-right"
            onClick={() => {
              this.context.removeFromCart(product.id);
            }}
          >
            Remove from cart{" "}
          </button>
        </div>
      </div>
    );
  }
}

CartItem.contextType = AppContext; // CartItem will be an AppContext consumer
export default CartItem;
