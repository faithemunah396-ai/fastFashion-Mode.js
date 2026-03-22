"use client"
import {useState} from "react";

export default function Truck({ dump }){

    const style = {
      position: "absolute",
      top: "30%",
      left: "5%",
      width: "1100px",
      right: "0",
      transition: "transform 2s ease-in-out",
      transform: dump ? "translateX(-45%)" : "translateX(0%)",
      zIndex: "100",
    };

    return(
        <div style={style}>
            <img src="/ModeJS.svg" alt="truck"></img>
        </div>
    );
}