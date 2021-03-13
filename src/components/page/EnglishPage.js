import React from 'react'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import Header from '../Header'


import HeadLineEnglish from './English/HeadLineEnglish'
import RecommendEnglish from './English/RecommendEnglish'
import LatestNewsEnglish from './English/LatestNewsEnglish'
import Footer from '../Footer'

function EnglishPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <HeadLineEnglish />
                    <RecommendEnglish />
                    <LatestNewsEnglish />
                </ArticleContent>
                <Footer />
            </ContainerApp>
        </div>
    )
}

export default EnglishPage
