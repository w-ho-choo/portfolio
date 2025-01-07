import styled from 'styled-components'

export const WorkDetailWrap = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 768px) {
    padding: 120px 0;
    height: auto;
  }
`

export const WorkDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 2em;
  padding: 4em 1em;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);

  @media all and (max-width: 768px) {
    flex-direction: column;
    padding: 4em 2em;
    gap: 2em;
  }
`

export const WorkDetailSwiperWrap = styled.div`
  width: 50%;

  @media all and (max-width: 768px) {
    width: 100%;
  }
`

export const WorkDetailSwiperImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  display: block;

  @media all and (max-width: 1200px) {
    height: 25vw;
  }

  @media all and (max-width: 768px) {
    height: 50vw;
  }
`

export const WorkDetailTextWrap = styled.div`
  width: 50%;

  @media all and (max-width: 768px) {
    width: 100%;
  }
`

export const WorkDetailTextTitle = styled.h2`
  font-size: 2em;
  font-weight: 700;
  color: #212325;
  letter-spacing: -0.025em;
`

export const WorkDetailTextOnCompany = styled.p`
  font-size: 1.25em;
  font-weight: 600;
  color: #666;
  margin-top: 0.5em;
`

export const WorkDetailTextDescription = styled.p`
  font-size: 1em;
  font-weight: 500;
  color: #212325;
  letter-spacing: -0.025em;
  line-height: 1.5;
  margin-top: 0.5em;
`

export const WorkDetailUseStacks = styled.div`
  margin-top: 0.5em;

  & > p {
    font-size: 2em;
    font-weight: 700;
    color: #212325;
  }

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5em;
    margin-top: 0.75em;

    & > span {
      display: block;
      width: 2.5em;
      height: 2.5em;

      & > svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
`

export const WorkDetailLink = styled.a`
  display: block;
  width: 100%;
  padding: 0.875em 0;
  background-color: #666;
  text-align: center;

  margin-top: 1.5em;
  border-radius: 6px;
  & > span {
    font-size: 1.25em;
    color: #fff;
    font-weight: 500;
    letter-spacing: -0.025em;
  }
`
