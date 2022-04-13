
import { Button,Container,Form} from 'react-bootstrap';
import {Stack} from 'react-bootstrap'
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import React from 'react'
import '../../index.css';
function Meme({meme,setmeme}) {
  const [form, setform] = useState({
    template_id:meme.id,
    username:"naitik2002",
    password:"Naitik@123",
    boxes:[],
  });
    console.log(meme);
    const GenerateMeme=()=>{
      let url=` https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
      form.boxes.map((box,index) => {
        url += `&boxes[${index}][text]=${box.text}`;
      })
      fetch(url).then(res=>res.json())
      .then(data => {
        setmeme({...meme, url: data.data.url})
      })
    };
  return (
    <div className='container'>
        <h3 style={{textAlign:"center",width:"100%"}}>{meme.name}</h3> 
        <Card border="dark" style={{ width: 'auto', margin:"auto",marginBottom:"20px"}}><img style={{height:"auto",width:"auto",}} src={meme.url} alt=''/></Card>
        <div style={{alignItems:"center",width:"100%"}}>
           { 
               [...Array(meme.box_count)].map((_,index)=>(
              <Form className='col-md-5 mx-auto mb-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                   key={index}
                   type="email" 
                   placeholder={`Meme Caption ${index + 1}`} 
                   onChange={(e)=>{
                     const newBoxes=form.boxes;
                     newBoxes[index]={text: e.target.value};
                     setform({...form, boxes: newBoxes});
                   }} />
                </Form.Group>
              </Form>
               ))
           }
           <div style={{textAlign:'center'}} >
           <Button style={{marginRight:'20px'}} variant="dark" size="lg" onClick={GenerateMeme} > Generate  </Button>
           {/* <Button className=""variant="dark" size="lg" onClick={GenerateMeme}> Generate  </Button> */}
           <Button variant="primary" size="lg" onClick={()=>{setmeme(null)}}> Choose Template  </Button>
           </div>
        </div>
    </div>
  )
}

export default Meme;

/* <input placeholder={`Meme Caption ${index + 1}`} style={{margin:"10px",display:"flex"}} type="text"/> */