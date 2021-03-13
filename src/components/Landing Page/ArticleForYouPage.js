import React, { useState, useEffect } from 'react'
import '../style/ArticleForYou.css'

import axios from 'axios'

function ArticleForYouPage() {

    const [article, getArticle] = useState([])
    useEffect(() => {
        axios.get('/id/portaljson')
            .then(res => {
                getArticle(res.data.result.categories[0].templates[7].sections[0].articles)
            })
    }, [])

    return (
        <div className="card-article">
            <div className="title-article">
                <h4>ARTIKEL PILIHAN UNTUKMU</h4>
            </div>
            <div className="row row-cols-1 row-cols-md-2">
                {
                    article.map((items, idx) => {
                        return (
                            <div key={idx} onClick={() => window.location.href = items.url.url} className="card-articles">
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={`https://obs.line-scdn.net/${items.thumbnail.hash}/w1200`} className="card-img-top" alt="Images" />
                                        <div className="card-body">
                                            <h5 className="card-title">{items.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ArticleForYouPage