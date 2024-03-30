import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import Logo from "../../public/seastrel-logo.jpeg";

export default function SocialMedia() {
  return (
    <div
      style={{
        width: "100%",
        // height: '100vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        // border: '2px solid red'
      }}
    >
      <div style={{ fontSize: "30px", fontWeight: 600 }}>SEASTREL SOCIALS</div>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "34px",
          // border: '2px solid red'
        }}
      >
        <a
          href="https://www.facebook.com/seastrel"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-hover "
          style={{ color: "skyblue" }}
        >
          <FaFacebook size="40px"/>
        </a>
        <a
          href="https://www.instagram.com/seastrelhq"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-hover"
          style={{ color: "skyblue" }}
        >
          <BsInstagram size="40px"/>
        </a>
        <a
          href="https://twitter.com/seastrelhq"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-hover"
          style={{ color: "skyblue" }}
        >
          <BsTwitterX size="40px" />
        </a>
      </div>

      <div
        style={{
          maxWidth: "300px",
          // border: '2px solid red'
        }}
      >
        <img
          src={Logo}
          alt="Seastrel Logo"
          style={{ width: "100%", maxHeight: "300px" }}
        />
      </div>
    </div>
  );
}
