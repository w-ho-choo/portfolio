import { SectionContentBox, SectionTitle } from '../style'

import { data } from '../../data/data'
import {
  WorkListBox,
  WorkListBoxImg,
  WorkListSVG,
  WorkListSVGWrap,
  WorkListTextWrap,
  WorkListWrap,
} from './style'

import { stackList } from '../../data/stackList'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <section>
      <SectionTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
      >
        작업물
      </SectionTitle>
      <SectionContentBox>
        <WorkListWrap>
          {data.map((work, index) => {
            return (
              <Link
                to={`/works/${work.id}`}
                key={index}
              >
                <WorkListBox
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
                >
                  <WorkListBoxImg>
                    <img
                      src={work.thumbnails}
                      alt=''
                    />
                  </WorkListBoxImg>
                  <WorkListTextWrap>
                    <p>{work.title}</p>
                  </WorkListTextWrap>
                  <WorkListSVGWrap>
                    {work.stack.map((a, index) => {
                      return (
                        <WorkListSVG key={index}>{stackList[a]}</WorkListSVG>
                      )
                    })}
                  </WorkListSVGWrap>
                </WorkListBox>
              </Link>
            )
          })}
        </WorkListWrap>
      </SectionContentBox>
    </section>
  )
}

export default Project
