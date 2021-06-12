import logo from './logo.svg';
import FacebookLogin from 'react-facebook-login'
import './App.css';
import { useEffect, useState } from 'react';
import Home from './Components/Home';


export default function App() {
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [picture, setPicture]=useState("")
  const [token, setToken]=useState(()=> null)

  useEffect(() => {
    if(localStorage.getItem("token")) {
      setName(localStorage.getItem("name"))
      setEmail(localStorage.getItem("email"))
      setPicture(localStorage.getItem("picture"))
      setToken(localStorage.getItem("token"))
    }
    else{
      setToken(null)
    }
    return () => {
      
    }
  }, [])

  useEffect(() => {
    if(token){
      localStorage.setItem("name",name);
      localStorage.setItem("email", email);
      localStorage.setItem("picture", picture);
      localStorage.setItem("token", token);
    }
    return () => {
    }
  }, [token])

  const responseFaceBook = (res)=> {
    console.log(res,"jjjjjjj");
      setName(res.name)
      setEmail(res.email)
      setPicture(res.picture.data.url)
      setToken(res.accessToken)

  };


  return (
    <div>
      <center>
        
        <h1>Login</h1>
        {token?  <Home namme={name} pic={picture}/> : <FacebookLogin
              appId="1111784756317705"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFaceBook}
            />}

           
      </center>

    </div>
  );
}
