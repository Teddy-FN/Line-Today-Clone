import React, { useEffect, useState } from 'react'
// Styling
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/HeadLine.css'
// Axios 
import axios from 'axios';

function Article() {

    const [headLine, setHeadLine] = useState([])

    useEffect(() => {
        axios.get('/id/portaljson')
            .then(res => {
                console.log('APA INI', res.data.result.categories[0].templates[7].sections[0].articles)
                setHeadLine(res.data.result.categories[0].templates[1].sections[0].articles)
            });
    }, [])

    return (
        <div>
            {
                headLine.map((items, idx) => {
                    return (
                        <div key={idx} className="headline-news" onClick={() => window.location.href = items.url.url}>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="carousel-caption">
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

export default Article
