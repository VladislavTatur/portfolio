import styled from 'styled-components'
import {Slider} from '../../../components/slider/Slider'
import {Container, FlexContainer} from '../../../components/container/Container'
import {FlexWrapper} from '../../../components/FlexWrapper'
import React from 'react'
import {InformationText} from '../../../components/Text/InformationText'


export const Statistics = () => {
  return (
    <StyledStatistics>
      <Container>
        <FlexWrapper>
          <Slider/>
          <FlexContainer direction={'column'}>
            <InformationText sizeText="1.5rem" sizeData="2.5rem" lineHeight={120} text="Satisfaction Clients" data="100 %"/>
            <InformationText sizeText="1.5rem" sizeData="2.5rem" lineHeight={120} text="Clients On Worldwide" data="+ 80"/>
            <InformationText sizeText="1.5rem" sizeData="2.5rem" lineHeight={120} text="Projects Done" data="743"/>
          </FlexContainer>
        </FlexWrapper>


      </Container>
    </StyledStatistics>
  )
}

const StyledStatistics = styled.section`
    background-color: rgb(45, 53, 63);
`

