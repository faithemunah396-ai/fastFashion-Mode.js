
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

        const verticalPosition = getRandomInt(100, 3000);
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
                falling: 400,
            })


        } else if (alive.image === "/SmSadFish.svg"){
            setAlive({
                image: "/SmDeadFish.svg",
                swimming: "paused",
                verticalDirection: -1,
                falling:  400
            })
            
    }
        addKill()
}


    return (
        <div style={{
            position: "absolute",
            top: `${fish.top}px`,
            left: `${fish.left}vw`,
            width: `${fish.size}px`,
            animation: `${swim.duration}s ${swim.direction} ${swim.delay}s linear, wiggle ${swim.wiggle}s infinite`,
            animationPlayState: alive.swimming,
            transform: `scaleX(${fish.direction})`,
            userSelect: "none" 
        }} onClick={killFish}>
                    <img src={alive.image} alt="Fish" style={{
                        transition: "transform 14s",
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

        const verticalPosition = getRandomInt(100, 3000);
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
                falling: 400,
            })


        } else if (alive.image === "/SmSadFish.svg"){
            setAlive({
                image: "/SmDeadFish.svg",
                swimming: "paused",
                verticalDirection: -1,
                falling: 400
            })
            
    }
        addKill()
}


    return (
        <div style={{
            position: "absolute",
            top: `${fish.top}px`,
            left: `${fish.left}vw`,
            width: `${fish.size}px`,
            animation: `${swim.duration}s ${swim.direction} ${swim.delay}s linear, wiggle ${swim.wiggle}s infinite`,
            animationPlayState: alive.swimming,
            transform: `scaleX(${fish.direction})`,
            userSelect: "none" 
        }} onClick={killFish}>
                    <img src={alive.image} alt="Fish" style={{
                        transition: "transform 14s",
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

        const verticalPosition = getRandomInt(100, 3000);
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
                falling: 400
            })

        } else if (alive.image === "/SmSadFish.svg"){
            setAlive({
                image: "/SmDeadFish.svg",
                swimming: "paused",
                verticalDirection: -1,
                falling: 400
            }) 
    }
        addKill()
}

    return (
        <div style={{
            position: "absolute",
            top: `${fish.top}px`,
            left: `${fish.left}vw`,
            width: `${fish.size}px`,
            animation: `${swim.duration}s ${swim.direction} ${swim.delay}s linear, wiggle ${swim.wiggle}s infinite`,
            animationPlayState: alive.swimming,
            transform: `scaleX(${fish.direction})`,
            userSelect: "none" 
        }} onClick={killFish}>
                    <img src={alive.image} alt="Fish" style={{
                        transition: "transform 14s",
                        transform: `scaleY(${alive.verticalDirection}) translateY(${alive.falling}vh)` // flips fish when clicked
                    }} />
                </div>
            ) 
    }



// end of game - happy fish
// phase 4
           
function FishWin() {
    const [fish, setFish] = useState(false);
    const [swim, setSwim] = useState(false);

    useEffect(() => {
        const getRandomInt = (min, max) => {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min + 1)) + min
        }

        const verticalPosition = getRandomInt(100, 3000);
        const fishSize = getRandomInt(80, 200) 
        const randomNum = getRandomInt(0, 1)
        const swimDuration = getRandomInt(7, 28)
        const swimmingDelay = getRandomInt(60, 110)
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
            imageName = "/BigHappyFish.svg"
            break;
            case 1: 
            imageName = "/SmHappyFish.svg"
            break;
        }
        
        setFish({
            top: verticalPosition,
            left: horizontalPosition,
            direction: directionFacing,
            size: fishSize,
            image: imageName,
        });
        
        setSwim({
            duration: swimDuration,
            direction: swimmingDirection,
            delay: swimmingDelay,
            wiggle: swimWiggle 
        })
        
    }, []);

    return (
        <div style={{
            position: "absolute",
            top: `${fish.top}px`,
            left: `${fish.left}vw`,
            width: `${fish.size}px`,
            animation: `${swim.duration}s ${swim.direction} ${swim.delay}s linear, wiggle ${swim.wiggle}s infinite`,
            transform: `scaleX(${fish.direction})`,
            userSelect: "none" 
        }} >
                    <img src={fish.image} alt="Fish" />
                </div>
            ) 
    }


function StartButton () {
    const [clicked, setClicked] = useState(false)
    const [outOfTime, setOutOfTime] = useState(false)
    const [seconds, setSeconds] = useState(60)
    const [win, setWin] = useState(false)

    const { hearts } = useGame()

useEffect(() => {
    let timer
            if (clicked && !outOfTime) {
                timer = setInterval(() => {
                    setSeconds(seconds => seconds - 1)
                    if (seconds < 1) {
                        setSeconds(0)
                    }
            
                }, 1000)}

    return () => {
      clearInterval(timer);
    };
    }, [clicked, outOfTime])

useEffect(() => {
    if (seconds < 0) {
        setOutOfTime(true)
        }
    console.log(outOfTime)
})

// Win logic needs to be added (clothes)


    if (!win && (hearts === 0 || outOfTime)) {
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
                        userSelect: "none",
                        position: "fixed",
                        }}>
                    <img src="/heart.svg" alt="heart" style={{ visibility: hearts >= 1 ? "visible" : "hidden" }} />
                    <img src="/heart.svg" alt="heart" style={{ visibility: hearts >= 2 ? "visible" : "hidden" }} />
                    <img src="/heart.svg" alt="heart" style={{ visibility: hearts === 3 ? "visible" : "hidden" }} />
                </div>
                <div style ={{
                    position: "fixed",
                    fontSize: "50px",
                    textAlign: "center",
                    justifyContent: "center",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: "900",
                    left: "50%",
                    transform: "translate(-50%)"

                }}>
                    <p>Timer: {seconds}</p>
                </div>
{/* Phase 1 */}
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
{/* Phase 2 */}
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
                <FishPhase2 />
{/* Phase 3 */}
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
{/* Phase 4 - Happy */}
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />
                <FishWin />


             </div>
        )}

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "20px",
            boxSizing: "border-box"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "lightblue",
                borderRadius: "15px",
                padding: "40px 20px",
                boxSizing: "border-box",
                width: "90%",
                maxWidth: "500px",
                minWidth: "280px",
                minHeight: "50vh",
                maxHeight: "85vh",
                overflowY: "auto"
            }}>
                <p style={{
                    color: "black",
                    textAlign: "center",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: "700",
                    fontSize: "1.5rem",
                    lineHeight: "1.4",
                    margin: "0 0 30px 0"
                }}>
                    Goal: Clean 10 pieces of clothes without killing any fish.
                    <br /><br />
                    You have 3 hearts. Each time a fish is killed, a heart is lost.
                </p>

                <div
                    style={{
                        backgroundColor: "#7AC943",
                        borderRadius: "10px",
                        border: "8px solid white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: "900",
                        cursor: "pointer",
                        color: "#20431D",
                        boxSizing: "border-box",
                        width: "100%",
                        maxWidth: "200px",
                        padding: "15px",
                        fontSize: "20px",
                        textAlign: "center"
                    }} 
                    onClick={startGame}
                >
                    START
                </div>
            </div>
        </div>
    )
}

    export { StartButton, GameProvider }
