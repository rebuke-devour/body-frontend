
import './App.css';
import AllBodies from "./pages/AllBodies"
import SingleBody from "./pages/SingleBody"
import Form from "./pages/Form"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import body from "./components/Body"

import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";



// ==== Style Object ==== //
const h1 = {
  textAlign: "center",
  margin: '10px',
}

const button = {
  backgroundColor: "navy",
  display: "block",
  margin: "auto",
}

function App() {

const navigate = useNavigate();

const url = "https://body-backend.herokuapp.com/body/"

const [post, setPost] = useState([])

const nullBody = {
  name: "",
  date_discovered: "",
  details: "",
}

// ===== Functions ===== //

const [targetBody, setTargetBody] = useState(nullBody)

// Function to get bodies from API
const getBodies = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setPost(data);
}

// Function to add Bodies
const addBodies = async (newBody) => {
  await fetch(url, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    ody: JSON.stringify(newBody),
  })
  getBodies()
  console.log("newBody", newBody)
};

// to select a Body to edit
const getTargetBody = (Body) => {
  setTargetBody(Body);
  navigate("/edit");
}

// Update Body for the handleSubmit prop
const updateBody = async (Body) => {
  await fetch(url + Body.id + "/", {
    method: "Put",
    headers: {
      "Content-Type": "application/json",
    },
    Body: JSON.stringify(Body),
  });
  getPost();
}

const deleteBodies = async (post) => {
  console.log("deleteBodies is Called")
  await fetch(url + post.id + "/", {
    method: "Delete"
  })
  getBody()
  navigate("/")
}

// == useEffects == //
useEffect(()=> {
  getBody();
}, [])

// == Returned JSX == //
  return (
    <div className="App">
<h1 style={h1}>Celestial Bodies</h1>
    <Header/>
      <Link to="/new">
        <button style={button}>New Celestial Body</button>
      </Link>
      <Routes>
        <Route path="/" element={<AllBodies post={body}/>} />
        <Route path="/post/:id" element={<SingleBody
      post={body}
      edit={getTargetBody}
      deleteBodies={deleteBodies}  
      />} />
      <Route
        path="/new"
        element={
          <Form
            initialBody={nullBody}
            handleSubmit={addBodies}
            buttonLabel="Create Celestial Body"
        />} />
        <Route path="/edit" element={<Form
        initialBody={targetBody}
        handleSubmit={updateBody}
        buttonLabel="Update Celestial Body"
        />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
