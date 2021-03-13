import React from 'react'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import Header from '../Header'

// Import Page
import HeadLineCampus from './Campus/HeadLineCampus'
import Footer from '../Footer'

function CampusPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <HeadLineCampus />
                </ArticleContent>
                <Footer />
            </ContainerApp>
        </div>
    )
}

export default CampusPage
