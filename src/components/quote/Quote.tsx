import styled from 'styled-components'

type QuoteProps = {
  description: string
}

export const Quote = (props: QuoteProps) => {
  return (
    <QuoteMan>
      <QuotationMarks size={100}>“</QuotationMarks>
      {props.description}
    </QuoteMan>
  )
}

const QuoteMan = styled.blockquote`

`

type QuotationMarksProps = {
  size: number
}
const QuotationMarks = styled.span<QuotationMarksProps>`
font-size: ${props => props.size}px;
`