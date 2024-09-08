import styled from 'styled-components'
import {Text} from '../../../components/Text/Text'
import {Link} from '../../../components/Link'
import {Button} from '../../../components/button/Button'
import {theme} from '../../../styles/Theme'
import {FlexContainer} from '../../../components/container/Container'
import {useState} from 'react'

type WorkProps = {
  src: string
  alt?: string
  headline?: string
  text?: string
  isFilter?: boolean
}

export const Work = (props: WorkProps) => {
  const [isBlurred, setIsBlurred] = useState(false)
  return (
    <StyledWork>
      <Description>
          <Image isFilter={isBlurred} src={props.src} alt={props.alt} className="work-img"/>
        <Headlines3>{props.headline}</Headlines3>
        <Text>{props.text}</Text>
      </Description>
      <FlexContainer padding="0 0 23px 0" justify="space-evenly">
        <Link href={'#'}><Button onMouseLeave={() => setIsBlurred(false)} onMouseEnter={() => setIsBlurred(true)}>View Live</Button></Link>
        <Link href={'#'}><Button onMouseLeave={() => setIsBlurred(false)} onMouseEnter={() => setIsBlurred(true)} background="trasparent" border={`3px solid ${theme.colors.accent}`}>Github Repo</Button></Link>
      </FlexContainer>
    </StyledWork>
  )
}



const StyledWork = styled.div`
    border-radius: 8px;
    background-color: ${theme.colors.primaryBg};
    box-shadow: 0 4px 4px 0 ${theme.colors.quote};
    flex-grow: 1;
    width: 344px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    ${Link} {
        margin-bottom: 25px;

        & + ${Link} {
            margin-left: 18px;
        }
    }

    ${Button} {
        width: 145px;
        height: 45px;
    }
`

const Image = styled.img<{isFilter: boolean}>`
    padding-top: 16px;
    border-radius: 24px;
    margin-bottom: 16px;
    transition: .4s;
    filter: ${props => props.isFilter? 'hue-rotate(90deg)' : 'none'}
`

const Headlines3 = styled.h3`
    font-size: 24px;
    color: ${theme.colors.accent};
    margin-bottom: 5px;
    line-height: 120%;
    font-weight: 700;
    font-family: "Playfair Display", sans-serif;
    text-transform: uppercase;
`

const Description = styled.div`
    padding: 16px 15px 20px;
    display: flex;
    flex-direction: column;
`