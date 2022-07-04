

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'; 
import * as All from 'react-icons/fa';
import * as Alls from 'react-share'
import * as Allb from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Allb.Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Allb.Modal.Header closeButton>
        <Allb.Modal.Title id="contained-modal-title-vcenter">
          Compartilhar este anuncio
        </Allb.Modal.Title>
      </Allb.Modal.Header>
      <Allb.Modal.Body>        
        <h4>Escolha o envio</h4> 
        <Alls.FacebookShareButton url={props.shareUrl} className="ms-3">
            <Alls.FacebookIcon size={40} round={true}></Alls.FacebookIcon>
        </Alls.FacebookShareButton>
        <Alls.WhatsappShareButton url={props.shareUrl} className="ms-3">
            <Alls.WhatsappIcon size={40} round={true}></Alls.WhatsappIcon>
        </Alls.WhatsappShareButton>
        <Alls.TelegramShareButton url={props.shareUrl} className="ms-3">
            <Alls.TelegramIcon size={40} round={true}></Alls.TelegramIcon>
        </Alls.TelegramShareButton>
        <Alls.TwitterShareButton url={props.shareUrl} className="ms-3">
            <Alls.TwitterIcon size={40} round={true}></Alls.TwitterIcon>
        </Alls.TwitterShareButton>
        <Alls.EmailShareButton url={props.shareUrl} className="ms-3">
            <Alls.EmailIcon size={40} round={true}></Alls.EmailIcon>
        </Alls.EmailShareButton> 
      </Allb.Modal.Body>
      <Allb.Modal.Footer>
        <Allb.Button variant="outline-danger" onClick={props.onHide}>Close</Allb.Button>
      </Allb.Modal.Footer>
    </Allb.Modal>
  );
}


  const Share = (shareUrl) => {      
  
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button variant="outline-info" className='ms-3' onClick={() => setModalShow(true)}>
          Compartilhar<All.FaTelegramPlane className='ms-1'/>
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          shareUrl={shareUrl.shareUrl}
        />
      </>
    );
  };
  
  export default Share;