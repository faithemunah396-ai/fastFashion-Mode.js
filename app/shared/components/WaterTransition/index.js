"use client"

export default function WaterTransition({fadeIn}){
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: "2",
            opacity: fadeIn ? 1 : 0,
            transition: " opacity 4s ease"
        }}>
            <div id="waterWave" style={{
                position: "absolute",
                top: "100%"
            }}>
                <img src="/WaterTransition.svg" alt=""></img>
            </div>
            <div id="water" style={{
                backgroundColor: "#98CCBA",
                position: "absolute",
                top: "150%",
                width: "200vw",
                height:"2700px"
            }}></div>
        </div>
    );
} 