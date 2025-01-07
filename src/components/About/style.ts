import { motion } from 'motion/react'
import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: center;

  gap: 3em 0;
  margin-top: 3em;
`

export const AboutItem = styled(motion.div)`
  width: 33.33333%;
  display: flex;
  flex-direction: column;

  & > i {
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 0.5em;
    color: #212325;

    & > svg {
      font-size: 2em;
    }

    & > span {
      font-weight: 700;
    }
  }

  & > span {
    font-size: 1.25em;
    font-weight: 500;
    margin-top: 0.5em;
    color: #555;

    @media all and (max-width: 768px) {
      font-size: 1em;
      word-break: keep-all;
    }
  }

  @media all and (max-width: 768px) {
    width: 50%;
    padding: 0 1em;
  }
`
