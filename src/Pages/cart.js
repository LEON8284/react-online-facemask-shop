/**
 * This is the cart component  where we will populate the data that is currently saved in the local storage
 */

import React from "react";
import Navbar from "../Components/Navbar";
import AppContext from "../AppContext";
import CartItem from "./cartItem";

class Cart extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="">
            <h3 className="card-title">Cart</h3>
            <hr />
            {this.context.cart.map((product, index) => (
              <CartItem
                product={product.product}
                qty={product.qty_added}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Cart.contextType = AppContext; // Cart will be an AppContext consumer
export default Cart;
