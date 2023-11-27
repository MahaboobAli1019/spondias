import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar-dark bg-dark shadow'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-white">SPONDIAS</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active text-white" aria-current="page">
                            Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white">
                            About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-white">
                            Contact
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>

                </div>
            </div>
        </div>
    </div>
    
    
    

    
  
  )
}
