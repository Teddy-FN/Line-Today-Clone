import React, { useEffect, useState } from 'react'
// Import style
import './style/Header.css'
// Import Icon
import { Link } from 'react-router-dom'

// Import axios
import axios from 'axios'

function Header() {
    const [listArticle, setListArticle] = useState([])
    useEffect(() => {
        axios.get('/id/portaljson')
            .then(res => {
                console.log('BUAT HEADER LIST', res.data.result.categoryList)
                setListArticle(res.data.result.categoryList)
            })
    }, [])

    return (
        <header>
            <div className="logo">
                <div className="title-bar">
                    <Link to="/">
                        <img src="https://static-today.line-scdn.net/dist/8c5fc3ca/static/img/brand-logo-rectangle-today-solid.svg" alt=" logo line today" />
                    </Link>
                    <Link to="/login/">
                        <button className="btn login">Masuk</button>
                    </Link>
                </div>
                <nav className="category">
                    <div className="catergory-items">
                        <ul className="nav">
                            {
                                listArticle.map((items, idx) => {
                                    return (
                                        <li className="nav-item" key={idx}>
                                            <Link to={`/${items.name}`}>
                                                <p>{items.name}</p>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div >
        </header >
    )
}

export default Header
