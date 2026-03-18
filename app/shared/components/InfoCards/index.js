export default function InfoCards(){
    return (
      <div
        id="container"
        style={{
          position: "absolute",
          backgroundColor: "#76BCEF",
          top: "140%",
          width: "100vw",
          height: "100vw",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          id="card1"
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "700px",
            left: "45%",
          }}
        >
          <div
            id="heading1"
            style={{
              backgroundColor: "#48B7CB",
              color: "#fff",
              padding: "10px",
              fontWeight: 900,
              fontSize: "30px",
              borderRadius: "12px 12px 0px 0px",
            }}
          >
            The Problem
          </div>
          <div
            id="mainBox1Border"
            style={{
              backgroundColor: "#DBF9FD",
              color: "#000000",
              fontSize: "24px",
              lineHeight: "1.5",
              border: "10px solid #20828D",
              padding: "30px",
              borderRadius: "40px",
            }}
          >
            <div style={{

            }}>
              <p>
                The fashion industry is one of the largest contributors to water
                pollution worldwide. From toxic dyes released into rivers to
                untreated wastewater from textile factories, vast amounts of
                harmful chemicals enter freshwater systems every year. These
                pollutants damage aquatic ecosystems, contaminate drinking
                water, and put nearby communities at serious health risk.
              </p>
            </div>
          </div>
        </div>
        <div
          id="card2"
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "700px",
            right: "45%",
            top: "45%",
          }}
        >
          <div
            id="heading2"
            style={{
              backgroundColor: "#48B7CB",
              color: "#fff",
              padding: "10px",
              fontWeight: 900,
              fontSize: "30px",
              borderRadius: "12px 12px 0px 0px",
            }}
          >
            How Fashion Pollutes Water
          </div>
          <div
            id="mainBox2Border"
            style={{
              backgroundColor: "#DBF9FD",
              color: "#000000",
              fontSize: "24px",
              lineHeight: "1.5",
              border: "10px solid #20828D",
              padding: "30px",
              borderRadius: "40px",
            }}
          >
            <div style={{

            }}>
              <p>
                Water pollution in fashion begins at the production stage. Cotton farming uses heavy pesticides, synthetic fabrics shed microplastics during washing, and dyeing processes require enormous volumes of water mixed with hazardous substances. When waste is poorly managed, these pollutants flow directly into rivers and oceans.
              </p>
            </div>
          </div>
        </div>
        <div
          id="card3"
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "700px",
            left: "45%",
            top: "90%",
          }}
        >
          <div
            id="heading3"
            style={{
              backgroundColor: "#48B7CB",
              color: "#fff",
              padding: "10px",
              fontWeight: 900,
              fontSize: "30px",
              borderRadius: "12px 12px 0px 0px",
            }}
          >
            Environmental and Human Impact
          </div>
          <div
            id="mainBox3Border"
            style={{
              backgroundColor: "#DBF9FD",
              color: "#000000",
              fontSize: "24px",
              lineHeight: "1.5",
              border: "10px solid #20828D",
              padding: "30px",
              borderRadius: "40px",
            }}
          >
            <div style={{

            }}>
              <p>
                Polluted water affects more than just nature. Fish and marine life suffer from oxygen depletion and toxicity, while humans face increased risks of skin disease, respiratory issues, and long-term illnesses. Communities near manufacturing hubs are often the most affected, highlighting the social injustice tied to fashion’s water footprint.
              </p>
            </div>
          </div>
        </div>
        <div
          id="card4"
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "700px",
            right: "45%",
            top: "135%",
          }}
        >
          <div
            id="heading4"
            style={{
              backgroundColor: "#48B7CB",
              color: "#fff",
              padding: "10px",
              fontWeight: 900,
              fontSize: "30px",
              borderRadius: "12px 12px 0px 0px",
            }}
          >
            Solutions and Sustainable Choices
          </div>
          <div
            id="mainBox4Border"
            style={{
              backgroundColor: "#DBF9FD",
              color: "#000000",
              fontSize: "24px",
              lineHeight: "1.5",
              border: "10px solid #20828D",
              padding: "30px",
              borderRadius: "40px",
            }}
          >
            <div style={{

            }}>
              <p>
                Change is possible. Sustainable materials, cleaner dyeing technologies, wastewater treatment, and mindful consumer choices can significantly reduce water pollution. By supporting ethical brands, buying less, and demanding transparency, we can help protect water resources and push the fashion industry toward a cleaner future.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}