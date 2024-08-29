import styled from 'styled-components'
import {Work} from './Work'
import {Container} from '../../../components/container/Container'
import {Headlines2} from '../../../components/headlines/Headlines2'
import {Text} from '../../../components/Text/Text'
import {theme} from '../../../styles/Theme'
import picture1 from './../../../assets/images/works/Rectangle 16.jpg'
import picture2 from './../../../assets/images/works/Rectangle 17.jpg'
import picture3 from './../../../assets/images/works/Rectangle 18.jpg'
import {FlexWrapper} from '../../../components/FlexWrapper'

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <FlexWrapper direction={'column'} wrap={'wrap'}>
          <Headlines2 color={`${theme.colors.accent}`} size={45}>My Works</Headlines2>
          <Text color={`${theme.colors.font}`} fontWeight={500}>I have worked on many projects over the course of being a
            Web Developer, here are a few of my live,
            real-world projects</Text>
          <FlexWrapper justify="space-between" wrap={'wrap'}>
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
`