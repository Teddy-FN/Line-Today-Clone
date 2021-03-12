import React from 'react'
import { ContainerApp, ContainerWrapper, ArticleContent } from '../Main'
import Header from '../Header'

// Import Components 
import HeadLineBiz from './Biz/HeadLineBiz';
import BizzToday from './Biz/BizzToday';
import BizzLatest from './Biz/BizzLatest';

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
            </ContainerApp>
        </div>
    )
}

export default BizPage
