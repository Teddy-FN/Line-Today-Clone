import React, { useEffect, useState } from 'react'
import axios from 'axios'

function BeritaTerbaru() {

    const [showbizChoose, setShobizChoose] = useState([])


    useEffect(() => {
        // Berita Showbiz Pilihan Untukmu
        axios.get('/id/portaljson')
            .then((res) => {
                setShobizChoose(res.data.result.categories[1].templates[12].sections[0].articles)
            })
    }, [])

    return (
        <div>
            <div className="card-article">
                <div className="header-card-logo hot-issue">
                    <h4>BERITA TERBARU</h4>
                </div>
                <div className="row row-cols-1 row-cols-md-2 cards-news">
                    {
                        showbizChoose.map((items, idx) => {
                            return (
                                <div className="col mb-4 hot-issues-card" key={idx} onClick={() => window.location.href = items.url.url}>
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

export default BeritaTerbaru
