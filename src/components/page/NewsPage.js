import React from 'react'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ContentContainer, ArticleContent } from '../Main'

// Import page
import HeadLineNews from './News/HeadLineNews'
import NewsList from './News/NewsList'
import HightlightTodayNews from './News/HighlightTodayNews'
import EconomicNasional from './News/EconomicNasional'
import Criminal from './News/Criminal'
import NewsVideo from './News/NewsVideo'
import Feature from './News/Feature'
import Opini from './News/Opini'
import LocalNews from './News/LocalNews'
import MostCommented from './News/MostCommented'
import LatestNews from './News/LatestNews'
import AnyJusticeNews from './News/AnyJusticeNews'

function NewsPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ContentContainer>
                    <NewsList />
                </ContentContainer>
                <ArticleContent>
                    <HeadLineNews />
                    <HightlightTodayNews />
                    <EconomicNasional />
                    <Criminal />
                    <NewsVideo />
                    <Feature />
                    <Opini />
                    <LocalNews />
                    {/* Kurang template nomor 12 */}
                    <MostCommented />
                    <LatestNews />
                    <AnyJusticeNews />
                </ArticleContent>
            </ContainerApp>
        </div>
    )
}

export default NewsPage
