import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import "./Works.css"

// Paintings
import P1 from './Paintings/_MG_2606.jpg';
import P2 from './Paintings/_MG_2607.jpg';
import P3 from './Paintings/_MG_2609.jpg'
import P4 from './Paintings/_MG_2612.jpg'
import P5 from './Paintings/_MG_2615.jpg'
import P6 from './Paintings/_MG_2616.jpg'
import P7 from './Paintings/_MG_2618.jpg'
import P8 from './Paintings/_MG_2621.jpg'
import P9 from './Paintings/_MG_2623.jpg'
import P10 from './Paintings/_MG_2625.jpg'
import P11 from './Paintings/_MG_2628.jpg'
import P12 from './Paintings/_MG_2629.jpg'
import P13 from './Paintings/_MG_2632.jpg'
import P14 from './Paintings/_MG_2634.jpg'
import P16 from './Paintings/_MG_2635.jpg'
import P17 from './Paintings/_MG_2636.jpg'
import P18 from './Paintings/_MG_2638.jpg'
import P19 from './Paintings/_MG_2639.jpg'
import P20 from './Paintings/Ewald_Janz_02.jpg'
import P21 from './Paintings/Ewald_Janz_03.jpg'
import P22 from './Paintings/Ewald_Janz_05.jpg'
import P23 from './Paintings/Ewald_Janz_06.jpg'
import P24 from './Paintings/Ewald_Janz_07.jpg'
import P25 from './Paintings/Ewald_Janz_08.jpg'
import P26 from './Paintings/Ewald_Janz_09.jpg'
import P27 from './Paintings/Ewald_Janz_13.jpg'
import P28 from './Paintings/Ewald_Janz_16.jpg'
import P29 from './Paintings/sdnsa.jpg'

// Drawings
import D1 from './Drawings/img012.jpg'
import D2 from './Drawings/img017.jpg'
import D3 from './Drawings/img022.jpg'
import D4 from './Drawings/img030.jpg'
import D5 from './Drawings/img034.jpg'
import D6 from './Drawings/img041 (2).jpg'
import D7 from './Drawings/img089.jpg'

// Collages
import C1 from './Collages/Doppelgänger.png'
import C2 from './Collages/Ewald Janz_003.jpg'
import C3 from './Collages/Ewald Janz_005.jpg'
import C4 from './Collages/Freie Kunst 06.2019 - 06.jpg'
import C5 from './Collages/Verräter.png'

//Object
import O1 from './Object/190210_winterwerkschau_weimar_DSC5438_konrad_behr.jpg'
import O2 from './Object/190210_winterwerkschau_weimar_DSC5445_konrad_behr.jpg' 
import O3 from './Object/Stimme 2.jpg'
import O4 from './Object/Stimme.jpg'



export default function Works({ category }) {
  console.log(category)
  const [activeTab, setActiveTab] = useState(category ? category : 'paintings');

  const paintingsImages = [
    { name: 'Painting 1', url: P1 },
    { name: 'Painting 2', url: P2 },
    { name: 'Painting 3', url: P3 },
    { name: 'Painting 4', url: P4 },
    { name: 'Painting 5', url: P5 },
    { name: 'Painting 6', url: P6 },
    { name: 'Painting 7', url: P7 },
    { name: 'Painting 8', url: P8 },
    { name: 'Painting 9', url: P9 },
    { name: 'Painting 10', url: P10 },
    { name: 'Painting 11', url: P11 },
    { name: 'Painting 12', url: P12 },
    { name: 'Painting 13', url: P13 },
    { name: 'Painting 14', url: P14 },
    { name: 'Painting 16', url: P16 },
    { name: 'Painting 17', url: P17 },
    { name: 'Painting 18', url: P18 },
    { name: 'Painting 19', url: P19 },
    { name: 'Painting 20', url: P20 },
    { name: 'Painting 21', url: P21 },
    { name: 'Painting 22', url: P22 },
    { name: 'Painting 23', url: P23 },
    { name: 'Painting 24', url: P24 },
    { name: 'Painting 25', url: P25 },
    { name: 'Painting 26', url: P26 },
    { name: 'Painting 27', url: P27 },
    { name: 'Painting 28', url: P28 },
    { name: 'Painting 29', url: P29 },
  ];

  const drawingsImages = [
    { name: 'Drawing 1', url: D1 },
    { name: 'Drawing 2', url: D2 },
    { name: 'Drawing 3', url: D3 },
    { name: 'Drawing 4', url: D4 },
    { name: 'Drawing 5', url: D5 },
    { name: 'Drawing 6', url: D6 },
    { name: 'Drawing 7', url: D7 },
  ];

  const collagesImages = [
    { name: 'Collage 1', url: C1 },
    { name: 'Collage 2', url: C2 },
    { name: 'Collage 3', url: C3 },
    { name: 'Collage 4', url: C4 },
    { name: 'Collage 5', url: C5 },
  ];

  const objectImages = [
    { name: 'Object 1', url: O1 },
    { name: 'Object 2', url: O2 },
    { name: 'Object 3', url: O3 },
    { name: 'Object 4', url: O4 },
  ];

  const renderImages = (category) => {
    let images = [];
    switch (category) {
      case 'paintings':
        images = paintingsImages;
        break;
      case 'drawings':
        images = drawingsImages;
        break;
      case 'collages':
        images = collagesImages;
        break;
      case 'object':
        images = objectImages;
        break;
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
        {images.map((image, index) => (
          <div key={index} className="gallery-image">
            <img src={image.url} alt={image.name} />
          </div>
        ))}
      </Carousel>
    );
  };  

  return (
    <div id="works-wrapper">
      <div className="side-nav">
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
