import api from "../../services/api";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { Navbar } from "../../components/Navbar";
import { Container, LoadingSection } from "./styles";
import { ExternalLink } from "react-external-link";
import loadingGif from '../../assets/loading.gif'

type SingleNews = {
  url: string,
  title: string,
  date: string,
  author_username: string,
  author_url: string,
  images:{
    jpg:{
      image_url: string
    }
  }
  forum_url: string,
  excerpt: string,
}

export function News({match: {params: {id}}}: any) {
  const [news, setNews] = useState<SingleNews[]>([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    api.get(`/v4/anime/${id}/news`)
    .then((response: AxiosResponse<any>) => {
      setNews(response.data.data)
      setLoading(false)
    })
  }, [id])
  if(loading){
    return(
      <LoadingSection>
        <img src={loadingGif} alt="loading" />
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
              <p><ExternalLink href={`${content.author_url}`}>{content.author_username}</ExternalLink></p>
              <p>{ new Intl.DateTimeFormat("en").format(new Date(content.date))}</p>
              <hr/>
              <div className="info-related">
                <img src={content.images.jpg.image_url} alt={content.author_url} loading="lazy"/>
                <div className="anime-info">
                  <strong>{content.title}</strong>
                  <p>{content.excerpt}<ExternalLink href={`${content.url}`}>View more</ExternalLink></p>
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
