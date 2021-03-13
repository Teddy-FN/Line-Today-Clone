import React from 'react'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import DiyNews from './Regional/DiyNews'
import HeadLineRegional from './Regional/HeadLineRegional'
import JabarNews from './Regional/JabarNews'
import JatimNews from './Regional/JatimNews'
import SumselNews from './Regional/SumselNews'
import Latest from './Regional/Latest'
import RegionalNews from './Regional/RegionalNews'
import Footer from '../Footer'

function RegionalPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <HeadLineRegional />
                    <RegionalNews />
                    <JatimNews />
                    <DiyNews />
                    <JabarNews />
                    <SumselNews />
                    <Latest />
                </ArticleContent>
                <Footer />
            </ContainerApp>
        </div>
    )
}

export default RegionalPage
