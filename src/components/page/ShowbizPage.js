import React from 'react'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'

// Import Page 
import GayaSeleb from './Showbizz/GayaSeleb'
import KPopDrama from './Showbizz/KPopDrama'
import InfoFilm from './Showbizz/InfoFilm'
import Music from './Showbizz/Music'
import Viral from './Showbizz/Viral'
import ShowbizzNews from './Showbizz/ShowbizzNews'
import BeritaTerbaru from './Showbizz/BeritaTerbaru'
import HotNews from './Showbizz/HotNews'
import ShowbizHeadline from './Showbizz/ShowbizHeadline'
import HeadLineShowbizz from './Showbizz/HeadLineShowbizz'

function ShowbizPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <HeadLineShowbizz />
                    <ShowbizHeadline />
                    <HotNews />
                    <GayaSeleb />
                    <KPopDrama />
                    <InfoFilm />
                    <Music />
                    <Viral />
                    <ShowbizzNews />
                    <BeritaTerbaru />
                </ArticleContent>
            </ContainerApp>
        </div>
    )
}
export default ShowbizPage
