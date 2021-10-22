import { Nav } from "./styles";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <Nav>
      <ul className="logo-items">
        <li><Link to="/">AbrazzaAnimes</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Help">Help</Link></li>
      </ul>
      <div className="links">
        <Link to="/"><i className="fab fa-facebook-square"></i></Link>
        <Link to="/"><i className="fab fa-instagram"></i></Link>
        <Link to="/"><i className="fab fa-discord"></i></Link>
      </div>
    </Nav>
  );
}
