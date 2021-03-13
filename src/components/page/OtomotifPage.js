import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import ArticleOtomotifPage from './Otomotif/ArticleOtomotifPage'

import HeadLineOtomotif from './Otomotif/HeadLineOtomotif'
import LatestOtomotif from './Otomotif/LatestOtomotif'

function OtomotifPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <HeadLineOtomotif />
                    <ArticleOtomotifPage />
                    <LatestOtomotif />
                </ArticleContent>
                <Footer />
            </ContainerApp>
        </div>
    )
}

export default OtomotifPage
