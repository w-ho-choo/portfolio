import { SectionContentBox, SectionTitle } from '../style'
import { AboutContainer, AboutItem } from './style'

import {
  CiUser,
  CiHome,
  CiCalendarDate,
  CiMemoPad,
  CiLaptop,
  CiTrophy,
} from 'react-icons/ci'

const About = () => {
  return (
    <section>
      <SectionTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
      >
        소개
      </SectionTitle>
      <SectionContentBox>
        <AboutContainer>
          <AboutItem
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            <i>
              <CiUser /> <span>이름</span>
            </i>
            <span>추원호</span>
          </AboutItem>
          <AboutItem
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            <i>
              <CiCalendarDate /> <span>생년월일</span>
            </i>
            <span>1998-02-13</span>
          </AboutItem>
          <AboutItem
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            <i>
              <CiHome /> <span>거주지</span>
            </i>
            <span>경기도 화성시</span>
          </AboutItem>
          <AboutItem
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            <i>
              <CiMemoPad /> <span>학력</span>
            </i>
            <span>구성고등학교 졸업</span>
          </AboutItem>
          <AboutItem
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            <i>
              <CiLaptop /> <span>이수사항</span>
            </i>
            <span>
              두드림 아카테미 UX/UI 과정 수료 <br />
              프로그래머스 데브코스 프론트엔드 과정 수료
            </span>
          </AboutItem>
          <AboutItem
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            <i>
              <CiTrophy /> <span>수상사항</span>
            </i>
            <span>
              데브코스 최종프로젝트 인기프로젝트상 <br />
              데브코스 최종프로젝트 우수프로젝트상
            </span>
          </AboutItem>
        </AboutContainer>
      </SectionContentBox>
    </section>
  )
}

export default About
