import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ParentingLife() {
    const [article, setArticle] = useState([])

    useEffect(() => {
        axios.get('/id/portaljson')
            .then((res) => {
                setArticle(res.data.result.categories[3].templates[13].sections[0].articles)
            })
    }, [])

    return (
        <div>
            <div className="cards-article">
                <div className="title-article">
                    <h4>PARENTING</h4>
                </div>
                <div className="row row-cols-1 row-cols-md-2 cards-news">
                    {
                        article.map((items, idx) => {
                            return (
                                <div className="col mb-4" key={idx} style={{ cursor: "pointer" }} onClick={() => window.location.href = items.url.url}>
                                    <div className="card">
                                        <img src={`https://obs.line-scdn.net/${items.thumbnail.hash}/w1200`} className="card-img-top" alt="Images" />
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

export default ParentingLife
