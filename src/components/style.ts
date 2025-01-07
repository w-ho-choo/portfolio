import { motion } from 'motion/react'
import styled from 'styled-components'

export const SectionTitle = styled(motion.h2)`
  font-size: 2.75em;
  font-weight: 800;
  color: #212325;
  text-align: center;
`

export const SectionContentBox = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media all and (max-width: 1200px) {
    padding: 0 36px;
  }

  @media all and (max-width: 768px) {
    padding: 0 20px;
  }
`
