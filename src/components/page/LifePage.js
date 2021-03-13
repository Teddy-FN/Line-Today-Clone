import React from 'react'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ContentContainer, ArticleContent } from '../Main'
import BeautyYou from './Life/BeautyYou'
import Fashion from './Life/Fashion'
import HeadLineLife from './Life/HeadLineLife'


// Import page
import LifeList from './Life/LifeList'
import PilihanDiRumah from './Life/PilihanDiRumah'
import Relationship from './Life/Relationship'
import TodayLife from './Life/TodayLife'
import PickForYou from './Life/PickForYou'
import Reads from './Life/Reads'
import ParentingLife from './Life/ParentingLife'
import TrendingLife from './Life/TrendingLife'
import LatestLife from './Life/LatestLife'
import Footer from '../Footer'


function NewsPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ContentContainer>
                    <LifeList />
                </ContentContainer>
                <ArticleContent>
                    <HeadLineLife />
                    <Fashion />
                    <BeautyYou />
                    <Relationship />
                    <TodayLife />
                    <PilihanDiRumah />
                    <PickForYou />
                    <Reads />
                    <ParentingLife />
                    <TrendingLife />
                    <LatestLife />
                </ArticleContent>
                <Footer />
            </ContainerApp>
        </div>
    )
}

export default NewsPage
