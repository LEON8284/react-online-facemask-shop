/**
 * We will use a child component here called DisposableItem
 */
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AppContext from "../AppContext";
import Sidebar from "../Components/Sidebar";
import DisposableItem from "./DisposableItem";

class DisposableMask extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="disposable-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <Sidebar />
              </div>
              <div className="col-sm-8">
                <div>Hello World</div>
                <div className="row">
                  {this.context.disposables.map((disposable, index) => (
                    <DisposableItem disposable={disposable} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
DisposableMask.contextType = AppContext; //  receive the app context . we made the DisposableMask component as an app context consumer.
export default DisposableMask;
