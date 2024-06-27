import React from "react";
import { Link } from 'react-router-dom';
import "../CSS/Navbar.css"

function Navbar(){
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid m-2">
                <div className="col-4">
                    <Link to="/" className="navbar-brand h1 text-dark">EthSkillVerify</Link>
                </div>
                <div className="col-8">
                    <div className="container row">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-secondary" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="col-8 d-flex justify-content-end align-items-center">
                            <div className="d-flex justify-content-center align-items-center">
                                <Link to="/" className="ms-1 me-1 p-2 nav-link">Home</Link>
                                <Link to="/profile" className="ms-1 me-1 p-2 nav-link">Profile</Link>
                                <Link to="/voting" className="ms-1 me-1 p-2 nav-link">Voting</Link>
                                <button className="ms-1 me-1 btn btn-dark" type="submit">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar