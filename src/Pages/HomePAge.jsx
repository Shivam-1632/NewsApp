import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import NewsItem from '../Components/NewsItem'
import { useSearchParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function HomePAge() {
  let [article, setArticle] = useState([])
  let [total, setTotal] = useState(0)
  let [page, setPage] = useState(1)
  let [q, setQ] = useState("All")
  let [language, setLanguage] = useState("hi")
  let [param] = useSearchParams()




  async function getAPIData(q, lang) {

    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${lang}&page=${page}&pageSize=24&sortBy=publishedAt&apiKey=6de76e42c4b04d3d9c983afec9b7d378`)
    response = await response.json()
    if (response.status === "ok") {
      console.log("testing........")
      setArticle(response.articles)
      setTotal(response.totalResults)
    }
    console.log(response.status)

  }
  useEffect(() => {
    let query = param.get("q") ?? "all"
    setQ(param.get("q") ?? "all")
    language = param.get("language") ?? "hi"
    setLanguage(param.get("language") ?? "hi")
    getAPIData(query, language)
  }, [param])
  async function fetchMoreData() {
    setPage(page + 1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&page=${page}&pageSize=24&sortBy=publishedAt&apiKey=6de76e42c4b04d3d9c983afec9b7d378`)
    response = await response.json()
    if (response.status === "ok") {
      console.log("testing........")
      setArticle(article.concat(response.articles))
      setTotal(response.totalResults)
    }

  }

  return (
    <div className="container-fluid  my-3">
      <h5 className="bg-primary text-light text-center py-2">{q} News Articles</h5>
      <InfiniteScroll
        dataLength={article.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={article.length < total}
        loader={<div className='my-5 text-center'><div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div></div>}
      >
        <div className="row">

          {
            article.map((item, index) => {
              return <NewsItem
                key={index}
                title={item.title}
                description={item.description}
                url={item.url}
                pic={item.urlToImage ? item.urlToImage : "/public/images/no_image.jpg"}
                date={item.publishedAt}
                source={item.source.name}
              />
            })
          }
        </div>
      </InfiniteScroll>
    </div>
  )
}
