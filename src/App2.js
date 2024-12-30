// App.js
import React from 'react'
import { useState, useEffect } from 'react';
import MovingObjectLine from './UpperObjLine';
import LowerObjLine from './LowerObjLine';



const App = () => {
    const [showLower, setShowLower] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLower(true);
      }, 6200); // 6000 milliseconds = 6 seconds
  
      return () => clearTimeout(timer);
    }, []);
  
  
   return (
   <div className=' w-screen h-screen overflow-x-hidden'> 
         <MovingObjectLine/>
         <div>{showLower && <LowerObjLine/>}</div>
         {/* <LowerObjLine/> */}
    </div>)
   
};

export default App;

