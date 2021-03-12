import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Viral() {
    const [showbizChoose, setShobizChoose] = useState([])
    useEffect(() => {
        // Berita Showbiz Pilihan Untukmu
        axios.get('/id/portaljson')
            .then((res) => {
                setShobizChoose(res.data.result.categories[1].templates[10].sections[0].articles)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className="card-article">
                <div className="title-article">
                    <h4>SEDANG VIRAL</h4>
                </div>
                <div className="row row-cols-1 row-cols-md-2">
                    {
                        showbizChoose.map((items, idx) => {
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

export default Viral
