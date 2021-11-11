import { Navbar } from "../../components/Navbar";
import thumb from "../../assets/thumb.png";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

export function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="thumb">
          <img src={thumb} alt="Thumb" loading="lazy"/>
          <p>
            Copyright &copy; Developed by
            <ExternalLink href="https://github.com/MarceloCChaves">Marcelo Chaves</ExternalLink>
          </p>
        </div>
        <div className="get-started">
          <h3>The best way to find out what's new in animes world</h3>
          <Link to="/animes">Get started</Link>
        </div>
      </Container>
    </div>
  );
}
