import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import api from "../../services/api";
import { Container } from "./styles";

type AnimeList = {
  rank: number,
  title: string,
  url: string,
  image_url: string,
  type: string,
  start_date: string,
  end_date: string,
}

export function Animes() {
  const [ animeList, setAnimeList ] = useState<AnimeList[]>([]);

  useEffect(() => {
    api.get("/v3/top/anime/1/upcoming")
    .then((response: AxiosResponse<any>) => {
      setAnimeList(response.data.top as AnimeList[])
    })
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <h1>Featured animes</h1>
      <Container>
        {animeList.map((content) => {
          return(
            <div className="card" key={content.rank}>
              <img src={content.image_url} alt={content.title} />
              <div className="content">
                <h3>{content.title}</h3>
                <div className="info">
                  <p>Type: {content.type}</p>
                  <span>{content.start_date ? "Released in: " + content.start_date : ""}</span>
                  <p>{content.end_date ? "End in: " + content.end_date : ""}</p>
                </div>
                <button>View</button>
                <button>More info</button>
              </div>
            </div>
          )
        })}
      </Container>
    </div>
  );
}
