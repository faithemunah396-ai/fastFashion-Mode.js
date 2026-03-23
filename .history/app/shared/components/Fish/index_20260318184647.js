
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import "./styles.css"

// make fish swim around
const GameContext = createContext();

function GameProvider({ children }) {
    const [killCount, setKillCount] = useState(0);
    const [hearts, setHearts] = useState(3);

    const addKill = () => setKillCount(prev => prev + 1);
    
        useEffect(() => {
            if (killCount === 1) setHearts(2);
            if (killCount === 2) setHearts(1);
            if (killCount >= 3) setHearts(0);
        }, [killCount]);

    return (
        <GameContext.Provider value={{ hearts, addKill }}>
            {children}
        </GameContext.Provider>
    );
}

const useGame = () => useContext(GameContext);
    
function FishPhase1() {
    const [fish, setFish] = useState(false);
    const [swim, setSwim] = useState(false);
    const [alive, setAlive] = useState(false);
    const { addKill } = useGame();

    useEffect(() => {
        const getRandomInt = (min, max) => {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min + 1)) + min
        }

        const verticalPosition = getRandomInt(5, 80);
        const fishSize = getRandomInt(80, 200) 
        const randomNum = getRandomInt(0, 1)
        const swimDuration = getRandomInt(18, 35)
        const swimmingDelay = getRandomInt(0, 1)
        const swimWiggle = getRandomInt(0, 6)
        let imageName
        let horizontalPosition
        let directionFacing
        let swimmingDirection

        if (verticalPosition % 2 === 0) {
            horizontalPosition = -20 // left spawn
            directionFacing = -1
            swimmingDirection = "swimToRight"
        } else {
            horizontalPosition = 120; // right spawn
            swimmingDirection = "swimToLeft"
        }

        switch (randomNum) {
            case 0: 
            imageName = "/BigSadFish.svg"
            break;
            case 1: 
            imageName = "/SmSadFish.svg"
            break;
        }


        setAlive({
            image: imageName,
            verticalDirection: 1,
            swimming: "running",
            falling: 0
        })
        
        
        setFish({
            top: verticalPosition,
            left: horizontalPosition,
            direction: directionFacing,
            size: fishSize
        });
        
        
        setSwim({
            duration: swimDuration,
            direction: swimmingDirection,
            delay: swimmingDelay,
            wiggle: swimWiggle 
        })
        
    }, []);
    
    const killFish = () => {

        if (alive.image === "/BigSadFish.svg") {
            setAlive({
                image: "/BigDeadFish.svg",
                swimming: "paused",
                verticalDirection: -1,
                falling: 110,
            })


        } else if (alive.image === "/SmSadFish.svg"){
            setAlive({
                image: "/SmDeadFish.svg",
                swimming: "paused",
                verticalDirection: -1,
                falling: 110
            })
            
    }
        addKill()
}


    return (
        <div style={{
            position: "absolute",
            top: `${fish.top}vh`,
            left: `${fish.left}vw`,
            width: `${fish.size}px`,
            animation: `${swim.duration}s ${swim.direction} ${swim.delay}s linear, wiggle ${swim.wiggle}s infinite`,
            animationPlayState: alive.swimming,
            transform: `scaleX(${fish.direction})`,
            userSelect: "none" 
        }} onClick={killFish}>
                    <img src={alive.image} alt="Fish" style={{
                        transition: "transform 7s",
                        transform: `scaleY(${alive.verticalDirection}) translateY(${alive.falling}vh)` // flips fish when clicked
                    }} />
                </div>
            ) 
    }

        


    function FishPhase2() {
        const [fish, setFish] = useState(false);
        const [swim, setSwim] = useState(false);
        const [alive, setAlive] = useState(false);
        const { addKill } = useGame();

    useEffect(() => {
        const getRandomInt = (min, max) => {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min + 1)) + min
        }

        const verticalPosition = getRandomInt(5, 80);
        const fishSize = getRandomInt(80, 200) 
        const randomNum = getRandomInt(0, 1)
        const swimDuration = getRandomInt(12, 26)
        const swimmingDelay = getRandomInt(16, 20)
        const swimWiggle = getRandomInt(0, 6)
        let imageName
        let horizontalPosition
        let directionFacing
        let swimmingDirection

        if (verticalPosition % 2 === 0) {
            horizontalPosition = -20 // left spawn
            directionFacing = -1
            swimmingDirection = "swimToRight"
        } else {
            horizontalPosition = 120; // right spawn
            swimmingDirection = "swimToLeft"
        }

        switch (randomNum) {
            case 0: 
            imageName = "/BigSadFish.svg"
            break;
            case 1: 
            imageName = "/SmSadFish.svg"
            break;
        }


        setAlive({
            image: imageName,
            verticalDirection: 1,
            swimming: "running",
            falling: 0
        })
        
        
        setFish({
            top: verticalPosition,
            left: horizontalPosition,
            direction: directionFacing,
            size: fishSize
        });
        
        
        setSwim({
            duration: swimDuration,
            direction: swimmingDirection,
            delay: swimmingDelay,
            wiggle: swimWiggle 
        })
        
    }, []);
    
    const killFish = () => {

        if (alive.image === "/BigSadFish.svg") {
            setAlive({
                image: "/BigDeadFish.svg",
                swimming: "paused",
                verticalDirection: -1,
                falling: 110,
            })


        } else if (alive.image === "/SmSadFish.svg"){
            setAlive({
                image: "/SmDeadFish.svg",
                swimming: "paused",
                verticalDirection: -1,
                falling: 110
            })
            
    }
        addKill()
}


    return (
        <div style={{
            position: "absolute",
            top: `${fish.top}vh`,
            left: `${fish.left}vw`,
            width: `${fish.size}px`,
            animation: `${swim.duration}s ${swim.direction} ${swim.delay}s linear, wiggle ${swim.wiggle}s infinite`,
            animationPlayState: alive.swimming,
            transform: `scaleX(${fish.direction})`,
            userSelect: "none" 
        }} onClick={killFish}>
                    <img src={alive.image} alt="Fish" style={{
                        transition: "transform 7s",
                        transform: `scaleY(${alive.verticalDirection}) translateY(${alive.falling}vh)` // flips fish when clicked
                    }} />
                </div>
            ) 
    }
    
        
