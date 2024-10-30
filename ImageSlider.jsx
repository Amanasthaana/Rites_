// import React from 'react';
// import Slider from 'react-slick';
// import image1 from './Images/1st.jpeg'
// import image2 from './Images/2nd.jpeg'

// const ImageSlider = () => {
//     const images = [
//         { src: image1, alt: 'Image 1' },
//         { src: image2, alt: 'Image 2' },
//         { src: '/images/image3.jpg', alt: 'Image 3' },
//         { src: '/images/image4.jpg', alt: 'Image 4' },
//     ];

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 3000,
//         pauseOnHover: true,
//     };

//     return (
//         <div style={{ maxWidth: '500px', margin: '5px auto', padding: '20px' }}>
//             <Slider {...settings}>
//                 {images.map((image, index) => (
//                     <div key={index}>
//                         <img 
//                             src={image.src} 
//                             alt={image.alt} 
//                             style={{ 
//                                 width: '100%', 
//                                 height: 'auto', 
//                                 borderRadius: '10px',
//                                 boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
//                                 margin:'5px'
//                             }} 
//                         />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default ImageSlider;













// // ImageSlider.js
// // import React, { useState, useEffect } from 'react';
// // import styled from 'styled-components';

// // // Replace placeholder URLs with paths to your local images
// // const images = [
// //   '/Images/1st.jpeg',
// //   '/Images/2nd.jpeg',
// //   '/images/image3.jpg',
// //   '/images/image4.jpg',
// // ];

// // const ImageSlider = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) =>
// //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
// //       );
// //     }, 3000); // Slide every 3 seconds

// //     return () => clearInterval(interval);
// //   }, []);

// //   const goToNext = () => {
// //     setCurrentIndex((currentIndex + 1) % images.length);
// //   };

// //   const goToPrev = () => {
// //     setCurrentIndex(
// //       currentIndex === 0 ? images.length - 1 : currentIndex - 1
// //     );
// //   };

// //   return (
// //     <SliderContainer>
// //       <PrevButton onClick={goToPrev}>❮</PrevButton>
// //       <ImageContainer>
// //         <SlideImage src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
// //       </ImageContainer>
// //       <NextButton onClick={goToNext}>❯</NextButton>
// //     </SliderContainer>
// //   );
// // };

// // export default ImageSlider;

// // // Styled Components
// // const SliderContainer = styled.div`
// //   position: relative;
// //   width: 800px;
// //   height: 300px;
// //   margin: 0 auto;
// //   overflow: hidden;
// // `;

// // const ImageContainer = styled.div`
// //   display: flex;
// //   transition: transform 0.5s ease-in-out;
// // `;

// // const SlideImage = styled.img`
// //   width: 100%;
// //   height: 100%;
// //   object-fit: cover;
// // `;

// // const PrevButton = styled.button`
// //   position: absolute;
// //   top: 50%;
// //   left: 0;
// //   transform: translateY(-50%);
// //   background-color: rgba(0, 0, 0, 0.5);
// //   border: none;
// //   color: white;
// //   padding: 10px;
// //   cursor: pointer;
// // `;

// // const NextButton = styled.button`
// //   position: absolute;
// //   top: 50%;
// //   right: 0;
// //   transform: translateY(-50%);
// //   background-color: rgba(0, 0, 0, 0.5);
// //   border: none;
// //   color: white;
// //   padding: 10px;
// //   cursor: pointer;
// // `;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from './Images/1st.jpeg'
import image2 from './Images/2nd.jpeg'
import image3 from './Images/3rd.jpeg'
import image4 from './Images/4th.jpeg'

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover:false
  };

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Slider {...settings}>
        <div >
          <img src={image1} alt="Slide 1"  style={{                                 
                                width: '100%', 
                                height: '800px', 
                                borderRadius: '10px',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                                 marginTop:'0px'
                           }} />
        </div>
        <div>
          <img src={image2} alt="Slide 2" style={{   
                                width: '100%', 
                                height: '800px', 
                                borderRadius: '10px',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                                 marginTop:'0px'
                           }} />
        </div>
        <div>
          <img src={image3} alt="Slide 3" style={{   
                                width: '100%', 
                                height: '800px', 
                                borderRadius: '10px',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                                 marginTop:'0px'
                           }}
          />
        </div>
        <div>
          <img src={image4} alt="Slide 4" style={{   
                                width: '100%', 
                                height: '800px', 
                                borderRadius: '10px',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                                 marginTop:'0px'
                           }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
