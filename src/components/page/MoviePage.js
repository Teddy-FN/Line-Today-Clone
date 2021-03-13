import React from 'react'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import ArticleMovie1 from './Movie/ArticleMovie1'
import ArticleMovie2 from './Movie/ArticleMovie2'
import HeadLineMovie from './Movie/HeadLineMovie'
import ArticleMovie3 from './Movie/ArticleMovie3'
import LatestMovie from './Movie/LatestMovie'
import Footer from '../Footer'

function MoviePage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <HeadLineMovie />
                    <ArticleMovie1 />
                    <ArticleMovie2 />
                    <ArticleMovie3 />
                    <LatestMovie />
                </ArticleContent>
                <Footer />
            </ContainerApp>
        </div>
    )
}

export default MoviePage
