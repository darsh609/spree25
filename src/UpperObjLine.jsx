import React, { useState, useEffect } from 'react';

const MovingObjectLine = () => {
  const [position, setPosition] = useState(0);
  const [reachedPoints, setReachedPoints] = useState([]);
  
  const totalPoints = 4;
  const lineLength = 1500;
  const pointSpacing = lineLength / (totalPoints);
  
  // Calculate points along the line
  const points = Array.from({ length: totalPoints }, (_, i) => ({
    x: i * pointSpacing,
    y: i * pointSpacing * 0.25, // This creates the angle
    number: i + 1
  }));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= lineLength) {
          clearInterval(interval);
          return prev;
        }
        return prev + 2;
      });
    }, 8);

    return () => clearInterval(interval);
  }, []);
  
  // Check if we've reached a new point
  useEffect(() => {
    points.forEach((point) => {
      if (
        position >= point.x && 
        !reachedPoints.includes(point.number)
      ) {
        setReachedPoints(prev => [...prev, point.number]);
      }
    });
  }, [position, reachedPoints]);

  return (
    <div className="relative w-full h-full p-8">
      <div>
        {/* Line */}
      <div 
        className="absolute w-full h-14 bg-gray-300"
        style={{ 
          left: 0,
          top: 10,
          transform: 'rotate(15deg)',
          transformOrigin: '0 0',
          width: `${lineLength}px`
        }}
      />
      
      {/* Points */}
      {points.map((point) => (
        <div key={point.number} className="absolute">
          {/* Point marker */}
          {/* <div 
            className="w-4 h-4 bg-blue-500 rounded-full"
            style={{
              left: point.x,
              top: point.y
            }}
          /> */}
          
          {/* Point label */}
          <div 
            className="absolute text-sm font-bold"
            style={{
              left: point.x - 20,
              top: point.y - 20
            }}
          >
            {/* Point {point.number} */}
          </div>
          
          {/* Reached message */}
          {reachedPoints.includes(point.number) && (
            <div 
              className="absolute bg-green-500 text-white px-2 py-1 rounded"
              style={{
                left: point.x - 30,
                top: point.y + 50
              }}
            >
              REACHED POINT {point.number}
            </div>
          )}
        </div>
      ))}
      
      {/* Moving object */}
      <div 
        className="absolute h-20 w-20 transition-all duration-20 ease-linear "
        style={{
          left: position,
          top: position * 0.29,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <img src = "/assets/auto1.png" alt='' />
      </div>
      
      {/* Reset button */}
      {/* <button
        className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => {
          setPosition(0);
          setReachedPoints([]);
        }}
      >
        Reset
      </button> */}
      </div>

    </div>
  );
};

export default MovingObjectLine;