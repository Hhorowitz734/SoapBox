//Background with floating circles for landing page

import { useState, useRef, useEffect } from "react";

//Controls Circles

export function Circle({ size, left, top, backgroundColor }){
    return (
        <div
          className="absolute rounded-full"
          style={{ width: `${size}px`, height: `${size}px`, backgroundColor: `${backgroundColor}`, opacity: 0.25, left: `${left}px`, top: `${top}px` }}
        ></div>
      );
}

//Controls main background
function Backdrop(){
    return (
        <div
        className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden"
        ></div>
    );
}

function HomeBackground(){
    const circles = [];
    for (let i = 0; i < 8; i++) { // Generate 8 circles
        const circleSize = window.innerWidth / 10; // Set the size of the circles
        const size = Math.floor(Math.random() * circleSize) + circleSize; // Random size between circleSize and circleSize * 2
        const left = Math.floor(Math.random() * (window.innerWidth - circleSize)); // Random left position within the width of the window minus the size of the circle
        const top = Math.floor(Math.random() * (window.innerHeight - circleSize)); // Random top position within the height of the window minus the size of the circle
        const red = Math.floor(Math.random() * 256); // Generate a random value between 0 and 255 for the red color component
        const blue = Math.floor(Math.random() * 256); // Generate a random value between 0 and 255 for the blue color component
        const color = `rgb(${red}, 0, ${blue})`; // Set the color of the circle with the random red and blue values

        const circle = (
        <Circle
            key={i}
            size={size}
            left={left}
            top={top}
            backgroundColor={color}
        />
        );
        circles.push(circle);
    }

  return (
    <div className="overflow-hidden pointer-events-none">
      <Backdrop />
      {circles}
    </div>
  );
}

export default HomeBackground;