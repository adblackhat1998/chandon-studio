import React from 'react';
import './Navbar.css'
const Navbar = () => {
    const menuList = <>
        <li className="nav-item fs-5">
            <a className="navLink" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item fs-5">
            <a className="navLink" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item fs-5">
            <a className="navLink" aria-current="page" href="#">Portfolio</a>
        </li>
        <li className="nav-item fs-5">
            <a className="navLink" aria-current="page" href="#">Resume</a>
        </li>
        <li className="nav-item dropdown fs-5">
            <a className="navLink dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
            </a>
            <ul className="dropdown-menu bg-dark">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>

        <li className="nav-item fs-5">
            <a className="navLink" aria-current="page" href="#">Contact Us</a>
        </li>
    </>

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark py-4" data-bs-theme="dark">
                <div className="container">
                    <a className="navbar-brand fst-italic" href="#"> <span className='text-warning fs-3'>DGITAL</span> STUDIO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            {menuList}
                        </ul>
                        <button className='resume-btn ms-5'>Resume</button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;