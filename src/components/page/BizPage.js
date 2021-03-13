import React from 'react'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import Header from '../Header'

// Import Components 
import HeadLineBiz from './Biz/HeadLineBiz';
import BizzToday from './Biz/BizzToday';
import BizzLatest from './Biz/BizzLatest';
import Footer from '../Footer';

function BizPage() {
    return (
        <div>
            <ContainerApp>
                <ContainerWrapper>
                    <Header />
                </ContainerWrapper>
                <ArticleContent>
                    <HeadLineBiz />
                    <BizzToday />
                    <BizzLatest />
                </ArticleContent>
                <Footer />
            </ContainerApp>
        </div>
    )
}

export default BizPage
