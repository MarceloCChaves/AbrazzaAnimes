import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import api from "../../services/api";
import { Container, Filter, Title } from "./styles";

type AnimeList = {
  mal_id: number,
  title: string,
  url: string,
  image_url: string,
  type: string,
  start_date: string,
}

export function Animes() {
  const [ animeList, setAnimeList ] = useState<AnimeList[]>([]);
  const [ searchTerm, setSearchTerm ] = useState('')
  useEffect(() => {
    api.get("/v3/top/anime/1/upcoming")
    .then((response: AxiosResponse<any>) => {
      setAnimeList(response.data.top as AnimeList[])
    })
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Filter>
        <Title className="title">Upcoming animes</Title>
        <input placeholder="Search..." type="text" onChange={event => setSearchTerm(event.target.value)}/>
      </Filter>
      <Container>
        {animeList.filter((value) => {
          if(searchTerm === ''){
            return value
          }else if(value.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return value
          }else{
            return false
          }
        }).map((content) => {
          return(
            <div className="card" key={content.mal_id}>
              <img src={content.image_url} alt={content.title} />
              <div className="content">
                <h3>{content.title}</h3>
                <div className="info">
                  <p>Type: {content.type}</p>
                  <span>{content.start_date ? "Release in: " + content.start_date : "Release in: ???"}</span>
                </div>
                <div className="buttons">
                  <Link to={`/news/${content.mal_id}`} className="view">News</Link>
                  <ExternalLink href={`https://myanimelist.net/anime/${content.mal_id}/Tate_no_Yuusha_no_Nariagari_Season_2`} className="info" target="_blank">More info</ExternalLink>
                </div>
              </div>
            </div>
          )
        })}
      </Container>
    </div>
  );
}
