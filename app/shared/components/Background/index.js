export default function Background(){
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: "1"
        }}>
            <div id="pattern" svg="pattern.svg" style={{
                backgroundColor: "#F9DFA7",
                width: "100vw",
                height: "700px",
            }}>
                <img src="/pattern.svg" alt="pattern"></img>
            </div>
            <div id="land" style={{
                position: "absolute",
                top: "70%",
                transform: "scale(1.5)"
            }}>
                <img src="/land.svg" alt="land"></img>
            </div>
            <div id="waterWave" style={{
                position: "absolute",
                top: "100%"
            }}>
                <img src="/Water.svg" alt=""></img>
            </div>
            <div id="water" style={{
                backgroundColor: "#76BCEF",
                width: "100vw",
                height:"3100px"
            }}></div>
        </div>
    );
}