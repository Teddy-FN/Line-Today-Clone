import React, { useEffect, useState } from 'react'
import axios from 'axios'

function InfoFilmDanDrama() {

    const [article, setArticle] = useState([])

    useEffect(() => {
        axios.get('/id/portaljson')
            .then((res) => {
                // console.log('INFO FILM DAN DRAMA', res.data.result.categories[0].templates[11].sections[0].articles)
                setArticle(res.data.result.categories[0].templates[11].sections[0].articles)
            })
    }, [])

    return (
        <div>
            <div className="cards-article">
                <div className="title-article">
                    <h4>Info Film Dan Drama</h4>
                </div>
                <div className="row row-cols-1 row-cols-md-2 cards-news">
                    {
                        article.map((items, idx) => {
                            return (
                                <div className="col mb-4" key={idx} style={{ cursor: "pointer" }} onClick={() => window.location.href = items.url.url}>
                                    <div className="card">
                                        <img src={`https://obs.line-scdn.net/${items.thumbnail.hash}/w280`} className="card-img-top" alt="Images" />
                                        <div className="card-body">
                                            <h5 className="card-title">{items.title}</h5>
                                            <p className="card-text"><small className="text-muted">{items.publisher}</small></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default InfoFilmDanDrama