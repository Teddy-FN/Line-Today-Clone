import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ShowbizzNews() {
    const [showbizChoose, setShobizChoose] = useState([])

    useEffect(() => {
        axios.get('/id/portaljson')
            .then((res) => {
                setShobizChoose(res.data.result.categories[1].templates[8].sections[0].articles)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div>
                <div className="cards-article">
                    <div className="korean-cards">
                        {
                            showbizChoose.map((items, idx) => {
                                return (
                                    <div className="card mb-3" key={idx} onClick={() => window.location.href = items.url.url} style={{ cursor: 'pointer' }}>
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src={`https://obs.line-scdn.net/${items.thumbnail.hash}/w280`} className="card-img-top" alt="Images" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{items.title}</h5>
                                                    <p className="card-text"><small className="text-muted">{items.publisher}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowbizzNews
