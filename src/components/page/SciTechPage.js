import React from 'react'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import Scitech from './SciTech/Scitech'
import Latest from './SciTech/Latest'
import Footer from '../Footer'

function SciTechPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <Scitech />
                    <Latest />
                </ArticleContent>
                <Footer />
            </ContainerApp>
        </div>
    )
}

export default SciTechPage
