import React from 'react'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import Header from '../Header'
import MostPopularGames from './Games/MostPopularGames'
import LatestGames from './Games/LatestGames'
import Footer from '../Footer'
function Games() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <MostPopularGames />
                    <LatestGames />
                </ArticleContent>
            </ContainerApp>
            <Footer />
        </div>
    )
}

export default Games
