import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Opini() {

    const [hotNews, setHotNews] = useState([])

    useEffect(() => {
        axios.get('/id/portaljson')
            .then((res) => {
                console.log('NEWS', res.data.result.categories[2].templates[9].sections[0].articles)
                setHotNews(res.data.result.categories[2].templates[9].sections[0].articles)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className="card-article">
                <div className="header-card-logo hot-issue">
                    <h4>Opini</h4>
                </div>
                <div className="row row-cols-1 row-cols-md-2 cards-news">
                    {
                        hotNews.map((items, idx) => {
                            return (
                                <div className="col mb-4 hot-issues-card" key={idx} onClick={() => window.location.href = items.url.url}>
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

export default Opini
