import { useParams } from 'react-router-dom'

import { data } from '../../data/data'
import WorkDetailSwiper from './WorkDetailSwiper'
import {
  WorkDetailContainer,
  WorkDetailLink,
  WorkDetailSwiperWrap,
  WorkDetailTextDescription,
  WorkDetailTextOnCompany,
  WorkDetailTextTitle,
  WorkDetailTextWrap,
  WorkDetailUseStacks,
  WorkDetailWrap,
} from './style'
import { SectionContentBox } from '@components/style'
import { stackList } from '@data/stackList'

const WorkDetail = () => {
  const { id } = useParams()
  const CURRENT_DATA = data.find((current) => current.id === Number(id))

  const images = CURRENT_DATA?.images?.length
    ? CURRENT_DATA.images
    : CURRENT_DATA?.thumbnails || []

  return (
    <WorkDetailWrap>
      <SectionContentBox>
        <WorkDetailContainer>
          <WorkDetailSwiperWrap>
            <WorkDetailSwiper images={images} />
          </WorkDetailSwiperWrap>
          <WorkDetailTextWrap>
            <WorkDetailTextTitle>{CURRENT_DATA?.title}</WorkDetailTextTitle>
            <WorkDetailTextOnCompany>
              {CURRENT_DATA?.isOnCompany ? (
                <>회사 재직 중 작업한 작업물입니다.</>
              ) : (
                <>개인 프로젝트 및 수업에서 진행한 작업물입니다.</>
              )}
            </WorkDetailTextOnCompany>
            {CURRENT_DATA?.description.work && (
              <WorkDetailTextDescription
                dangerouslySetInnerHTML={{
                  __html: CURRENT_DATA?.description.work,
                }}
              />
            )}
            <WorkDetailUseStacks>
              <p>USE</p>
              <div>
                {CURRENT_DATA?.stack.map((a, index) => {
                  return <span key={index}>{stackList[a]}</span>
                })}
              </div>
            </WorkDetailUseStacks>
            <WorkDetailLink
              href={CURRENT_DATA?.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>LINK</span>
            </WorkDetailLink>
          </WorkDetailTextWrap>
        </WorkDetailContainer>
      </SectionContentBox>
    </WorkDetailWrap>
  )
}

export default WorkDetail
