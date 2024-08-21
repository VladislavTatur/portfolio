import styled from 'styled-components'
import photo from '../../assets/images/man.jpg'
import {Icon} from '../icon/Icon'
import {FlexWrapper} from '../FlexWrapper'

export const Slider = () => {
  return (
    <StyledSlider>
      <Slide>
        <FlexWrapper>
          <Photo src={photo} alt="photo of the commentator"/>
          <FlexWrapper direction={'column'}>
            <QuoteComponent/>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
              mattis
              tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
              sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
              litora
              torquent
            </Text>
            <FlexWrapper>
              <Icon iconId={'arrow-right'} transform="180" width={40} height={40} viewBox="0 0 40 40"/>
              <Icon iconId={'arrow-right'} width={40} height={40} viewBox="0 0 40 40"/>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Slide>
    </StyledSlider>
  )
}


const StyledSlider = styled.div`
`


const Slide = styled.div`
    padding: 108px 109px 149px 0;
`

const Photo = styled.img`
    object-fit: cover;
    width: 389px;
    height: 391px;
`

const Text = styled.p`
padding: 10px 109px 20px 15px;
`
const Quote = styled.span`
  font-size: 50px;
  color: gray;
`;

const QuoteComponent = () => {
  return (
    <Quote>
      &#8220;
    </Quote>
  );
}