// // App.js
// import React, { useState, useEffect } from 'react';
// import { MdLocationOn } from "react-icons/md";
// import './App.css';

// const App = () => {
//   const totalPoints = 5;
//   const [containerWidth, setContainerWidth] = useState(window.innerWidth);
//   const pointSpacing = containerWidth / (totalPoints - 1);
//   const speed = 2; // px per frame

//   const [currentPosition, setCurrentPosition] = useState(0);
//   const [currentPointIndex, setCurrentPointIndex] = useState(0);
//   const [infoPoints, setInfoPoints] = useState(Array(totalPoints).fill(false));

//   useEffect(() => {
//     const handleResize = () => {
//       setContainerWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {

//     const intervalId = setInterval(() => {
//       if (currentPointIndex < totalPoints) {
//         const targetPosition = currentPointIndex * pointSpacing;

//         // Move the object
//         if (currentPosition < targetPosition) {
//           setCurrentPosition((prevPosition) => {
//             const nextPosition = prevPosition + speed;
//             return nextPosition > targetPosition ? targetPosition : nextPosition;
//           });
//         }

//         // Trigger information display when reaching the point
//         if (currentPosition === targetPosition) {
//           setInfoPoints((prev) => {
//             const newInfoPoints = [...prev];
//             newInfoPoints[currentPointIndex] = true;
//             return newInfoPoints;
//           });
//           setCurrentPointIndex((prevIndex) => prevIndex + 1);
//         }
//       }
//     }, 20);

//     return () => clearInterval(intervalId);

//   }, [currentPosition, currentPointIndex, pointSpacing, totalPoints]);

//   return (
//     <div className="line-container" style={{ width: `${containerWidth}px` }}>
//       <div className="moving-object" style={{ left: `${currentPosition}px` }}>
//         <img className="moving-object" src = "/assets/auto1.png" alt=''/>
//       </div>
//       {Array.from({ length: totalPoints }, (_, index) => (
        
//         <div key={index} className="point" style={{ left: `${index * pointSpacing}px` }}>
          
//           {infoPoints[index] && (

//             <div className="info-box">
//               <div className=''><MdLocationOn className="icon" />

//                 </div>
//                 <div className='Reachpoint'>Reached Point {index + 1}</div>
//                 </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;