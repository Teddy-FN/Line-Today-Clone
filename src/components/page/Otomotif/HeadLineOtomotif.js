import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HeadLineOtomotif() {
    const [headline, setHeadline] = useState([])
    useEffect(() => {
        axios.get('/id/portaljson')
            .then((res) => {
                console.log('HEADLINE Otomotif', res.data.result.categories[14])
                // Sections 2 buat video
                setHeadline(res.data.result.categories[14].templates[1].sections[1].articles)
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

export default HeadLineOtomotif
