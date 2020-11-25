import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div className="card p-5">
          <h5>FACE MASK CATEGORIES</h5>
          <ul className="list-unstyled p-0 m-0">
            <li>
              <Link to="/disposablemask">
                <div className="d-inline-flex">
                  <div className="icon-wrap">
                    <i className="header-icon fas fa-recycle"></i>
                  </div>
                  <div className="text-wrap">Disposable Mask</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/n95mask">
                <div className="d-inline-flex">
                  <div className="icon-wrap">
                    <i className="header-icon fab fa-neos"></i>
                  </div>
                  <div className="text-wrap">N 95 Mask</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/maskforkids">
                <div className="d-inline-flex">
                  <div className="icon-wrap">
                    <i className="header-icon fas fa-child"></i>
                  </div>
                  <div className="text-wrap">Mask for Kids</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/reuseablemask">
                <div className="d-inline-flex">
                  <div className="icon-wrap">
                    <i className="header-icon fas fa-redo-alt"></i>
                  </div>
                  <div className="text-wrap">Reusable Face Mask</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/respiratormask">
                <div className="d-inline-flex">
                  <div className="icon-wrap">
                    <i className="header-icon fas fa-head-side-mask"></i>
                  </div>
                  <div className="text-wrap">Respirator Mask</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Sidebar;
