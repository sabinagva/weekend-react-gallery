import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";

function GalleryList(props) {
  const gallery = props.gallery;
  console.log("props gallery is", props.gallery);
  
  //mapping over images to render them to dom
  return (
    <div>
      {props.gallery.map((image) => (
        <GalleryItem
          key={image.id}
          image={image}
          path={image.path}
          description={image.description}
          likes={image.likes}
          getGallery={props.getGallery}
        />
      ))}
    </div>
  );
}
export default GalleryList;
