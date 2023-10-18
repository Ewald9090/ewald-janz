import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';

import "./Works.css"

import P1 from './Paintings/shame on me,shame on you/_MG_2606.jpg';
import P2 from './Paintings/shame on me,shame on you/_MG_2607.jpg';
import P3 from './Paintings/shame on me,shame on you/_MG_2609.jpg'
import P4 from './Paintings/shame on me,shame on you/_MG_2612.jpg'
import P5 from './Paintings/shame on me,shame on you/_MG_2615.jpg'
import P6 from './Paintings/shame on me,shame on you/_MG_2616.jpg'
import P7 from './Paintings/shame on me,shame on you/_MG_2618.jpg'
import P8 from './Paintings/shame on me,shame on you/_MG_2621.jpg'
import P9 from './Paintings/shame on me,shame on you/_MG_2623.jpg'
import P10 from './Paintings/shame on me,shame on you/_MG_2625.jpg'
import P11 from './Paintings/shame on me,shame on you/_MG_2628.jpg'
import P12 from './Paintings/shame on me,shame on you/_MG_2629.jpg'
import P13 from './Paintings/shame on me,shame on you/_MG_2632.jpg'
import P14 from './Paintings/shame on me,shame on you/_MG_2634.jpg'
import P16 from './Paintings/shame on me,shame on you/_MG_2635.jpg'
import P17 from './Paintings/shame on me,shame on you/_MG_2636.jpg'
import P18 from './Paintings/shame on me,shame on you/_MG_2638.jpg'
import P19 from './Paintings/shame on me,shame on you/_MG_2639.jpg'



export default function Works() {
  const [activeTab, setActiveTab] = useState('paintings');

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
  ];

  const renderImages = (category) => {
    let images = [];
    switch (category) {
      case 'paintings':
        images = paintingsImages;
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
          <li onClick={() => setActiveTab('paintings')}>Paintings</li>
          <li onClick={() => setActiveTab('drawings')}>Drawings</li>
          <li onClick={() => setActiveTab('collages')}>Collages</li>
          <li onClick={() => setActiveTab('object')}>Object</li>
        </ul>
      </div>
      <div id="gallery-container">
        {renderImages(activeTab)}
      </div>
    </div>
  );
}
