import React from 'react';
import Logo from './logo.jpg';
import './index.css';


class Navbar extends React.Component {
    render(){
        return(
            <div>
                <nav className="navbar fixed-top shadow-sm bg-white navbar-expand-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <a className="" href="#">
                                    <img className="w-100" src={Logo} alt="logo"></img>
                                </a>
                            </div>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <button className="navbar-toggler" type="button" data-toggle="#navbarcontent" aria-expanded="false">
                                    <i className="header-icon fas fa-bars"/></button>
                                <div className="row float-right collaps navbar-collaps" id="navbarcontent">
                                    <div className="col-xs-4">
                                        <div className="dropdown">
                                        <a href="#" className="header-text" data-toggle="dropdown" data-offset="20,10" aria-haspopup="true" aria-expanded="false">
                                        <div className="d-inline-flex">
                                            <div className="icon-wrap">
                                                <i className=" header-icon fas fa-user"/>
                                            </div>
                                            <div className="text-wrap">
                                                <div>Sign in</div>
                                                <i className="fas fa-caret-down"/>
                                                </div>
                                        </div>
                                        </a>
                                        <div className="dropdown-menu">
                                            <form className="px-4 py-3">
                                                <div className="form-group">
                                                    <label>Email Address</label>
                                                    <input type="email" className="form-control" placeholder="email"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control" placeholder="password"/>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Sign in</button>
                                            </form>
                                            <a className="dropdown-item" href="#">Don't have an account? Sign up</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-4">
                                    <a href="#" className="header-text">
                                        <div className="d-inline-flex">
                                        <div className="icon-wrap">
                                                <i className="header-icon fas fa-shopping-cart "/>
                                            </div>
                                            <div className="text-wrap">
                                                <span className="small round badge badge-secondary">0</span>
                                                <div>Cart </div>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className="col-xs-4">
                                    <a href="#" className="header-text">
                                        <div className="d-inline-flex">
                                        <div className="icon-wrap">
                                                <i className="header-icon fas fa-heart"/>
                                            </div>
                                            <div className="text-wrap">
                                                <span className="small round badge badge-secondary">1</span>
                                                <div>Wishlist </div>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;
