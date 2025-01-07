import { motion } from 'motion/react'
import styled from 'styled-components'

export const MainComponent = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 2.5em;

  @media all and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
    padding: 0 20px !important;
  }
`

export const MainTitle = styled(motion.h2)`
  font-size: 2em;
  font-weight: 600;
  color: #212325;
`

export const MainSubText = styled(motion.p)`
  font-size: 1.125em;
  font-weight: 400;
  color: #777;
`
