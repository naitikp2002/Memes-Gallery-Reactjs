import React, { useEffect } from 'react'
import { useState } from 'react'
import '../../index.css';
import Meme from './Meme';
import Templat from './Templat';
export default function Create() {
    const [templet, settemplet] = useState([]);
    const [meme, setmeme] = useState(null)
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then((data)=>{settemplet(data.data.memes);})
    },[])
  return (
    <>
    <div style={{Width:'100%',justifyContent:'center'}}>
    <h2 style={{textAlign:'center',color:'white',marginTop:'20px'}}>Meme Generator</h2>
    <div style={{width:'100%'}}>
    {meme=== null ? <Templat templet={templet} setmeme={setmeme}/>:<Meme meme={meme} setmeme={setmeme}/>}
    </div>
    </div>
    </>
  )
}
