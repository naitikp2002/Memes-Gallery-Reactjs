import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../Contexts/StateProvider'
import UserPost from "./UserPost"
function UserPage() {
    const [{ user }, dispatch] = useStateValue();
    console.log(user)
    return (
        <>
        <Body>
            <Card className="bg-white rounded-xl shadow-md my-2">
                <Headder className=" flex  justify-center gap-2 md:gap-10">
                    <div className="Avatar my-4 ">
                        <img src={user.photoURL} alt="" />
                    </div>
                    <div className="userdata">
                        <div className="text-2xl flex gap-2 items-center"><b>{user.displayName}</b></div>
                        <h5 className="text-gray-700">{user.email}</h5>
                        {/* <div className="flex justify-start gap-2 md:gap-5"><p><span class="font-semibold" >0</span> followers </p> <p><span class="font-semibold" >0</span> Posts</p></div> */}
                    </div>
                </Headder>
                <div className="flex justify-center">
                </div>
            </Card>
            <UserPost />
            </Body>
        </>
    )
}

export default UserPage

const Card = styled.div`


`
const Headder = styled.div`
 align-items : center;

.Avatar{
   
    img {
    border-radius : 50%;
    } 
    
}
`

const Body = styled.div`
width : 80%;
max-width: 600px;
margin: 0 auto;
margin-top : 15px;
@media only screen and (max-device-width: 600px){
        
    width : 90%;
}
`
const MainPage = styled.div`
`

