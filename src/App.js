import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Header from "./Header";
import Home from "./Home"
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import {onAuthStateChanged} from "firebase/auth";

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (authUser) => {
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
    return () => {
      unsubscribed();
    }
  }, [dispatch]);
  console.log("User>>>",user)
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header/>,<Checkout/>]} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={[<Header/>,<Home/>]}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
