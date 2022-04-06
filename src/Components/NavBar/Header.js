import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import AddPhotoAlternateSharpIcon from '@mui/icons-material/AddPhotoAlternateSharp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { Avatar, IconButton } from '@material-ui/core'
import Sidebar from '../Sidebar'
import { useStateValue } from '../../Contexts/StateProvider'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Create } from '@material-ui/icons';

function Header() {
    const [{ user }, dispatch] = useStateValue();
    const [page, setPage] = useState(window.location.pathname)
    useEffect(() => {
        console.log(page)
        setPage(window.location.pathname)
        console.log(page)

    }, [window.location.pathname])
    return (
        <NavHead>
            <NavWrapper className='items-center'>
                <div className="flex m-2  items-center" >

                    {/* <div className="ml-2 w-10">
                        <img className="h-10 " src="https://swasthikshetty10.github.io/logo.png" alt='' />
                    </div> */}
                     <div className="ml-2 w-10">
                        <img className="h-15 " src="data:image/png;base64,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" alt='' />
                    </div>


                    <div className="flex  ml-2 items-center  bg-gray-300 rounded-md">
                        <SearchIcon className="ml-3" />
                        <input className="p-2 bg-t bg-transparent outline-none" type="text" placeholder="Search memes" />
                    </div>

                </div>

            </NavWrapper>
            <Wrapper>

                <div className="MobSticky">
                    <HeaderCenter >

                        {/* <div className="header_option" id="sidebar" >
                            <Sidebar />
                        </div> */}
                        <Link to="/">

                            <div className='header_option' onClick={() => setTimeout(function () { setPage(window.location.pathname) }, 1)} id={page === "/" && "pageactive"}>
                                {/* <HomeIcon fontSize="large" /> */}
                                <h5 style={{color:'Blue'}}>Home</h5>
                            </div>
                        </Link>

                        <Link to="/sendposts">
                            <div className='header_option' onClick={() => setTimeout(function () { setPage(window.location.pathname) }, 1)} id={page === "/sendposts" && "pageactive"}>
                                {/* <AddCircleOutlineIcon fontSize="large" /> */}
                                <h5 style={{color:'Blue'}}>Upload</h5>
                            </div>
                        </Link>

                        <Link to="/chats">
                            <div className='header_option' onClick={() => setTimeout(function () { setPage(window.location.pathname) }, 1)} id={page === "/chats" && "pageactive"}>
                                {/* <ChatBubbleIcon fontSize="large" /> */}
                                {/* <AddPhotoAlternateSharpIcon fontSize="large"/> */}
                                <h5 style={{color:'Blue'}}>Create</h5>
                            </div>
                        </Link>

                        <Link to="/user">
                            <div className='header_option'>
                                {/* <SupervisedUserCircleIcon fontSize="large"/> */}
                                {/* <HeaderInfo> */}
                                <Avatar src={user.photoURL} className="Avatar" />
                                {/* <h4>{user.displyName}</h4> */}
                                {/* </HeaderInfo> */}
                            </div>
                        </Link>


                    </HeaderCenter>
                </div>

            </Wrapper>
        </NavHead>

    )
}

export default Header

const NavHead = styled.div`
position: -webkit-sticky; /* Safari */
position: sticky;
top: 0;
display : flex;

width : 100%;
flex-direction : column;
    z-index: 1000;

    @media only screen and (min-device-width: 900px){
        flex-direction : row;
        justify-content : space-evenly;
        width : 100%;
       
    }
`
const Wrapper = styled.div`
    background-color : white;  
    padding : 15px 20px;
    box-shadow: 0px 5px 8px -9px rgba(0,0,0,0.75);
    @media only screen and (max-device-width: 480px){
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        .MobSticky {
            
        }
    }
    @media only screen and (min-device-width: 826px){
        flex-direction : row;
        justify-content : space-evenly;
        width : 100%;
        
    }

`

const NavWrapper = styled.div`

    display : flex;
    
    justify-content : space-between;

    background-color : white;
    z-index : 100;
    top : 0;
    box-shadow: 0px 5px 8px -9px rgba(0,0,0,0.75);
    
    
    @media only screen and (max-device-width: 480px){
         
        height : 55px;

    }
    
    
`
const HeaderLeft = styled.div`
    display : flex;
    .Sidebar{
        padding: 10px;
    }
    img {
        max-height: 40px;
        color: rgb(129, 89, 240);
       
      }
      @media only screen and (max-device-width: 480px){
         
        img {
            max-height: 40px;
            color: rgb(129, 89, 240);
           
          }
        height: 50px;
        max-width: 200px;

    }
`

const HeaderCenter = styled.div`
    margin-top : 2px;
    display : flex;
    
    align-items : left;
    justify-content : right;
    #pageactive >  .MuiSvgIcon-root{
        color: rgb(129, 89, 240);  

    }
    #pageactive{
        border-bottom : 4px solid rgb(129, 89, 240); 
    }
    .header_option homeicon > .MuiSvgIcon-root {
        color: rgb(129, 89, 240);  
    }
    .header_option>.MuiSvgIcon-root {
        color: gray;
      }

    .header_option:hover>.MuiSvgIcon-root {
        color: rgb(129, 89, 240);
      }

    .header_option {
        display: flex;
        align-items: center;
        padding: 0 20px;
        cursor: pointer;
      }

    .header_option:hover {
        background-color: rgb(233, 233, 233);
        border-radius: 20px;
      }
      @media only screen and (max-device-width: 480px){
        margin-top: 0px;
        max-height 30px;
        width : auto;
    
         
        
        
    }
    
`
const HeaderInfo = styled.div`
    align-items : center;
    h4{
        margin-left : 2px;
    }
    
    @media only screen and (max-device-width: 480px){
        
        max-height : 30px;
        max-width : 80px;
        .MuiSvgIcon-root {
            size : 20px;
        }
        .Avatar{
            max-height : 33px;
            width : 33px;
        }
    }
`