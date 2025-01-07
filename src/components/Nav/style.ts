import styled from 'styled-components'

export const HeaderWrap = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  backdrop-filter: blur(5px);
  background-color: #b0b0b01a !important;
  border-bottom: 1px solid #ddd;

  & > div {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media all and (max-width: 1200px) {
      padding: 0 36px;
    }

    @media all and (max-width: 768px) {
      padding: 0 20px;
    }

    & > h2 > a {
      font-family: 'Oswald', serif !important;
      font-weight: 500;
      letter-spacing: -0.025em;
    }
  }
`
