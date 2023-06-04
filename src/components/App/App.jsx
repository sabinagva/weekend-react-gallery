import React,{useState, useEffect} from 'react';
import './App.css';
import axios  from 'axios';
import GalleryList from '../GalleryList/GalleryList'

function App() {
  const [gallery, setGallery] = useState([])
 
  //document on ready
  useEffect(() => {
    getGallery();
  }, [])

  //GET
  const getGallery = () => {
    console.log('in get function')
    axios.get('/gallery')
    .then((response) => {
      setGallery(response.data)
      console.log('response data is', response.data)
    }).catch((error) => {
      console.log('error in get function', error)
    })
  //PUT 
  const updateLike = () => {
    console.log('in put function')
    axios.put(/gallery/id)
  }


  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <GalleryList galleryList = {gallery}/>
      </div>
    );
}

export default App;
