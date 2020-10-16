import React from 'react';
import './navbar-style.css';
import logo from './logo.png';

function NavbarView(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <span className="navbar-brand">
                    <img src={logo} alt={props.altLogo}></img>
                </span>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse justify-content-end">
                    {/* <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <h3 className="time"> 02:50:23 </h3>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </li>
                    </ul> */}
                </div>
            </nav>
        </div>

    );
}
export default NavbarView