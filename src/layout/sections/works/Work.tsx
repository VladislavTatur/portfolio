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
      <FlexWrapper justify={'center'} wrap="wrap">
        <Image src={props.src} alt={props.alt}/>
      </FlexWrapper>
      <Description>
        <Headlines3>{props.headline}</Headlines3>
        <Text>{props.text}</Text>
          <Link href={'#'}><Button>View Live</Button></Link>
          <Link href={'#'}><Button background="trasparent">Github Repo</Button></Link>
      </Description>

      <FlexContainer justify="space-around">

      </FlexContainer>

    </StyledWork>

  )
}

const StyledWork = styled.div`
    border-radius: 8px;
    background-color: ${theme.colors.primaryBg};
    box-shadow: 0 4px 4px 0 ${theme.colors.quote};
    max-width: 380px;
    width: 100%;
    margin-bottom: 20px;

    ${Link} {
        margin-bottom: 25px;
    }

    ${Button} {
        width: 145px;
        height: 45px;
    }

    ${Link} {
        & + ${Link} {
            margin-left: 18px;
        }
    }

`

const Image = styled.img`
    padding-top: 16px;
    border-radius: 24px;
`

const Headlines3 = styled.h3`
    font-size: 24px;
    color: ${theme.colors.accent};
    margin: 5px 0 24px;
    line-height: 120%;
    font-weight: 700;
    font-family: "Playfair Display", sans-serif;
    text-transform: uppercase;
`

const Description = styled.div`
    padding: 16px 15px 20px;
`