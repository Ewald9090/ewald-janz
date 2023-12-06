import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import useContentful from '../utils/useContentful';
import "./Works.css"

const collageQuery = `
  query {
    collagesCollection {
      items {
      title
        image {
          url
        }
      }
    }
  }
  `

export default function Works({ category }) {
  const { data: collageData } = useContentful(collageQuery);
  const [activeTab, setActiveTab] = useState(category ? category : 'paintings');

  if (collageData) console.log("⭐️ collage query", collageData.collagesCollection.items)

  const renderImages = (category) => {
    let images = [];
    console.log("🍎", collageData)
    switch (category) {
      case 'collages':
        images = collageData.collagesCollection.items;
        console.log("🥎", images)
        break;
      // case 'paintings':
      //   images = paintingsImages;
      //   break;
      // case 'drawings':
      //   images = drawingsImages;
      //   break;
      // case 'object':
      //   images = objectImages;
      //   break;
      default:
        break;
    }
  
    return (
      <Carousel
        dynamicHeight
        showArrows
        emulateTouch
        infiniteLoop
        id="carousel-container"
      >
        {images.map((item, index) => (
          <div key={index} className="gallery-image">
            <img src={item.image.url} alt={item.image.name} />
          </div>
        ))}
      </Carousel>
    )
  }

  return (
    <div id="works-wrapper">
      <div className="side-nav">
        <Link to="/">
          <span class="material-symbols-outlined">
          arrow_back
          </span>
        </Link>        
        <h2>WORKS</h2>
        <ul id="works-nav">
        <li
            onClick={() => setActiveTab('paintings')}
            className={activeTab === 'paintings' ? 'active' : ''}
          >
            Paintings
          </li>
          <li
            onClick={() => setActiveTab('drawings')}
            className={activeTab === 'drawings' ? 'active' : ''}
          >
            Drawings
          </li>
          <li
            onClick={() => setActiveTab('collages')}
            className={activeTab === 'collages' ? 'active' : ''}
          >
            Collages
          </li>
          <li
            onClick={() => setActiveTab('object')}
            className={activeTab === 'object' ? 'active' : ''}
          >
            Object
          </li>
        </ul>
      </div>
      <div id="gallery-container">
        {renderImages(activeTab)}
      </div>
    </div>
  );
}
