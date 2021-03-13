import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import HeadLineParenting from './Parenting/HeadLineParenting'
import LatestParenting from './Parenting/LatestParenting'

function ParentingPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <HeadLineParenting />
                    <LatestParenting />
                </ArticleContent>
                <Footer />
            </ContainerApp>
        </div>
    )
}

export default ParentingPage
