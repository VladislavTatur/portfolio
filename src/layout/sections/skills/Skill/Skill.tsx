import {Icon} from '../../../../components/icon/Icon'
import styled from 'styled-components'
import {SkillsProps} from '../Skills'

type SkillPropsType = {
  skills: Array<SkillsProps>
}


export const Skill = (props: SkillPropsType) => {

  const mySkill = props.skills.map((s) => {
    return (
        <Icon className="skill" iconId={s.iconId} width={'100'} height={'100'} viewBox="0 0 100 100"/>
    )
  })

  return (
    <StyledSkill>
      {mySkill}
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    //&::before {
    //    content: "html";
    //    top: 10px;
    //    left: 0;
    //    background-color: red;
    //    width: 30px;
    //    height: 30px;
    //    display: none;
    //    position: absolute;
    //    
    //}
    //&:hover::before {
    //    display: block;
    //}
    
    .skill {
        transition: .5s;
    }
    
    .skill:hover {
        opacity: 0;
    }
`