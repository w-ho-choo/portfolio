import { SectionContentBox, SectionTitle } from '../style'
import {
  SkillBox,
  SkillList,
  SkillListStack,
  SkillListText,
  SkillListTitle,
} from './style'

import HTML from '@assets/stack/html5.svg?react'
import CSS from '@assets/stack/css.svg?react'
import JS from '@assets/stack/js.svg?react'

import { motion } from 'motion/react'

const Skills = () => {
  return (
    <section>
      <SectionTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
      >
        기술
      </SectionTitle>
      <SectionContentBox>
        <SkillBox>
          <SkillList
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            <li>
              <SkillListTitle>
                <span>
                  <HTML />
                </span>
                <p>HTML</p>
              </SkillListTitle>
              <SkillListStack>웹 표준</SkillListStack>
              <SkillListStack>웹 접근성</SkillListStack>
            </li>

            <li>
              <SkillListTitle>
                <span>
                  <CSS />
                </span>
                <p>CSS</p>
              </SkillListTitle>
              <SkillListStack>CSS3</SkillListStack>
              <SkillListStack>반응형 웹</SkillListStack>
              <SkillListStack>SCSS</SkillListStack>
              <SkillListStack>BootStrap</SkillListStack>
              <SkillListStack>Tailwind</SkillListStack>
              <SkillListStack>styled-components</SkillListStack>
            </li>

            <li>
              <SkillListTitle>
                <span>
                  <JS />
                </span>
                <p>JS</p>
              </SkillListTitle>
              <SkillListStack>ES6</SkillListStack>
              <SkillListStack>jQuery</SkillListStack>
              <SkillListStack>React</SkillListStack>
              <SkillListStack>TypeScript</SkillListStack>
              <SkillListStack>Next.Js</SkillListStack>
            </li>
          </SkillList>
          <SkillListText>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
            >
              웹 에이전시에서 1년간 근무하며 웹 표준, 웹 접근성을 비롯한
              <br />
              HTML, CSS, JavaScript 지식을 쌓으며 웹 퍼블리셔로써
              근무하였습니다.
              <br />
              현재는 더욱 나아가 개인학습과 수업을 통하여
              <br />
              React, TypeScript 등을 학습하며 프론트엔드
              <br />
              개발자를 목표로 열심히 노력하고 있습니다.
            </motion.p>
          </SkillListText>
        </SkillBox>
      </SectionContentBox>
    </section>
  )
}

export default Skills
