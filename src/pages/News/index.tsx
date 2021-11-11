import api from "../../services/api";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { Navbar } from "../../components/Navbar";
import { Container, LoadingSection } from "./styles";
import { ExternalLink } from "react-external-link";

type SingleNews = {
  url: string,
  title: string,
  date: string,
  author_name: string,
  author_url: string,
  image_url: string,
  forum_url: string,
  intro: string,
}

export function News({match: {params: {id}}}: any) {
  const [news, setNews] = useState<SingleNews[]>([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    api.get(`/v3/anime/${id}/news`)
    .then((response: AxiosResponse<any>) => {
      setNews(response.data.articles)
      setLoading(false)
    })
  }, [id])
  if(loading){
    return(
      <LoadingSection>
        <h1>Loading ....</h1>
      </LoadingSection>
    )
  }
  return(
    <div>
      <Navbar></Navbar>
      {news.map((content) => {
        return(
          <Container key={content.url}>
            <div className="anime-news">
              <p>Author: <ExternalLink href={`${content.author_url}`}>{content.author_name}</ExternalLink></p>
              <p>Date: { new Intl.DateTimeFormat("en").format(new Date(content.date))}</p>
              <hr/>
              <div className="info-related">
                <img src={content.image_url} alt={content.author_url} loading="lazy"/>
                <div className="anime-info">
                  <strong>{content.title}</strong>
                  <p>{content.intro}<ExternalLink href={`${content.url}`}>View more</ExternalLink></p>
                  <div className="buttons">
                    <ExternalLink href={`${content.forum_url}`}>Visit forum</ExternalLink>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        )
      })}
    </div>
  )
}
