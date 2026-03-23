"use client"
import { useState } from "react";

export default function WaterTransition(){
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: "1"
        }}>
            <div id="waterWave" style={{
                position: "absolute",
                top: "100%"
            }}>
                <img src="/WaterTransition.svg" alt=""></img>
            </div>
            <div id="water" style={{
                backgroundColor: "#98CCBA",
                width: "100vw",
                height:"3100px"
            }}></div>
        </div>
    );
} 