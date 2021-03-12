import React from 'react'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import Scitech from './SciTech/Scitech'
import Latest from './SciTech/Latest'

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
            </ContainerApp>
        </div>
    )
}

export default SciTechPage
