import styled from 'styled-components'
import React from 'react'


type Headlines2State = {
  title: string | React.ReactNode
  size?: number
  font?: string
  LHeight?: number
  align?: string
  padding?: string
}

export const Headlines2 = ({title, LHeight, size, font, padding}: Headlines2State) => {
  return (
    <H2 size={size}
        font={font}
        LHeight={LHeight}
        padding={padding}
    >
      {title}
    </H2>
  )
}


const H2 = styled.h2<Omit<Headlines2State, 'title'>>`
    font-size: ${({size}) => size}px;
    font-family: ${props => props.font};
    line-height: ${props => props.LHeight}%;
    padding: ${props => props.padding};
`