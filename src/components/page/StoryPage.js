import React from 'react'
import Header from '../Header'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import CerpenPekanIni from './Story/CerpenPekanIni'
import Tersesat from './Story/Tersesat'
import Pasar from './Story/Pasar'
import CerpenTerbaru from './Story/CerpenTerbaru'
import Hotel from './Story/Hotel'
import HororStory1 from './Story/HororStory1'
import HoroStory2 from './Story/HoroStory2'
import SeriStory from './Story/SeriStory'
import MysteryStory from './Story/MysteryStory'
import CeritaPilihan from './Story/CeritaPilihan'
import LineContest from './Story/LineContest'
import HororStory3 from './Story/HororStory3'
import HororStory4 from './Story/HoroStory4'
import HororStory5 from './Story/HororStory5'
import HororStory6 from './Story/HororStory6'
import DilanStory from './Story/DilanStory'
import JakartaHolic from './Story/JakartaHolic'
import HororStory7 from './Story/HororStory7'
import EksklusifStory1 from './Story/EksklusifStory1'
import EksklusifStory2 from './Story/EksklusifStory2'
import EksklusifStory3 from './Story/EksklusifStory3'
import EksklusifStory4 from './Story/EksklusifStory4'

function StoryPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <CerpenPekanIni />
                    <Tersesat />
                    <Pasar />
                    <CerpenTerbaru />
                    <Hotel />
                    <HororStory1 />
                    <HoroStory2 />
                    <SeriStory />
                    <MysteryStory />
                    <CeritaPilihan />
                    <LineContest />
                    <HororStory3 />
                    <HororStory4 />
                    <HororStory5 />
                    <HororStory6 />
                    <DilanStory />
                    <JakartaHolic />
                    <HororStory7 />
                    <EksklusifStory1 />
                    <EksklusifStory2 />
                    <EksklusifStory3 />
                    <EksklusifStory4 />
                </ArticleContent>
            </ContainerApp>
        </div>
    )
}
export default StoryPage
