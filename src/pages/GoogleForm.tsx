import Logo from "../../public/seastrel-logo.jpeg";

export default function GoogleForm() {
  return (
    <div
      style={{
        // border: "2px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "300px",
          // border: "2px solid red",
        }}
      >
        <img
          src={Logo}
          alt="Seastrel Logo"
          style={{ width: "100%", maxHeight: "300px" }}
        />
        <button
          style={{
            background: "skyblue",
            color: "skyblue",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <a
            style={{ color: "#051F44" }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSf3v1Gl3Xu5Eqdy57tKdCo77-Esse3_JjuiuzC4MFxjbNu_Zw/viewform?usp=sf_link"
          >
            SIGN UP
          </a>
        </button>
      </div>
      {/* <div style={{ fontSize: "25px", fontWeight: 600 }}>
        SEASTREL INTERNATIONAL LTD
      </div> */}

      {/* <div className="card" style={{ maxWidth: "400px" }}>
        <button
          style={{ background: "skyblue", color: "white", width: "100%" }}
        >
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3v1Gl3Xu5Eqdy57tKdCo77-Esse3_JjuiuzC4MFxjbNu_Zw/viewform?usp=sf_link">
            SIGN UP
          </a>
        </button>
      </div> */}
    </div>
  );
}
