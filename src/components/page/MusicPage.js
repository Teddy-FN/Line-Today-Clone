import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import BestHits from './Music/BestHits'
import BilboardChart from './Music/BilboardChart'
import HeadLineMusic from './Music/HeadLineMusic'
import IndoMusikGram from './Music/IndoMusikGram'
import InternationalArtist from './Music/InternationalArtist'
import KPop from './Music/KPop'
import KPopMusic from './Music/KPopMusic'
import LivePerformance from './Music/LivePerformance'
import MusicTalks from './Music/MusicTalks'
import NewsKlip from './Music/NewsKlip'
import PopularCovers from './Music/PopularCovers'

function MusicPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <HeadLineMusic />
                    <BestHits />
                    <BilboardChart />
                    <IndoMusikGram />
                    <InternationalArtist />
                    <KPop />
                    <KPopMusic />
                    <LivePerformance />
                    <MusicTalks />
                    <NewsKlip />
                    <PopularCovers />
                </ArticleContent>
                <Footer />
            </ContainerApp>
        </div>
    )
}

export default MusicPage
