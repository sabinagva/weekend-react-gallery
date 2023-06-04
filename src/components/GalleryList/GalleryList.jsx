import GalleryItem from "../GalleryItem/GalleryItem"
function GalleryList (props) {

    return (
       
     <div>
     {props.gallery.map(image =>
        <GalleryItem 
        key={image.id}
        image = {image}
        path = {image.path}
        description = {image.description}
        likes=  {image.likes}
        getGallery = {props.getGallery}
        
        />
        
     )} 
     <p>hello</p>
     
     </div>
       
    )
    
}
export default GalleryList