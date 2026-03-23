"use client";
import { useState } from "react";

//make clothes have same starting point 
//make clothes fall when button clicked
//on click hide svg
//on click gain point

export default function ClothesFall({fall}){

    const clothesImg = [
        {id: "c1", svg: "/blueStripedShirt.svg", x: 400, y:3400},
        {id: "c2", svg: "/darkBluePant.svg", x: 90, y:1200},
        {id: "c3", svg: "/greenShirt.svg", x: 100, y:2500},
        {id: "c4", svg: "/lightPant.svg", x: 900, y:3000},
        {id: "c5", svg: "/yellowShirt.svg", x: 700, y:1500},
        {id: "c6", svg: "/lightPant2.svg", x: 1000, y:1900},
        {id: "c7", svg: "/orangePolkadotSock.svg", x: 700, y:950},
        {id: "c8", svg: "/orangeShirt.svg", x: 500, y:2100},
        {id: "c9", svg: "/pinkPolkadotSock.svg", x: 100, y:1800},
        {id: "c10", svg: "/purpleShirt.svg", x: 1000, y:2700},
        {id: "c11", svg: "/yellowSock.svg", x: 350, y:2900},
    ]

    const [visibleClothes, setVisibleClothes] = useState(clothesImg.map(item => item.id));


    const handleClothingClick = (item) => {
    // console.log("clicked", item)
    setVisibleClothes(prev => prev.filter(itemId => itemId !== item.id));
  }

  

    return (
      <div stye={{
        zindex: "3",
      }}>
        <>
          {clothesImg.map(
            (item) =>
              visibleClothes.includes(item.id) && (
                <img
                  key={item.id}
                  src={item.svg}
                  onClick={() => handleClothingClick(item)}
                  style={{
                    position: "absolute",
                    top: fall ? item.y : "35%",
                    left: fall ? item.x : "35%",
                    transition: "all 5s ease",
                    transitionDelay: "0.5s",
                    
                  }}
                />
              ),
          )}
        </>
      </div>
    );
}