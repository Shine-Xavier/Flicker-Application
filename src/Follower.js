import React,{useState} from 'react'
import Slideshow from './SlideShow';
const Follower = ({server,id,secret,farm,title,setslideshowdata}) => {
const [isHovered, setHover] = useState(false);
const images=`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

async function download(imageSrc) {
  const image = await fetch(imageSrc)
  const imageBlog = await image.blob()
  const imageURL = URL.createObjectURL(imageBlog)

  const link = document.createElement('a')
  link.href = imageURL
  link.download = `${title}`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

  return (
    <div>
    <main>
        <article className='card' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}> 
            <img src={`${images}`} alt='login' onClick={()=>{setslideshowdata(true)}}></img>
            {isHovered && (
              <button className='btn' onClick={()=>download(images)}>
                Download
              </button>
            )}   
             </article>
             </main>
    </div>
 )
}

export default Follower
