/**
 * The Route is serving us a provider to send any data that we have in our Route
 * to our home component and all other component that we will be creating inside our route.
 *
 *So now whatever we put inside the state will  be sent to to our entire project using a value.
 *
 *The state of our  route component is sent to every other component  of our project

 *The Home component is linked to every other component of our project. So whenever we want to send something 
 *to any component all we need is to send that with this AppContext Provider.
 */
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AppContext from "./AppContext";
import { getProducts } from "./repo";

class Routes extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],

      cart: JSON.parse(localStorage.getItem("cart")) || [], // every thing we will have in our cart we will send it to our local storage.

      // This is the function that adds our item to our  cart. It collects our products and saves it to our local storage.
      addToCart: (product, qty) => {
        let cart = this.state.cart;
        cart.push({
          product: product,
          qty,
          added: qty,
        });
        this.setState({
          cart: cart,
        });
        localStorage.setItem("cart", JSON.stringify(cart));
      },
    };
  }
  /**
   * this componentDidMount will first load while our component is loaded. So any function that is written here will first load before our component will mount.
   * This is a place where we write functions intend to run before our component actually  displays to our browser.
   *axios.get(url) :  here `url` is the server URL that will be used for the request.
   *this.setState  is used to bind whatever is coming from our response from the server so that we can use it our component
   */
  componentDidMount() {
    getProducts().then((products) => {
      this.setState({ products });
    });
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </AppContext.Provider>
    );
  }
}

export default Routes;
