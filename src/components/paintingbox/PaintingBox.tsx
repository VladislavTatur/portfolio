import styled from 'styled-components'
import {theme} from '../../styles/Theme'
import {FlexContainer} from '../container/Container'
import {Icon} from '../icon/Icon'
import {ShortText} from '../Text/ShortText'


type PaintingBoxProps = {
  text: string
  iconId: string
}

export const PaintingBox = ({text, iconId}: PaintingBoxProps) => {
  return (
    <Box>
      <FlexContainer direction="column" justify={'flex-end'} alignI={'start'} minHeight="100%"
                     padding="0 0 35px 30px" width="136px">
        <Icon iconId={iconId} height={30} width={30} viewBox="0 0 30 30" margin={"0 0 10px 0"}/>
        <ShortText fontWeight={700} textAlign="left">{text}</ShortText>
      </FlexContainer>
    </Box>
  )
}


const Box = styled.div`
    width: 288px;
    min-height: 295px;
    background-color: ${theme.colors.quote};
    stroke: ${theme.colors.secondaryBg};
    color: ${theme.colors.secondaryBg};
    transition: .2s;
    flex-grow: 1;

    &:hover {
        background-color: ${theme.colors.hover};
        color: ${theme.colors.font};
        stroke: ${theme.colors.font};
    }
`