import styled from 'styled-components'
import {Work} from './Work'
import {Container} from '../../../components/container/Container'
import {Text} from '../../../components/Text/Text'
import {theme} from '../../../styles/Theme'
import picture1 from './../../../assets/images/works/Rectangle 16.jpg'
import picture2 from './../../../assets/images/works/Rectangle 17.jpg'
import picture3 from './../../../assets/images/works/Rectangle 18.jpg'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {font} from '../../../styles/Common'

export const Works = () => {
  return (
    <StyledWorks id="works">
      <Container>
        <FlexWrapper direction={'column'} wrap={'wrap'}>
          <Headline2>My Works</Headline2>
          <Text color={`${theme.colors.font}`} fontWeight={500}>I have worked on many projects over the course of being a
            Web Developer, here are a few of my live,
            real-world projects</Text>
          <FlexWrapper justify="space-between" wrap={'wrap'} maxWidth="100%" gap={17}>
            <Work src={picture1} text="A live Geolocation app for finding tweets and twitter users around you."
                  headline="twinder"/>
            <Work src={picture2} text="A video streaming app with live Geolocation, for streaming events."
                  headline="livents"/>
            <Work src={picture3} text="Mobile app for booking instant pickup & dropoff accross major cities."
                  headline="moove"/>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledWorks>
  )
}

const StyledWorks = styled.section`
 ${Container}{
     @media screen and (max-width: 1250px) {
         padding: 0 20px 100px;
     }
 } 
`

const Headline2 = styled.h2`
    ${font({family: "'Playfair Display', sans-serif", weight: 700, lineHeight: 120, Fmin: 32, Fmax: 50, color: `${theme.colors.accent}`})}

`