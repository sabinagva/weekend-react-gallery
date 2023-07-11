import { useState } from "react";
import axios from "axios";
import "./GalleryItem.css";

function GalleryItem(props) {
  const [clicked, setClicked] = useState(false);

  //PUT: updating image likes
  const updateLike = () => {
    console.log("in put function");
    axios
      .put(`/gallery/like/${props.image.id}`)
      .then((response) => {
        console.log("response is", response);
        {
          props.getGallery();
        }
      })
      .catch((error) => {
        console.log("error in the put function", error);
      });
  };

  //conditionally rendering images and descriptions to dom
  return (
    <>
      <div>
        <div className="description" onClick={() => setClicked(!clicked)}>
          {clicked ? (
            <p>{props.description}</p>
          ) : (
            <img src={props.path} className="picture"></img>
          )}
        </div>
        <button onClick={updateLike}>❤️</button>
        <p>{props.likes} People Liked This</p>
      </div>
    </>
  );
}
export default GalleryItem;
