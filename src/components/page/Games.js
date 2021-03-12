import React from 'react'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import Header from '../Header'
import MostPopularGames from './Games/MostPopularGames'
import LatestGames from './Games/LatestGames'
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
        </div>
    )
}

export default Games
