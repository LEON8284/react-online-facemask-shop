import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

class Routes extends React.Component {
  /*constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    getProducts().then((products) => {
      this.setState({ products });
    });
  }*/
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    );
  }
}

export default Routes;
