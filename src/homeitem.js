import React from "react";

class HomeItem extends React.Component {
  render() {
    let { products } = this.props;
    return (
      <div className="col-sm-3">
        <div className="card">
          <div className="">
            <img
              className="img-fluid"
              src={this.props.products.imageUrl}
              alt=""
            />
          </div>
          <hr />
          <h4 className="card-title">{products.name}</h4>
          <p className="card-text">{products.description}</p>
          <h5 className="card-text">
            Price: <small>${products.price}</small>
          </h5>
          <span className="card-text">
            <small>Available Quantity:</small>
            {products.avilable_quantity}
          </span>
        </div>
      </div>
    );
  }
}
export default HomeItem;
