import {Container, FlexContainer} from '../../../components/container/Container'
import styled from 'styled-components'
import {PaintingBox} from '../../../components/paintingbox/PaintingBox'
import React from 'react'
import {Icon} from '../../../components/icon/Icon'
import {ShortText} from '../../../components/Text/ShortText'
import {Headlines1} from '../../../components/headlines/Headlines1'
import {InformationText} from '../../../components/Text/InformationText'

export const Specialization = () => {
  return (
    <StyledSpecialization>

      <Container>
        <FlexContainer >
          <InformationText fontFamily="Playfair Display" maxWidth={207} text={"Years Experience Working"} data={"4 +"} lineHeight={180} sizeText={"2rem"} sizeData={"5rem"} reverseOrder={true}/>
        <FlexContainer padding={"0 0 0 96px"} maxWidth="990px" direction={'column'} alignI="center" justify="center" textAlign="center" >
          <Headlines1 align="justify" title="Developer and Designer, specialized in UI/UX and Web Developer" size={40}
                      LHeight={180}/>
          <FlexContainer gap={15} padding={"20px 0 0 0"} wrap="wrap">
            <PaintingBox width={288} height={295} backgroundColor="rgba(103, 108, 219, 1)">
              <FlexContainer direction="column" justify={'flex-end'} alignI={'start'} minHeight="100%" padding="0 0 35px 30px">
              <Icon iconId="computer" height={30} width={30} viewBox="0 0 30 30"/>
              <ShortText padding={"10px 0 0 0"} maxWidth={"50%"} textAlign="left">Front End Developer</ShortText>
              </FlexContainer>
            </PaintingBox>
            <PaintingBox width={288} height={295} backgroundColor="rgba(196, 196, 196, 1)">
              <FlexContainer direction="column" justify={'flex-end'} alignI={'start'} minHeight="100%" padding="0 0 35px 30px">
              <Icon iconId="paint" height={30} width={30} viewBox="0 0 30 30"/>
              <ShortText padding={"10px 0 0 0"} maxWidth={"50%"} textAlign="left">UI/UX Designer</ShortText>
            </FlexContainer>
            </PaintingBox>
            <PaintingBox width={288} height={295} backgroundColor="rgba(196, 196, 196, 1)">
              <FlexContainer direction="column" justify={'flex-end'} alignI={'start'} minHeight="100%" padding="0 0 35px 30px">

              <Icon iconId="lightning" height={30} width={30} viewBox="0 0 30 30"/>
              <ShortText padding={"10px 0 0 0"} maxWidth={"50%"} textAlign="left">Branding Designer</ShortText>
            </FlexContainer>
          </PaintingBox>
          </FlexContainer>
        </FlexContainer>
        </FlexContainer>
      </Container>
    </StyledSpecialization>
  )
}

const StyledSpecialization = styled.section`
    width: 100%;
    
`

