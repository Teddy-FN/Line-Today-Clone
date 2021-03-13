import React, { useState, useEffect } from 'react'
// Import Axios
import axios from 'axios'

function ViralArticle() {

    const [article, setArticle] = useState([])

    useEffect(() => {
        axios.get('/id/portaljson')
            .then(res => {
                setArticle(res.data.result.categories[0].templates[6].sections[0].articles)
            })
    }, [])

    return (
        <div className="card-article">
            <div className="title-article">
                <h4>Viral di Medsos</h4>
            </div>
            {
                article.map((items, idx) => {
                    return (
                        <div key={idx} onClick={() => window.location.href = items.url.url} className="cards-trendings">
                            <div className="trending-card">
                                <div className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src={`https://obs.line-scdn.net/${items.thumbnail.hash}/w280`} alt="Images" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <p className="card-text">{items.title}</p>
                                                <small className="text-muted">{items.publisher}</small>
                                                <p className="card-text"><small className="text-muted">#{items.categoryName}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default ViralArticle
