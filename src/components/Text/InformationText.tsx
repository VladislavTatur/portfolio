import styled from 'styled-components'
import {theme} from '../../styles/Theme'

type InformationTextProps = {
  text: string
  data: string
  lineHeight: number
  sizeText: string
  sizeData: string
  reverseOrder?: boolean;
  maxWidth?: number
  maxHeight?: number
  fontFamily?: string
}

export const InformationText = (props: InformationTextProps) => {
  return (
    <StyledInformationText maxHeight={props.maxHeight} lineHeight={props.lineHeight} maxWidth={props.maxWidth}
                           fontFamily={props.fontFamily}>
      {props.reverseOrder ? (
        <>
          <StyledDataText sizeData={props.sizeData}>
            {props.data}<br/>
          </StyledDataText>
          <StyledText sizeText={props.sizeText}>
            {props.text}
          </StyledText>


        </>
      ) : (
        <>
          <StyledText sizeText={props.sizeText}>
            {props.text}<br/>
          </StyledText>
          <StyledDataText sizeData={props.sizeData}>
            {props.data}
          </StyledDataText>
        </>
      )}
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
    line-height: 180%;
`

type StyledDataTextProps = {
  sizeData: string
}

const StyledDataText = styled.span<StyledDataTextProps>`
    font-size: ${props => props.sizeData};
    color: ${theme.colors.accent};
    line-height: 180%;

`
