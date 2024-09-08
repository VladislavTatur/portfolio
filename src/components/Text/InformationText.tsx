import styled from 'styled-components'
import {theme} from '../../styles/Theme'

type InformationTextProps = {
  text: string
  data: string
  lineHeight: number
  sizeText: string
  sizeData: string
  fontFamily?: string
}

export const InformationText = (props: InformationTextProps) => {
  return (
    <StyledInformationText lineHeight={props.lineHeight} fontFamily={props.fontFamily}>
        <StyledText sizeText={props.sizeText}>
          {props.text}<br/>
        </StyledText>
        <StyledDataText sizeData={props.sizeData}>
          {props.data}
        </StyledDataText>
    </StyledInformationText>
  )
}

type StyledCustomerStatisticsProps = {
  lineHeight: number
  maxWidth?: number
  padding?: string
  maxHeight?: number
  font?: string
  fontFamily?: string
}

const StyledInformationText = styled.div<StyledCustomerStatisticsProps>`
    line-height: ${props => props.lineHeight}%;
    max-width: ${props => props.maxWidth}px;
    max-height: ${props => props.maxHeight}px;
    padding: ${props => props.padding};
    font-size: ${props => props.font};
    font-family: ${props => props.fontFamily || 'Playfair Display'};
    font-weight: 700;
`


type StyledTextProps = {
  sizeText: string
}

const StyledText = styled.p<StyledTextProps>`
    font-size: ${props => props.sizeText};
`

type StyledDataTextProps = {
  sizeData: string
}

const StyledDataText = styled.span<StyledDataTextProps>`
    font-size: ${props => props.sizeData};
    color: ${theme.colors.accent};
`
