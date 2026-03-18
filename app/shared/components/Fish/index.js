
"use client";

import { useEffect, useState } from "react";

const numOfFish = 90

// make fish swim around

export default function FishGame() {
    const [swim, setSwim] = useState(false)
    const [fishes, setFishes] = useState([]);
    
    const spawnIntervalPhase1 = 8000
    const spawnIntervalPhase2 = 4000
    const spawnIntervalPhase3 = 1000
    
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    
    const setFish = () => {
        const verticalMin = 0 
        const verticalMax = window.innerHeight
        const leftSpawn = 0
        const rightSpawn = window.innerWidth
        let randomNum = getRandomInt(0, 1)
        let imageName
        let verticalPosition = getRandomInt(verticalMin, verticalMax)
        let horizontalPosition
        
        if (verticalPosition % 2 === 0)
        {
            // start left
            horizontalPosition = leftSpawn
    
        } else {
            // start right
            horizontalPosition = rightSpawn
        } 

        switch (randomNum) {
            case 0: imageName = "BigSadFish.svg"
            break
            case 1: imageName = "SmSadFish.svg"
            break
        }

        const newFish = {
            birthDate: Date.now(),
            x: horizontalPosition,
            y: verticalPosition,
            image: imageName
        }

        setFishes(currentFishes => [...currentFishes, newFish])
    }

    useEffect(() => {
        const interval = setInterval(setFish, spawnIntervalPhase1)

        return () => clearInterval(interval);
    }, []);

        return (
        <div>
            {fishes.map((fish) => (
                <div 
                    key={fish.birthDate}
                    style={{
                        position: 'absolute',
                        left: `${fish.x}px`,
                        top: `${fish.y}px`,
                        transition: 'all 0.5s ease-out'
                    }}
                >
                    <img src={`../public/${fish.image}`} alt="fish"/>
                </div>
            ))}
        </div>
    );
}

    // go from start to end horizontally


// when clicked - fish stop

   


// lose point (hearts) when fish is clicked



//fish changes -- when winning fish are happy -- when losing fish are sad/ dead 
