<<<<<<< HEAD
"use client";
=======
"use client"
>>>>>>> a7e2bdf3c7a9ca7ae088b4b232e7cb9b915b02ee
import {useState} from "react";

export default function Truck({ dump }){

    const style = {
      position: "absolute",
      top: "30%",
<<<<<<< HEAD
      left: "0%",
      width: "1000px",
      right: "0",
      transition: "transform 2s ease-in-out",
      transform: dump ? "translateX(-40%)" : "translateX(0%)",
      zIndex: "100",
=======
      left: "5%",
      width: "1100px",
      right: "0",
      transition: "transform 2s ease-in-out",
      transform: dump ? "translateX(-45%)" : "translateX(0%)",
      zIndex: "2",
>>>>>>> a7e2bdf3c7a9ca7ae088b4b232e7cb9b915b02ee
    };

    return(
        <div style={style}>
            <img src="/ModeJS.svg" alt="truck"></img>
        </div>
    );
}