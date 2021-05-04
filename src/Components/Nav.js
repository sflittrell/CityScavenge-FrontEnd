import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Utilities/AuthContext'
import './Nav.css';

export default function Nav() {

    const { logout } = useAuth()

    return (
        <div>
            <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold text-warning" to={'/'}>City Scavenge</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to={"/whatwedo/"}>What We Do</Link>
                            <Link className="nav-link" to={"/#/"}>How It Works</Link>
                            <Link className="btn btn-outline-dark me-2 d-sm-block d-md-none" type="button" to={"/register/"}>Create Account</Link>
                            <Link className="btn btn-outline-dark me-2 d-sm-block d-md-none" type="button" to={"/login/"}>Login</Link>
                        </div>
                    </div>
                    <Link className="btn btn-outline-dark me-2 d-none d-sm-none d-md-block" type="button" to={"/register/"}>Create Account</Link>
                    <Link className="btn btn-outline-dark me-2 d-none d-sm-none d-md-block" type="button" to={"/login/"}>Login</Link>
                    <button className="btn btn-outline-dark me-2 d-none d-sm-none d-md-block" type="button" onClick={logout}>Logout</button>
                </div>
            </nav>
        </div>
    )
}
