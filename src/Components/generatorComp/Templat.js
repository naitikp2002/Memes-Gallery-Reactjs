import React from 'react'
import '../../index.css';
function Templat({templet,setmeme}) {
  return (

    <div className='container'>
    {templet.map(templet=>(
    <div key={templet.id} className ="temp" onClick={()=>setmeme(templet)} > 
    <div style={{borderRadius:'10px', backgroundImage: `url(${templet.url})`, backgroundSize:"cover",backgroundPosition:"center"}} className ="Image"></div> 
    </div>
    ))}
    </div>
  )
}

export default Templat;