import { useState } from "react";
import axios from 'axios'
import "./GalleryItem.css";



function GalleryItem(props) {
    const [clicked, setClicked ] = useState(false)

    //PUT 
  const updateLike = () => {
    console.log('in put function')
    axios.put(`/gallery/like/${props.image.id}`)
    .then (response => {
        console.log('response is', response)
        {props.getGallery()}
    }).catch((error) => {
        console.log('error in the put function', error)
    })
  }

  return (
    <>
    
    <div>
        <div onClick={() => setClicked(true)}>
            {clicked ? (<p>{props.description}</p>) : (<img src={props.path}></img>)}
        </div>
        <button onClick={updateLike}>❤️</button>
        <p>{props.likes} Liked This</p>
    <img className = "pic" src={props.path}></img>
    
    </div>
    
    </>
)
}
export default GalleryItem