function FishPhase3() {
    const [fish, setFish] = useState(false);
    const [swim, setSwim] = useState(false);
    const [alive, setAlive] = useState(false);
    const { addKill } = useGame();

    useEffect(() => {
        const getRandomInt = (min, max) => {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min + 1)) + min
        }

        const verticalPosition = getRandomInt(5, 80);
        const fishSize = getRandomInt(80, 200) 
        const randomNum = getRandomInt(0, 1)
        const swimDuration = getRandomInt(7, 28)
        const swimmingDelay = getRandomInt(38, 42)
        const swimWiggle = getRandomInt(0, 6)
        let imageName
        let horizontalPosition
        let directionFacing
        let swimmingDirection

        if (verticalPosition % 2 === 0) {
            horizontalPosition = -50 // left spawn
            directionFacing = -1
            swimmingDirection = "swimToRight"
        } else {
            horizontalPosition = 150; // right spawn
            swimmingDirection = "swimToLeft"
        }

        switch (randomNum) {
            case 0: 
            imageName = "/BigSadFish.svg"
            break;
            case 1: 
            imageName = "/SmSadFish.svg"
            break;
        }


        setAlive({
            image: imageName,
            verticalDirection: 1,
            swimming: "running",
            falling: 0
        })
        
        
        setFish({
            top: verticalPosition,
            left: horizontalPosition,
            direction: directionFacing,
            size: fishSize
        });
        
        
        setSwim({
            duration: swimDuration,
            direction: swimmingDirection,
            delay: swimmingDelay,
            wiggle: swimWiggle 
        })
        
    }, []);
    
    const killFish = () => {

        if (alive.image === "/BigSadFish.svg") {
            setAlive({
                image: "/BigDeadFish.svg",
                swimming: "paused",
                verticalDirection: -1,
                falling: 110
            })

        } else if (alive.image === "/SmSadFish.svg"){
            setAlive({
                image: "/SmDeadFish.svg",
                swimming: "paused",
                verticalDirection: -1,
                falling: 110
            }) 
    }
        addKill()
}

    return (
        <div style={{
            position: "absolute",
            top: `${fish.top}vh`,
            left: `${fish.left}vw`,
            width: `${fish.size}px`,
            animation: `${swim.duration}s ${swim.direction} ${swim.delay}s linear, wiggle ${swim.wiggle}s infinite`,
            animationPlayState: alive.swimming,
            transform: `scaleX(${fish.direction})`,
            userSelect: "none" 
        }} onClick={killFish}>
                    <img src={alive.image} alt="Fish" style={{
                        transition: "transform 7s",
                        transform: `scaleY(${alive.verticalDirection}) translateY(${alive.falling}vh)` // flips fish when clicked
                    }} />
                </div>
            ) 
    }

function StartButton () {
    const [clicked, setClicked] = useState(false)

    const { hearts } = useGame()


    if (hearts === 0) {
        return (
            <div style={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                height: "100vh"
            }}>
                <p style={{
                fontSize: "150px",
                textAlign: "center",
                textJustify: "center",
                fontFamily: "Nunito, sans-serif",
                fontWeight: "900"
                }}>
                    
                    YOU LOSE
                    </p>
            </div>
        );
    }
    
    const startGame = () => {
        setClicked(true)
    }

    if (clicked) {
        return (
            <div>
                <div style={{
                        width: "70px",
                        display: "flex",
                        userSelect: "none"   
                        }}>
                    <img src="/heart.svg" alt="heart" style={{ visibility: hearts >= 1 ? "visible" : "hidden" }} />
                    <img src="/heart.svg" alt="heart" style={{ visibility: hearts >= 2 ? "visible" : "hidden" }} />
                    <img src="/heart.svg" alt="heart" style={{ visibility: hearts === 3 ? "visible" : "hidden" }} />
                </div>
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase1 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase2 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
                <FishPhase3 />
             </div>
        )}

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
        }}>
            <div style={{
                width: "40vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "lightblue",
                height: "40vh",
                borderRadius: "15px",
            }}>
                <p style={{
                    color: "black",
                    textAlign: "center",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: "700",
                    fontSize: "28px",
                    padding: "50px"

                }}>Goal: Clean 10 pieces of clothes without killing any fish.<br></br><br></br>You have 3 hearts. Each time a fish is killed, a heart is lost</p>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    marginTop: "-7vh"
                }}>
                    <div
                        style={{
                            position: "relative",
                            backgroundColor: "#7AC943",
                            borderRadius: "10px",
                            border: "8px solid white",
                            width: "180px",
                            height: "60px",
                            padding: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "Nunito, sans-serif",
                            fontWeight: "900",
                            fontSize: "24px",
                            cursor: "pointer",
                            color: "#20431D",
                        }} onClick = {startGame}
                    >
                        <p>START</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

    export { StartButton, GameProvider }
