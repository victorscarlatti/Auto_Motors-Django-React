import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { Button } from 'react-bootstrap';
import * as All from 'react-bootstrap'
import  { useState, useEffect } from 'react'
import * as All2 from 'react-icons/fa';
import Share from '../components/Share';

const About = () => {

  let [prods, setProd] = useState([])

  setTimeout(() => { 
    if (window.location.href.split("#")[1]) document.getElementById(window.location.href.split("#")[1]).scrollIntoView();
  }, 200);

  useEffect(() =>{
    getProd()
  }, [])
  
  let getProd = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/getprods/')  
    let data = await response.json()
    for (let i = 0; i < data.ok.length; i++) {
      let nd=new Date(data.ok[i].updated);
      data.ok[i].updated = nd.toLocaleDateString();      
    }
    setProd(data.ok) 
  }

  let updateProd = async (e) => { 
    e.previousElementSibling.outerHTML=e.previousElementSibling.outerHTML.replace('hidden=""','')
    e.outerHTML=e.outerHTML.replace(">",'hidden="true">')
    let response = await fetch('http://127.0.0.1:8000/api/updateprods/'+e.id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body:  {
          'id': e.id
      },
    })
    getProd()
  }
  return (
    <div className='container mt-4'>    
        {prods.map((p, i) => (
          <All.Row>
          <All.Col>
          <All.CardGroup className='mt-4'>
          <All.Card>
            <div><All.Card.Img variant="top" style={{height:'200px',width:'200px'}} src={"data:image/png;base64," + p.imgs}/> <span className='ms-4'>{p.desc}</span></div>
            <All.Card.Body>
              <All.Card.Title>{p.nome}</All.Card.Title>
              <All.Card.Text>
                R$ {p.preco}
              </All.Card.Text>
            </All.Card.Body>
            <All.Card.Footer id={'ad-'+i}>
              <small className="text-muted">{p.updated}</small>
              <All.Row> 
                <All.Col md={{offset: 9 }}>  
                    <All2.FaHeart  hidden/>
                    <All2.FaRegHeart value={p.id} id={p.id} onClick={(e) => { updateProd(e.target) }} />
                    <Share shareUrl={"http://127.0.0.1:3000/about#ad-" + i} />
                </All.Col>
              </All.Row>            
              <small className="text-muted">{p.status} likes</small>               
            </All.Card.Footer>
          </All.Card> 
        </All.CardGroup>   
        </All.Col>
        </All.Row>
        ))}
    </div>
  );
};

export default About;
