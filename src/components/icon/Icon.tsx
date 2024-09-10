import iconsSprite from '../../assets/images/icons/icons-sprite.svg'

type IconPropsType = {
  iconId: string,
  width?: number | string,
  height?: number | string,
  viewBox?: string,
  transform?: string,
  margin?: string,
  className?: string,
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg className={props.className} width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 50 50'} fill="none"
         xmlns="http://www.w3.org/2000/svg" style={{transform: `rotate(${props.transform}deg)`, margin: props.margin}}>
      <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
    </svg>
  )
}