// import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as All from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import { useState, useEffect } from 'react'
import React, { useState, useEffect } from 'react'
import { render } from '@testing-library/react';

const Home = () => { 
  let [imgs, setSrc] = useState([])

  useEffect(() =>{
    getSrc()
  }, [])

  let getSrc = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/getsrc/')  
    let data = await response.json()
    setSrc(data.ok)
  }

  return (
    <div className='container'> 
        <p className="notes-count">{imgs.length} imagens</p>
          <All.Carousel style={{backgroundColor: 'black'}} >
          {imgs.map((img_o, index) => (
            <All.Carousel.Item> 
                <img 
                  className="d-block w-100" 
                  src={"data:image/png;base64," + img_o.img}
                  alt="First slide"
                />  
                <All.Carousel.Caption>
                  <h3>{img_o.id}º Slide</h3>
                  <p>{img_o.desc}</p>
                </All.Carousel.Caption>
              </All.Carousel.Item>
            ))}
        </All.Carousel>

      <All.Row className="justify-content-md-center mt-3">
      <All.Col md="auto"><h3>Seja bem vindo nossa loja on-line</h3> </All.Col>
      </All.Row> 
      <All.Row className="justify-content-md-center mt-3">
        <All.Col xs lg="2">
          <All.Button variant="outline-info" href='/about'>Comprar - Sou cliente</All.Button>
        </All.Col>
        <All.Col md="auto">Quem é você?</All.Col>
        <All.Col xs lg="2">
          <All.Button variant="outline-info" href='/services'>Vender - Sou empresa</All.Button>
        </All.Col>
      </All.Row>
    </div>
  );
};

export default Home;
