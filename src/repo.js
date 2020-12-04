/**
 *For the purpose calling data from the node server we will create a new component.
Any time we want to call data from the node server we will use this component by importing it.
This is the class based approach to call data from node server.

The main function of this page is to receive the data from our node server just to link our node server 
to our React project. This is why we are creating this repo.

It is from this repo that we will now link to each component we want to use whatever we will receive from our node server 
If we want to send back from our React project to our server we can also use this repo.js
 */

import axios from "axios";

let url = "http://localhost:4000";

export function getProducts() {
  return axios.get(`${url}/products`).then((response) => response.data);
}

/**
 * We will accept the disposable face mask products here  by liniking it with axios
 */

export function getdisposable() {
  return axios.get(`${url}/disposable`).then((response) => response.data);
}
