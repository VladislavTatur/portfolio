import styled from 'styled-components'
import {Slider} from '../../../components/slider/Slider'
import {Container, FlexContainer} from '../../../components/container/Container'
import {FlexWrapper} from '../../../components/FlexWrapper'


export const Statistics = () => {
  return (
    <StyledStatistics>
      <Container>
        <FlexWrapper>
          <Slider/>
          <FlexContainer direction={'column'} minWidth="194px">
            <CustomerStatistics text="Satisfaction Clients" data="100 %"/>
            <CustomerStatistics text="Clients On Worldwide" data="+ 80"/>
            <CustomerStatistics text="Projects Done" data="743"/>
          </FlexContainer>
        </FlexWrapper>


      </Container>
    </StyledStatistics>
  )
}

const StyledStatistics = styled.section`
    background-color: rgb(45, 53, 63);
`

type CustomerStatisticsProps = {
  text: string
  data: string
}

const CustomerStatistics = ({text, data}: CustomerStatisticsProps) => {
  return (
    <StyledCustomerStatistics>
      <StatisticsText>
        {text}<br/>
      </StatisticsText>

      <DataText>
        {data}
      </DataText>
    </StyledCustomerStatistics>
  )
}

const StatisticsText = styled.h3`
    font-size: 1.5rem;
    line-height: 120%;
`

const DataText = styled.span`
    font-size: 2.5rem;
    line-height: 120%;

`

const StyledCustomerStatistics = styled.div`
    line-height: 120%;
`