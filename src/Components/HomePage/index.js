import Feed from './Feed'
import styled from 'styled-components'
function index() {
    return (
        <>
            <Body><Feed /></Body>
        </>
    )
}

export default index;

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