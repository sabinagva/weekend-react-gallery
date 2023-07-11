import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

function App() {
  const [gallery, setGallery] = useState([]);

  //GETing images 
  const getGallery = () => {
    console.log("in get function");
    axios
      .get("/gallery")
      .then((response) => {
        setGallery(response.data);
        console.log("response data is", response.data);
        console.log("response is", response);
      })
      .catch((error) => {
        console.log("error in get function", error);
      });
  };
  //render images to dom on load
  useEffect(() => {
    getGallery();
  }, []);

  console.log("gallery is ", gallery);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of little Pomeranians</h1>
      </header>

      <GalleryList gallery={gallery} getGallery={getGallery} />
    </div>
  );
}

export default App;
