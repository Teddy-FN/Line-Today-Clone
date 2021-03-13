import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HeadLineShowbizz() {
    const [carousel, setCarousel] = useState([])

    useEffect(() => {
        axios.get('/id/portaljson')
            .then((res) => {
                setCarousel(res.data.result.categories[0].templates[9].sections[0].articles)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {
                carousel.map((items, idx) => {
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

export default HeadLineShowbizz
