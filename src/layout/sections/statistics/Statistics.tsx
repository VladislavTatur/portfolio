import styled from 'styled-components'
import {Slider} from '../../../components/slider/Slider'
import {Container, FlexContainer} from '../../../components/container/Container'
import React from 'react'
import {InformationText} from '../../../components/Text/InformationText'
import {theme} from '../../../styles/Theme'
import {FlexWrapper} from '../../../components/FlexWrapper'


export const Statistics = () => {
  return (
    <StyledStatistics id="reviews">
      <Container>
        <FlexWrapper wrap={"wrap"} justify="space-around">
          <FlexContainer>
            <Slider/>
          </FlexContainer>
          <FlexContainer direction={"column"} maxWidth={"160px"}>
            <WrapperText>
              <InformationText fontFamily="Playfair Display" sizeText="1.5rem" sizeData="2.5rem" lineHeight={200}
                               text="Satisfaction Clients" data="100 %"/>
            </WrapperText>
            <WrapperText>
              <InformationText fontFamily="Playfair Display" sizeText="1.5rem" sizeData="2.5rem" lineHeight={200}
                               text="Clients On Worldwide" data="+ 80"/>
            </WrapperText>

            <WrapperText>
              <InformationText fontFamily="Playfair Display" sizeText="1.5rem" sizeData="2.5rem" lineHeight={200}
                               text="Projects Done" data="743"/>
            </WrapperText>

          </FlexContainer>
        </FlexWrapper>
      </Container>
    </StyledStatistics>
  )
}
// export const Statistics = () => {
//   return (
//     <StyledStatistics id="reviews">
//
//             <Slider/>
//
//     </StyledStatistics>
//   )
// }

const WrapperText = styled.div``

const StyledStatistics = styled.section`
    background-color: ${theme.colors.primaryBg};
    
${FlexContainer}:nth-child(2) {
    margin-top: 45px;
    
    @media screen and (max-width: 1111px) {
        flex-direction: row;
        justify-content: center;
    }
    @media ${theme.media.mobile} {
        flex-direction: column;
        justify-content: flex-start;
    }
    ${WrapperText} {
        @media (max-width: 1111px) and (min-width: 576px) {
            & + ${WrapperText} {
                margin-left: 30px;
            }
        }
    }

    }

    ${Container} {

        @media screen and (max-width: 1210px) {
            padding: 20px 20px 40px;
        }
    }

    @media ${theme.media.tablet} {
        display: flex;
        justify-content: center;
    }
    
    ${FlexWrapper} {
        @media ${theme.media.mobile} {
            justify-content: flex-start;
        }
    }
`

