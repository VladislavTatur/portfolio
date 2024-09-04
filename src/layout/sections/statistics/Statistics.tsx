import styled from 'styled-components'
import {Slider} from '../../../components/slider/Slider'
import {Container, FlexContainer} from '../../../components/container/Container'
import {FlexWrapper} from '../../../components/FlexWrapper'
import React from 'react'
import {InformationText} from '../../../components/Text/InformationText'
import {theme} from '../../../styles/Theme'


export const Statistics = () => {
  return (
    <StyledStatistics id="reviews">
      <Container>
          <Slider/>
            <InformationText fontFamily="Playfair Display" sizeText="1.5rem" sizeData="2.5rem" lineHeight={200}
                             text="Satisfaction Clients" data="100 %"/>
            <InformationText fontFamily="Playfair Display" sizeText="1.5rem" sizeData="2.5rem" lineHeight={200}
                             text="Clients On Worldwide" data="+ 80"/>
            <InformationText fontFamily="Playfair Display" sizeText="1.5rem" sizeData="2.5rem" lineHeight={200}
                             text="Projects Done" data="743"/>
      </Container>
    </StyledStatistics>
  )
}

const StyledStatistics = styled.section`
    background-color: ${theme.colors.primaryBg};

    ${Container} {

        @media screen and (max-width: 1210px) {
            padding: 25px 20px 90px;
        }
    }

    @media ${theme.media.tablet} {
        display: flex;
        justify-content: center;
    }
`

