import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import Logo from '../../public/seastrel-logo.jpeg'

export default function SocialMedia() {
  return (
    <div>
      <div>
        <div style={{cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '30px',  }}>
          <a href="https://www.facebook.com/seastrel" target="_blank" rel="noopener noreferrer" className="icon-hover " style={{ color: 'skyblue' }}>
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/seastrelhq" target="_blank" rel="noopener noreferrer" className="icon-hover" style={{ color: 'skyblue' }}>
            <BsInstagram />
          </a>
          <a href="https://twitter.com/seastrelhq" target="_blank" rel="noopener noreferrer" className="icon-hover" style={{ color: 'skyblue' }}>
            <BsTwitterX /> 
          </a>
        </div>
        <h1>SEASTREL INTERNATIONAL LTD</h1>
        <img src={Logo} alt="Seastrel Logo" style={{ maxWidth: '600px', maxHeight: '300px' }} /> 
      </div>
    </div>
  );
}
