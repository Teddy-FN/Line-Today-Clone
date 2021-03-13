import React from 'react'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import HeadLine from '../HeadLine'
import ViralArticle from '../Landing Page/ViralArticle'
import ArticleForYouPage from '../Landing Page/ArticleForYouPage'
import HotIssuesArticle from '../Landing Page/HotIssuesArticle'
import BeritaTerbaru from '../Landing Page/BeritaTerbaru'
import VideoNews from '../Landing Page/VideoNews'
import ShowbizArticle from '../Landing Page/ShowbizArticle'
import LifeStyle from '../Landing Page/LifeStyle'
import InfoFilmDanDrama from '../Landing Page/InfoFilmDanDrama'
import IntermezzoArticle from '../Landing Page/IntermezzoArticle'
import SportNews from '../Landing Page/SportNews'
import SciTechGaming from '../Landing Page/SciTechGaming'
import EnglishSection from '../Landing Page/EnglishSection'
import BanyakDicomentary from '../Landing Page/BanyakDicomentary'
import LocalArticle from '../Landing Page/LocalArticle'
import Footer from '../Footer'

function TopPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <HeadLine />
                    <ViralArticle />
                    <ArticleForYouPage />
                    <HotIssuesArticle />
                    <BeritaTerbaru />
                    <VideoNews />
                    <ShowbizArticle />
                    <LifeStyle />
                    <InfoFilmDanDrama />
                    <IntermezzoArticle />
                    <SportNews />
                    <SciTechGaming />
                    <EnglishSection />
                    <BanyakDicomentary />
                    <LocalArticle />
                </ArticleContent>
                <Footer />
            </ContainerApp>
        </div>
    )
}

export default TopPage
