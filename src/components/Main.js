import React from 'react'
// Import Styled Componens
import styled from 'styled-components'
// Import Components
import Header from './Header'
import ListCategory from './ListCategory'
import HeadLine from './HeadLine'
import Article from './Article'

function Main() {
    return (
        <ContainerApp>
            <ContainerWrapper>
                <Header />
            </ContainerWrapper>
            <ContentContainer>
                <ListCategory />
            </ContentContainer>
            <HeadLineContent>
                <HeadLine />
            </HeadLineContent>
            <ArticleContent>
                <Article />
            </ArticleContent>
        </ContainerApp>
    )
}

export default Main

const ContainerApp = styled.div`
    width: 768px;
    margin: 0 auto;
    box-sizing: border-box;
    height: 100%;
`
const ContainerWrapper = styled.div`
    background-color: #fff;
    height: 100%;
    overflow: hidden;
    box-shadow: 0px 0.5px rgba(0,0,0,.5);
`
const ContentContainer = styled.div`
    padding: 24px 32px;
    background: rgba(0,0,0,.02);
`

const HeadLineContent = styled.div`
`
const ArticleContent = styled.div`
    background: rgba(0,0,0,.02);
    height: 100%;
    padding-top: 20px;
`

export { ContainerApp, ContainerWrapper, ContentContainer, ArticleContent };