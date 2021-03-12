import React from 'react'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import AnyVideos2 from './Videos/AnyVideos2'
import DramaVid from './Videos/DramaVid'
import HeadLineVideos from './Videos/HeadLineVideos'
import IndoMusikGram from './Videos/IndoMusikGram'
import SelfCharaVid from './Videos/SelfCharaVid'
import UjiPengetahuan from './Videos/UjiPengetahuan'
import Videos2 from './Videos/Videos2'
import KpopLOver from './Videos/KpopLover'
import Drama from './Videos/Drama'
import AnyVideos3 from './Videos/AnyVideos3'
import AnyVideos4 from './Videos/AnyVideos4'
import AnyVideos5 from './Videos/AnyVideos5'
import DramaAnimasi from './Videos/DramaAnimasi'
import ThaiSeries from './Videos/ThaiSeries'
import AnyVideos6 from './Videos/AnyVideos6'
import FunEntertaining from './Videos/FunEntertaining'
import DramaIndo from './Videos/DramaIndo'
import Latest from './Videos/Latest'
function VideosPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <HeadLineVideos />
                    <Videos2 />
                    <DramaVid />
                    <SelfCharaVid />
                    <UjiPengetahuan />
                    <AnyVideos2 />
                    <IndoMusikGram />
                    <KpopLOver />
                    <Drama />
                    <AnyVideos3 />
                    <AnyVideos4 />
                    <AnyVideos5 />
                    <DramaAnimasi />
                    <ThaiSeries />
                    <AnyVideos6 />
                    <FunEntertaining />
                    <DramaIndo />
                    <Latest />
                </ArticleContent>
            </ContainerApp>
        </div>
    )
}

export default VideosPage
