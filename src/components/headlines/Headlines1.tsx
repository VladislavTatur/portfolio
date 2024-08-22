import styled from 'styled-components'

type Headlines1State = {
  title: string
  size: number
  font?: string
  LHeight: number
  align?: string
}

export const Headlines1 = (props: Headlines1State) => {
  return (
    <H1 size={props.size}
        font={props.font}
        LHeight={props.LHeight}
        title={'none'}>
      {props.title}
    </H1>
  )
}

const H1 = styled.h1<Headlines1State>`
    font-size: ${props => props.size}px;
    font-family: ${props => props.font};
    line-height: ${props => props.LHeight}%;
    font-size: 2rem;
`