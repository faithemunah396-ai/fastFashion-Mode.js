"use client";
import { useState } from "react";

export default function ButtonGroups({onDump}){
    return (
      <div style={{
        zindex: "300",
      }}>
        <div
          onClick={onDump}
          style={{
            position: "absolute",
            top: "70%",
            left: "75%",
            padding: "10px",
            width: "200px",
            height: "80px",
            backgroundColor: "#FFFFFF",
            borderRadius: "15px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "#7AC943",
              borderRadius: "10px",
              width: "180px",
              height: "60px",
              padding: "14px",

              display: "flex",
              alignItems: "center",

              fontFamily: "Nunito, sans-serif",
              fontWeight: "900",
              fontSize: "32px",
              color: "#20431D",
            }}
          >
            Dump Me
          </div>
        </div>
      </div>
    );
}