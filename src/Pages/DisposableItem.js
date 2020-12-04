import React from "react";
import AppContext from "../AppContext";

class DisposableItem extends React.Component {
  render() {
    let { disposable } = this.props;
    return (
      <div className="col-sm-3">
        <div className="card p-3 mb-5">
          <div className="text-center">
            <img className="img-fluid" src={disposable.imageUrl} alt="" />
          </div>
          <hr />
          <h4 className="card-title">{disposable.name}</h4>
          <p className="card-text">{disposable.description}</p>
          <h5 className="card-text">
            Price: <small>${disposable.price}</small>
          </h5>
          <span className="card-text">
            <small>Available Quantity:</small>
            {disposable.available_quantity}
          </span>
          <div
            className="btn btn-sm  btn-warning"
            onClick={() => {
              this.context.addToCart(disposable, 1);
            }}
          >
            cart
          </div>
        </div>
      </div>
    );
  }
}
DisposableItem.contextType = AppContext;
export default DisposableItem;
