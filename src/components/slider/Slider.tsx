import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import styled from 'styled-components'
import {theme} from '../../styles/Theme'
import {FlexContainer} from '../container/Container'
import {FlexWrapper} from '../FlexWrapper'
import photo1 from './../../assets/images/man.jpg'
import photo2 from './../../assets/images/photo2.jpg'
import photo3 from './../../assets/images/photo3.jpg'
import {Link} from '../Link'

type SliderPropsType = {
  photo: string
  altForPhoto?: string
  comment: string
}

const Slide = (props: SliderPropsType) => {
  return (
    <FlexContainer justify={'center'} wrap={'wrap'}>
      <Photo src={props.photo} alt={props.altForPhoto || 'pgoto man'}/>
      <FlexWrapper direction={'column'} flex={1}>
        <FlexWrapper>
          <Comment>{props.comment}
          </Comment>
        </FlexWrapper>
      </FlexWrapper>
    </FlexContainer>
  )
}


const items = [
  <Slide photo={photo1} comment={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi blanditiis laborum minima nulla? Commodi doloremque est quaerat ratione vel?"} altForPhoto={"photo comments"}/>,
  <Slide photo={photo2} comment={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi blanditiis laborum minima nulla? Commodi doloremque est quaerat ratione vel?"} altForPhoto={"photo comments"}/>,
  <Slide photo={photo3} comment={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi blanditiis laborum minima nulla? Commodi doloremque est quaerat ratione vel?"} altForPhoto={"photo comments"}/>
]

export const Slider = () => (
  <StyledSlider>
    <AliceCarousel
      mouseTracking
      items={items}
    />
  </StyledSlider>

)


// import styled from 'styled-components'
// import photo from '../../assets/images/man.jpg'
// import {Icon} from '../icon/Icon'
// import {Link} from '../Link'
// import {theme} from '../../styles/Theme'
// import {FlexWrapper} from '../FlexWrapper'
// import {FlexContainer} from '../container/Container'
//
// export const Slider = () => {
//   return (
//     <StyledSlide>
//       <FlexContainer justify={'center'}  wrap={'wrap'}>
//         <Photo src={photo} alt="pgoto man"/>
//         <FlexWrapper direction={'column'} flex={1}>
//           <FlexWrapper flex={1}>
//             <Comment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut, cupiditate delectus et eum ex
//               fugit
//               ipsum libero nostrum possimus temporibus, ullam. A, aperiam beatae corporis iusto molestias necessitatibus
//               nemo nesciunt nisi optio perferendis perspiciatis quae quaerat quidem similique voluptatem! Aut iure
//               libero
//               sint. Adipisci aut, cum cupiditate deserunt ex exercitationem facilis nesciunt obcaecati provident vel!
//               Architecto cupiditate delectus dolor explicabo harum incidunt, ipsam itaque nam nostrum numquam optio quo
//               sapiente sit. Aspernatur at atque deleniti dolorum est illum labore minima nam necessitatibus nemo nihil,
//               obcaecati odit officia quasi qui, rem reprehenderit saepe tempora. Animi architecto exercitationem maiores
//               molestias odit perspiciatis porro voluptates. Amet aspernatur atque esse quaerat rem. Beatae consectetur
//               esse
//               excepturi explicabo id magni nesciunt perferendis quas tempore! At dignissimos dolore eius expedita
//               laborum
//               magni modi, officia optio quaerat vel! Atque ipsa officiis omnis perspiciatis placeat, quo tenetur? Ab
//               architecto enim harum in labore nobis non quod temporibus!
//             </Comment>
//           </FlexWrapper>
//           <FlexWrapper>
//             <Link>
//               <Icon iconId={'arrow-right'} transform="180" width={40} height={40} viewBox="0 0 40 40"/>
//             </Link>
//             <Link>
//               <Icon iconId={'arrow-right'} width={40} height={40} viewBox="0 0 40 40"/>
//             </Link>
//           </FlexWrapper>
//         </FlexWrapper>
//       </FlexContainer>
//     </StyledSlide>
//   )
// }
//
const StyledSlider = styled.div`
    margin-right: 15px;
    max-width: 894px;
    width: 100%;
    outline: 1px solid red;


    ${Link} {
        color: ${theme.colors.accent};

        &:hover {
            transform: scale(1.2);
        }
    }

    @media screen and (max-width: 1085px) {
        margin-right: 0;
    }

`

const Photo = styled.img`
    object-fit: cover;
    width: 390px;
    height: 390px;
    padding-right: 15px;
    flex: 1;
    aspect-ratio: 16 / 9;

    @media ${theme.media.mobile} {
        width: 335px;
        height: 375px;
        flex-grow: 0;
    }

    @media screen and (max-width: 920px) {
        margin-bottom: 35px;

    }
`

const Comment = styled.p`
    width: 490px;
    height: 310px;
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1;
    padding-top: 45px;
    position: relative;

    &::before {
        content: open-quote;
        position: absolute;
        font-size: 100px;
        top: 25px;
        left: 20px;
        font-family: 'Playfair Display';
    }

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.accent};
    }

    &::-webkit-scrollbar-track {
        background-color: ${theme.colors.textSelection};
    }

    @media ${theme.media.mobile} {
        margin-top: 60px;
        margin-bottom: 30px;
        width: 335px;
        height: 432px;
    }
`
