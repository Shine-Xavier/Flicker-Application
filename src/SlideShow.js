import axios from "axios";
import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";
import Follower from "./Follower";



const url =
  "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=93d38b80d4e01a18a2149f7ecf974821&format=json&nojsoncallback=1&page=${page}&per_page=60";

const Slideshow  = ({setslideshowdata}) => {
  const [isLoaded, setisLoaded] = useState(false);
  const [slideImages, setSlideImage] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setSlideImage(res.data.photos.photo);
      setisLoaded(true);
    });
  }, []);

  return (
    <div className="slide-container" style={{marginTop:'10px'}}>
        <button className='btn' onClick={()=>setslideshowdata(false)}>Go Back to Grid</button>
      {isLoaded ? (
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                style={{
                  backgroundImage:`url(https://farm${slideImage.farm}.staticflickr.com/${slideImage.server}/${slideImage.id}_${slideImage.secret}.jpg`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
export default Slideshow;
