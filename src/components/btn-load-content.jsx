import { useState, useEffect } from "react";



function BtnShowContent() {
    const handleClick = () => {
      console.log("¡Botón clickeado!");
    };
  
    return (
      <button onClick={handleClick}>
        Click Me
      </button>



    );
  }





export default BtnShowContent;