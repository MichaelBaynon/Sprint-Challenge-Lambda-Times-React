import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const StyledTopBar = styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

const StyledContainer = styled.div`
width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`

const StyledLeftContainer = styled.div`
display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const LeftContainerSpan = styled.span`
cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const ContainerCenter = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const ContainerCenterSpan = styled.span`
cursor: pointer;
  margin-right: 5%;
  text-decoration: underline;
`

const ContainerRight = styled.div`
display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const ContainerRightSpan = styled.div`
cursor: pointer;
`


const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledContainer>
        <StyledLeftContainer>
          <LeftContainerSpan>TOPICS</LeftContainerSpan><LeftContainerSpan>SEARCH</LeftContainerSpan>
        </StyledLeftContainer>
        <ContainerCenter>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan><ContainerCenterSpan>BROWNBAG</ContainerCenterSpan><ContainerCenterSpan>RANDOM</ContainerCenterSpan><ContainerCenterSpan>MUSIC</ContainerCenterSpan><ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </ContainerRight>
      </StyledContainer>
    </StyledTopBar>
  )
}

export default TopBar;