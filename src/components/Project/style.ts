import { motion } from 'motion/react'
import styled from 'styled-components'

export const WorkListWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2em;

  margin-top: 4em;

  & > a {
    width: calc(50% - 1em);
    display: block;

    @media all and (max-width: 768px) {
      width: 100%;
    }
  }
`

export const WorkListBox = styled(motion.div)`
  width: 100%;
  padding: 1.5em 2.25em;
  background-color: #fff;
  box-shadow: 5px 5px 10px #33333320;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &:hover {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '자세히 보기';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2em;
    font-weight: 700;
    color: #fff;
    text-shadow: 3px 3px 10px rgba(0, 0, 0);

    background-color: rgba(0, 0, 0, 0.35);
    opacity: 0;
    transition: all 0.35s ease-in-out;
  }

  @media all and (max-width: 768px) {
    padding: 1.5em;
  }
`

export const WorkListBoxImg = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`

export const WorkListTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;

  & > p {
    font-size: 1.5em;
    font-weight: 700;
    color: #212325;
    letter-spacing: -0.025em;
  }
`

export const WorkListSVGWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;

  margin-top: 0.5em;
`

export const WorkListSVG = styled.div`
  width: 2.5em;
  height: 2.5em;

  & > svg {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
