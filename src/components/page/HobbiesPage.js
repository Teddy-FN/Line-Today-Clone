import React from 'react'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import Header from '../Header'
import HeadLineHobbies from './Hobies/HeadLineHobbies'
import TrendingThisWeek from './Hobies/TrendingThisWeek'
import KoreanFood from './Hobies/KoreanFood'
import CookingBangking from './Hobies/CookingBangking'
import Reading from './Hobies/Reading'
import ArtCraft from './Hobies/ArtCraft'
import WorkOut from './Hobies/WorkOut'
import NewHobbies from './Hobies/NewHobbies'
import Footer from '../Footer'
function HobbiesPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <HeadLineHobbies />
                    <TrendingThisWeek />
                    <KoreanFood />
                    <CookingBangking />
                    <Reading />
                    <ArtCraft />
                    <WorkOut />
                    <NewHobbies />
                </ArticleContent>
                <Footer />
            </ContainerApp>
        </div>
    )
}

export default HobbiesPage
