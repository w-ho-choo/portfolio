import { motion } from 'motion/react'
import styled from 'styled-components'

export const SkillBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0 3em;
  margin-top: 3em;

  @media all and (max-width: 768px) {
    flex-direction: column;
    gap: 2em;
  }
`

export const SkillList = styled(motion.ul)`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0 1em;

  & > li {
    text-align: center;
  }

  @media all and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

export const SkillListTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75em;

  margin-bottom: 1rem;

  & > span {
    display: block;
    width: 2.125em;
    height: 2.125em;
    & > svg {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & > p {
    font-size: 2em;
    font-weight: 800;
    color: #212325;
  }

  @media all and (max-width: 768px) {
    gap: 0.5em;

    margin-bottom: 0.5rem;

    & > span {
      width: 1.5em;
      height: 1.5em;
    }

    & > p {
      font-size: 1.5em;
    }
  }
`

export const SkillListStack = styled.p`
  font-size: 1.25em;
  font-weight: 600;
  color: #666;

  @media all and (max-width: 768px) {
    font-size: 1em;
  }
`

export const SkillListText = styled.div`
  width: 55%;
  & > p {
    font-size: 1.25em;
    font-weight: 400;
    color: #666;
  }

  @media all and (max-width: 768px) {
    width: 100%;
  }
`
