import React from 'react'
// Import Style
import './style/ListCategory.css'
import { Link } from 'react-router-dom'

export default function ListCategory() {
    return (
        <div>
            <div className="list">
                <div className="list-title">
                    <Link to="/Sci-Tech">
                        <h3>Sci-Tech</h3>
                    </Link>
                </div>
                <div className="list-title">
                    <Link to="/Sports">
                        <h3>Sports</h3>
                    </Link>
                </div>
                <div className="list-title">
                    <Link to="/Games">
                        <h3>Games</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}
