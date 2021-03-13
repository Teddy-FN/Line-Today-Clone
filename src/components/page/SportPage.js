import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import HeadLineSport from './Sport/HeadLineSport'
import Latest from './Sport/Latest'
import MostCommented from './Sport/MostCommented'
import SportUpdate from './Sport/SportUpdate'

function SportPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <SportUpdate />
                    <HeadLineSport />
                    <Latest />
                    <MostCommented />
                </ArticleContent>
                <Footer />
            </ContainerApp>
        </div>
    )
}

export default SportPage
