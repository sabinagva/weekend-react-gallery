import { useState } from "react";
import axios from 'axios'



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
    <img src={props.path}></img>
    <p>Hello hii</p>
    </div>
    
    </>
)
}
export default GalleryItem