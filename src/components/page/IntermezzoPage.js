import React from 'react'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import Header from '../Header'

import HeadLineIntermezzo from './Intermezzo/HeadLineIntermezzo'
import NewsForYou from './Intermezzo/NewsForYou'
import VideoForYou from './Intermezzo/VideoForYou'
import IntermezzoNews from './Intermezzo/IntermezzoNews'
function IntermezzoPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <HeadLineIntermezzo />
                    <NewsForYou />
                    <VideoForYou />
                    <IntermezzoNews />
                </ArticleContent>
            </ContainerApp>
        </div>
    )
}

export default IntermezzoPage
