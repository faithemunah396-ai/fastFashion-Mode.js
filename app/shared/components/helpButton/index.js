"use client"

function HelpMeButton() {
    return (
        <div style={{
        zindex: "4",
      }}>
        <div
          style={{
            position: "absolute",
            top: "480%",
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
              padding: "30px",

              display: "flex",
              alignItems: "center",

              fontFamily: "Nunito, sans-serif",
              fontWeight: "900",
              fontSize: "32px",
              color: "#20431D",
            }}
          >
            Help Us
          </div>
        </div>
      </div>
    )
}

export { HelpMeButton }