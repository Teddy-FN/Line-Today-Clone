import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HeadLineNews() {
    const [headline, setHeadline] = useState([])
    useEffect(() => {
        axios.get('/id/portaljson')
            .then((res) => {
                console.log('HEADLINE NEWS', res.data.result.categories[0].templates[13].sections[0].articles)
                setHeadline(res.data.result.categories[0].templates[13].sections[0].articles)
            })
    }, [])
    return (
        <div>
            {
                headline.map((items, idx) => {
                    return (
                        <div key={idx} className="headline-news" onClick={() => window.location.href = items.url.url}>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{items.title}</h5>
                                    </div>
                                    <img src={`https://obs.line-scdn.net/${items.thumbnail.hash}/w1200`} className="d-block w-100" alt="Thumbnail" />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HeadLineNews