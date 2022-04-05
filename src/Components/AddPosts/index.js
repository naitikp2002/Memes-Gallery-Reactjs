import React from 'react'
import SendPost from "./SendPost"
import UserPosts from "./UserPosts"
import styled from 'styled-components'
function Post() {
    return (
        <div>
            <Body><SendPost />
            {/* <UserPosts /> */}
            </Body>
        </div>
    )
}

export default Post
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