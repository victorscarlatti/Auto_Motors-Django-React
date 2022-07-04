import React from 'react';
import * as All from 'react-bootstrap'
import { useState, useEffect } from 'react'

const Services = () => {

  let [note, setNote] = useState(null)

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  async function getString() {
    var file = document.getElementById("formFileSm").files[0]  
    let str = await getBase64(file);
    document.getElementById("img_bs").value=str
    return str;
  }

  let submit = (e) => {
    var formData= new FormData(document.getElementById('e'))   
    var form=document.getElementById('e')      
      var dataa=[]
      for (let i=0; i < form.elements.length; i++) {
        const elem = form.elements[i];
        dataa[(elem.name)] = elem.value
      } 
    // var file = document.querySelector('#files > input[type="file"]').files[0];
    //.then(
    //   data => console.log(data)
    // );
    // console.log(da23ta)
    // console.log(dataa['nome'])
    // console.log(JSON.stringify(dataa))
    // fetch('http://127.0.0.1:8000/api/createprods', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },        
    //     body: {
    //         'nome': "dataa['nome']",
            // 'desc': dataa['desc'],
            // 'preco': dataa['preco'],
            // 'owner': dataa['owner']
        // }
        // 'body': JSON.stringify(dataa)
        // body: formData
        // body: JSON.stringify(formData)
    // })
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: dataa['nome'], desc: dataa['desc'], preco: dataa['preco'], owner: dataa['owner'], img: dataa['img_bs'] })
      // body: JSON.stringify(dataa)
      // dataa
    };
    fetch('http://127.0.0.1:8000/api/createprods', requestOptions)    
    window.location.href = "http://127.0.0.1:3000/about";
  }

  let handleChange = (value, name) => {
      // console.log(note,'hahah ae carai')
      // console.log(name)
      setNote(note => ({ ...note, name: value }))
      // console.log('Handle Change:', note)
  }

  return (
    <div className='container'>    
       <All.Row className="mb-3 mt-3">
        <h5>Novo Produto/Anuncio</h5>
       </All.Row>
       <All.Form id="e" onSubmit={(e) => { submit(e.target) }}>
            <All.Row>
              <All.Col xs={6}>
                <All.Form.Control className='mb-3' size="sm" name="nome" placeholder="Nome produto" onChange={(e) => { handleChange(e.target.value,e.target.name) }} />
              </All.Col> 
            </All.Row>
            <All.Row>
            <All.Col xs={9}>
                <All.Form.Control className='mb-3' size="sm" name="desc" placeholder="Descrição do produto" as="textarea" rows={3}  onChange={(e) => { handleChange(e.target.value,e.target.name) }} />
              </All.Col> 
            </All.Row>
            <All.Row> 
              <All.Col xs={3}>
                <All.InputGroup className="mb-3">
                  <All.InputGroup.Text>$</All.InputGroup.Text>
                  <All.Form.Control size="sm" aria-label="Amount (to the nearest dollar)" name="preco" onChange={(e) => { handleChange(e.target.value,e.target.id) }} />
                  <All.InputGroup.Text>.00</All.InputGroup.Text>
                </All.InputGroup>
              </All.Col> 
            </All.Row>
            <All.Form.Control className='mb-3' hidden="true" size="sm" name="img_bs" id="img_bs" placeholder="Nome produto" onChange={(e) => { handleChange(e.target.value,e.target.name) }} />
            
            <All.Row>
              <All.Col xs={9}>
                <All.Form.Group controlId="formFileSm" className="mb-4">
                  <All.Form.Label>Imagens do produto</All.Form.Label>
                  <All.Form.Control type="file" onChange={getString} size="sm" />
                </All.Form.Group>
              </All.Col>            
            </All.Row>   
            <All.Row>
              <All.Col xs={4}> 
                <All.InputGroup className="mb-3">
                  <All.InputGroup.Text>+55</All.InputGroup.Text>
                  <All.Form.Control size="sm" placeholder="Contato" name="owner" onChange={(e) => { handleChange(e.target.value,e.target.name)}} />
                  {/* <All.InputGroup.Text>.00</All.InputGroup.Text> */}
                </All.InputGroup> 
              </All.Col>            
            </All.Row>
            <All.Button variant="outline-info" className='mt-3' type="button" onClick={(e) => { submit(e.target) }}>
              Enviar
            </All.Button>
        </All.Form>
    </div>
  );
};

export default Services;
