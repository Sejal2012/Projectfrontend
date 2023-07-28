import './Style.css';
import React from 'react';

const Navbar = () => {
    return (
        <div class="parent">
            <div id="first">
                <div id="first1">
                <a  href='#'>
                        We are open 24/7  | 
                    </a>
                <a href='#'>
                     sejalgoyal661@gmail.com
                    </a>
                </div>
                <ul id="icons">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-youtube"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-pinterest"></a>
                </ul>
        
            </div>
            <div id="second">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                        <a class="navbar-brand" href="#">Bisnes</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                       </button>
                    
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Project</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-disabled="true">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-disabled="true">Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            </div>

    )
}

export default Navbar;


