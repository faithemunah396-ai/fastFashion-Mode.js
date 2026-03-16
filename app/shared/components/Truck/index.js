"use client";
import {useState} from "react";

export default function Truck({ dump }){

    const style = {
      position: "absolute",
      top: "30%",
      left: "0%",
      width: "1000px",
      right: "0",
      transition: "transform 2s ease-in-out",
      transform: dump ? "translateX(-40%)" : "translateX(0%)",
      zIndex: "100",
    };

    return(
        <div style={style}>
            <img src="/ModeJS.svg" alt="truck"></img>
        </div>
    );
}