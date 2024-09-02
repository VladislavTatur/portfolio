import styled from 'styled-components'
import {Text} from '../../../components/Text/Text'
import {Link} from '../../../components/Link'
import {Button} from '../../../components/button/Button'
import {theme} from '../../../styles/Theme'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {FlexContainer} from '../../../components/container/Container'

type WorkProps = {
  src: string
  alt?: string
  headline?: string
  text?: string
}

export const Work = (props: WorkProps) => {
  return (
    <StyledWork>
      <Description>
        <Image src={props.src} alt={props.alt}/>
        <Headlines3>{props.headline}</Headlines3>
        <Text>{props.text}</Text>
      </Description>
      <FlexContainer padding="0 0 23px 0" justify="space-evenly">
        <Link href={'#'}><Button>View Live</Button></Link>
        <Link href={'#'}><Button background="trasparent" border={`3px solid ${theme.colors.accent}`}>Github Repo</Button></Link>
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
        //margin-bottom: 25px;

        & + ${Link} {
            margin-left: 18px;
        }
    }

    ${Button} {
        width: 145px;
        height: 45px;
    }

`

const Image = styled.img`
    padding-top: 16px;
    border-radius: 24px;
    margin-bottom: 16px;
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