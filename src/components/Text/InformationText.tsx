import styled from 'styled-components'

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
    <StyledInformationText maxHeight={props.maxHeight} lineHeight={props.lineHeight} maxWidth={props.maxWidth} fontFamily={props.fontFamily}>
      {props.reverseOrder ? (
      <>
        <StyledText sizeText={props.sizeData}>
          {props.data}<br/>
        </StyledText>
        <DataText sizeData={props.sizeText}>
          {props.text}
        </DataText>
      </>
      ) : (
      <>
        <StyledText sizeText={props.sizeText}>
          {props.text}<br/>
        </StyledText>
        <DataText sizeData={props.sizeData}>
          {props.data}
        </DataText>
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
    font-family: ${props => props.fontFamily || "Playfair Display"};
`

type StyledTextProps = {
  sizeText: string
}

const StyledText = styled.h4<StyledTextProps>`
    font-size: ${props => props.sizeText};
`

type DataTextProps = {
  sizeData: string
}

const DataText = styled.span<DataTextProps>`
    font-size: ${props => props.sizeData};
    color: #676cdb;
`
