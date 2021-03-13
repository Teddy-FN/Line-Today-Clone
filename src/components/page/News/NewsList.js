import React from 'react'
import '../../style/ListCategory.css'
import { Link } from 'react-router-dom'

function NewsList() {
    return (
        <div>
            <div className="list">
                <div className="list-title">
                    <Link to="/Trending" >
                        <h3>Trending</h3>
                    </Link>
                </div>
                <div className="list-title">
                    <Link to="/Music" >
                        <h3>Music</h3>
                    </Link>
                </div>
                <div className="list-title">
                    <Link to="/Life" >
                        <h3>Life</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewsList
