import { Navbar } from "../../components/Navbar";
import thumb from "../../assets/thumb.png";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="thumb">
          <img src={thumb} alt="Thumb" />
          <p>
            Copyright &copy; Developed by{" "}
            <a href="https://github.com/MarceloCChaves">Marcelo Chaves</a>
          </p>
        </div>
        <div className="get-started">
          <h3>The best way to find your favorite animes</h3>
          <Link to="/animes">Get started</Link>
        </div>
      </Container>
    </div>
  );
}
