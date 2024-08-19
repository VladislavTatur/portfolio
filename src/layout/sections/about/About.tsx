import {Container} from '../../../components/container/Container'
import styled from 'styled-components'
import photo from '../../../assets/images/man.jpg'
import {Icon} from '../../../components/icon/Icon'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Quote} from '../../../components/quote/Quote'

export const About = () => {
  return (
    <StyledAbout>
      <Container height={'650px'}>
        <FlexWrapper>
          <StyledPhotoMan src={photo} alt=""/>
          <FlexWrapper direction="column">
            <Quote
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta finibus magna, a bibendum mi malesuada sed. Praesent felis lectus, fermentum eu condimentum nec, semper malesuada lorem. Curabitur rhoncus bibendum congue. Nulla rutrum tempor dictum. Morbi sit amet efficitur purus, vel varius ex. Nam convallis tristique gravida. Aenean non massa sed neque sodales congue et in leo. Fusce sit amet lectus viverra, pharetra augue in, pulvinar odio.'}/>
            <FlexWrapper>
              <Icon iconId={'arrow-right'} viewBox={'0 0 40 40'} width={40} height={40} transform={"180"}/>
              <Icon iconId={'arrow-right'} width={40} height={40} viewBox={"0 0 40 40"}/>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper direction="column">
            <Statistics text="Satisfaction Clients" data="100 %"/>
            <Statistics text="Clients On Worldwide" data="+ 80"/>
            <Statistics text="Projects Done" data="743"/>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledAbout>
  )
}

const StyledAbout = styled.div`
    width: 100%;
    background-color: rgba(34, 42, 54, 0.95);
;
`
const StyledPhotoMan = styled.img`
    width: 389px;
    height: 391px;
    object-fit: cover;
`

type StatisticsProps = {
  text: string
  data: number | string
}

export const Statistics = (props: StatisticsProps) => {
  return (
    <StyledStatistics>
      {props.text} <br/>
      <StyledStatisticsNumber>
        {props.data}
      </StyledStatisticsNumber>
    </StyledStatistics>
  )
}

const StyledStatistics = styled.p`

`
const StyledStatisticsNumber = styled.span`

`