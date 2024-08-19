import styled from 'styled-components'
import {Icon} from '../icon/Icon'

type QuoteProps = {
  description: string
}

export const Quote = (props: QuoteProps) => {
  return (
    <QuoteMan>
      <Icon iconId="quote" width={47} height={77} viewBox={"0 0 47 77"}/>
      {props.description}
    </QuoteMan>
  )
}

const QuoteMan = styled.blockquote`

`