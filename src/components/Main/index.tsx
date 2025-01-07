import { MainComponent, MainSubText, MainTitle } from './style'

const Main = () => {
  return (
    <MainComponent>
      <MainTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
      >
        안녕하세요
        <br />
        열심히 노력하며
        <br />
        점진중인 추원호입니다.
      </MainTitle>
      <MainSubText
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2 } }}
      >
        배우기 위하여 노력을 꾸준히 한다면
        <br />
        좋은 결과가 있을것이라는 신념으로 열심히 노력하고 있습니다.
        <br />
        <br />
        회사와 개인 프로젝트, 수업등등 에서 다양한 작업물들을 만들며
        <br />
        새로운 경험을 쌓고 그 경험을 기반으로 또 다른 지식을 쌓기위한 길을 찾고
        있습니다.
      </MainSubText>
    </MainComponent>
  )
}

export default Main
