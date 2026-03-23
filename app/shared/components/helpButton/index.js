"use client"

function HelpMeButton() {
    return (
        <div style={{
      }}>
        <div
          style={{
            display: "flex",
            padding: "10px",
            borderRadius: "15px",
            cursor: "pointer",
            display: "flex",
            alignContent: "center",
            justifyContent: "right",
            marginRight: "100px",
            marginTop: "-180px"
          }}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              textAlign: "center",
              justifyContent: "center",
              backgroundColor: "#7AC943",
              borderRadius: "10px",
              border: " 10px solid white",
              width: "300px",
              height: "100px",
              padding: "30px",
              alignItems: "center",
              fontFamily: "Nunito, sans-serif",
              fontWeight: "900",
              fontSize: "40px",
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