import './App.css';
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage'
import AddPosts from './Components/AddPosts'
import UserPage from './Components/UserPage'
import Create from './Components/generatorComp/Create';
import Login from './Components/Login'
import { useStateValue } from './Contexts/StateProvider'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import db from './firebaseConfig'
import firebase from 'firebase'


function App() {
  const MainPage = () => {
    // const randmeme = () => {
    //   fetch("https://epaxai.azurewebsites.net/getmeme/")
    //     .then(response => response.json())
    //     .then(
    //       data =>
    //         db.collection('posts').add({
    //           profilePic: user.photoURL,
    //           image: "https://www.tenouk.com/Module10_files/preprocessordirective014.png",
    //           username: "ProgrammerBot",
    //           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //           message: data.title,
    //           liked: false,
    //           likes: 0,
    //         })
    //     )
    // }
    return (
      <Router>
        <NavBar />
          <Switch>
            <Route path="/sendposts" component={AddPosts} />
            <Route path="/chats" component={Create} />
            <Route path="/user" component={UserPage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
      </Router>

    )
  }

  const [{ user }, dispatch] = useStateValue();
  return (
    <>
      {!user ? <Login /> : <MainPage />}
    </>
  );
}

export default App;


