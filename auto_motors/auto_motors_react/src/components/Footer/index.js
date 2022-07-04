import React from 'react';
import { ReactComponent as logo } from '../../images/logo3.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'; 
import * as All from 'react-icons/fa';

const Footer = () => {
  return (
    <>
       
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width={30} height={24}>
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <span className="text-muted">© 2022 Victor Scarlatti Borsonai, Inc</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/victor-scarlatti-borsonai-02703617b/"> <All.FaFacebook /></a></li>
            <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/victor-scarlatti-borsonai-02703617b/"> <All.FaTwitter /></a></li>
            <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/victor-scarlatti-borsonai-02703617b/"> <All.FaFacebookMessenger />
              </a></li>
            <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/victor-scarlatti-borsonai-02703617b/"> <All.FaWhatsapp /></a></li>
            <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/victor-scarlatti-borsonai-02703617b/"> <All.FaLinkedinIn /></a></li>
            <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/victor-scarlatti-borsonai-02703617b/"> <All.FaInstagram /></a></li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
