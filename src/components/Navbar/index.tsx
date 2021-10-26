import { Nav } from "./styles";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

export function Navbar() {
  return (
    <Nav>
      <ul className="logo-items">
        <li><Link to="/">AbrazzaAnimes</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Help">Help</Link></li>
      </ul>
      <div className="links">
        <ExternalLink href={"https://www.facebook.com/"}><i className="fab fa-facebook-square"></i></ExternalLink>
        <ExternalLink href={"https://www.instagram.com/"}><i className="fab fa-instagram"></i></ExternalLink>
        <ExternalLink href={"https://discord.com/"}><i className="fab fa-discord"></i></ExternalLink>
      </div>
    </Nav>
  );
}
