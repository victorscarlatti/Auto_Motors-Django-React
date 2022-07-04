import React from 'react';
import { ReactComponent as logo } from '../../images/logo3.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'; 
import * as All from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                <img src="..." className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                <img src="..." className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  );
};

export default Footer;

