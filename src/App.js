
import './App.css';
import AllBodies from "./pages/AllBodies"
import SingleBody from "./pages/SingleBody"
import Form from "./pages/Form"
import Header from "./components/Header"
import Footer from "./components/Footer"

import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

// ==== Style Object ==== //
// const h1 = {
//   textAlign: "center",
//   margin: '10px',
// }

const button = {
  backgroundColor: "navy",
  display: "block",
  margin: "auto",
}

function App() {

const navigate = useNavigate();

const url = "https://body-backend.herokuapp.com/body/"

const [posts, setPosts] = useState([])

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
  setPosts(data);
}

// Function to add Bodies
const addBodies = async (newBody) => {
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBody),
  })
  getBodies()
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
    body: JSON.stringify(Body),
  });
  getBodies();
}

const deleteBodies = async (Body) => {
  console.log("deleteBodies is Called")
  await fetch(url + Body.id + "/", {
    method: "Delete"
  })
  getBodies()
  navigate("/")
}

// == useEffects == //
useEffect(()=> {
  getBodies();
}, [])

// == Returned JSX == //


  return (
    
    <div className="App"  >
        <h1 class="text-5xl font-bold underline">
    Celestial Bodies
  </h1>
{/* <h1 style={h1}>Celestial Bodies</h1> */}
    <Header />
      <Link to="/new">
        <button style={button}>New Celestial Body</button>
      </Link>
      <Routes>
        <Route path="/" element={<AllBodies Body={posts}/>} />
        <Route path="/post/:id" element={<SingleBody
      posts={posts}
      edit={getTargetBody}
      deleteBody={deleteBodies}  
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
