import React from 'react'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import CrimeStory from './Trendings/CrimeStory'
import HeadLineTrendings from './Trendings/HeadLineTrendings'
import TrendingsHobbies from './Trendings/TrendingsHobbies'

function TrendingsPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <TrendingsHobbies />
                    <CrimeStory />
                    <HeadLineTrendings />
                </ArticleContent>
            </ContainerApp>
        </div>
    )
}

export default TrendingsPage
