import { Container } from "./styles";
import { Navbar } from "../../components/Navbar";
import { ExternalLink } from "react-external-link";

export function About() {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <div className="info">
          <strong>Abrazza Animes</strong>
          <p>Abrazza animes is a service that you can find out which animes are coming</p>
          <p>Developed with <ExternalLink href={"https://jikan.moe/"}>Jikan Api</ExternalLink></p>
          <p>Jikan (時間) is an open-source PHP {'&'} REST API for the “most active online anime + manga community and database” — MyAnimeList.net. It parses the website to satisfy the need for an API.</p>
          <p>The word Jikan literally translates to Time in Japanese (時間). And that's what this API saves you of. ;)</p>
          <div className="buttons">
            <ExternalLink href={"https://jikan.docs.apiary.io/#"}>Documentation</ExternalLink>
            <ExternalLink href={"https://github.com/jikan-me/jikan"}>Github</ExternalLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
