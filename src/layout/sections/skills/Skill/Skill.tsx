import {Icon} from '../../../../components/icon/Icon'
import styled from 'styled-components'

type SkillPropsType = {
  iconId: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} width={'100'} height={'100'} viewBox="0 0 100 100"/>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`

`