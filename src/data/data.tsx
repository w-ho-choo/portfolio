import OkukoThumb from '@assets/okuko/okuko-01.png'
import OrmThumb from '@assets/ormimc/ormimc-01.png'
import BoxOfiiceThumb from '@assets/boxoffice/boxoffice-01.png'
import CatchMiThumb from '@assets/catch-mi/catch-mi-00.png'

import OkukoIMG1 from '@assets/okuko/okuko-02.png'
import OkukoIMG2 from '@assets/okuko/okuko-03.png'
import OkukoIMG3 from '@assets/okuko/okuko-04.png'
import OkukoIMG4 from '@assets/okuko/okuko-05.png'
import OkukoIMG5 from '@assets/okuko/okuko-06.png'
import OrmIMG1 from '@assets/ormimc/ormimc-01.png'
import OrmIMG2 from '@assets/ormimc/ormimc-02.png'
import OrmIMG3 from '@assets/ormimc/ormimc-03.png'
import OrmIMG4 from '@assets/ormimc/ormimc-04.png'
import OrmIMG5 from '@assets/ormimc/ormimc-05.png'
import OrmIMG6 from '@assets/ormimc/ormimc-06.png'
import CatchMi1 from '@assets/catch-mi/catch-mi-01.png'
import CatchMi2 from '@assets/catch-mi/catch-mi-02.png'
import CatchMi3 from '@assets/catch-mi/catch-mi-03.png'
import CatchMi4 from '@assets/catch-mi/catch-mi-04.png'
import CatchMi5 from '@assets/catch-mi/catch-mi-05.png'
import CatchMi6 from '@assets/catch-mi/catch-mi-06.png'
import CatchMi7 from '@assets/catch-mi/catch-mi-07.png'

import { WorkData } from './typing'

export const data: WorkData[] = [
  {
    id: 1,
    title: '오꾸꼬',
    category: '마크업',
    stack: ['html5', 'css', 'jquery'],
    description: {
      work: `
      오븐치킨 브랜드인 오X꼬의 가맹점 모집 랜딩사이트 작업물입니다. HTML, CSS, JS로 작업하였으며, <br/>AOS.js와 Splide.js같은 자바스크립트 라이브러리들을 주로 활용하여 제작하였습니다.
      <br/>또한 브라우저 크기에 따른 균일한 디자인이 보일수있도록 반응형 웹페이지 작업에 중요도를 높게하여 작업하였습니다.`,
      troubleShooting: '',
    },
    thumbnails: OkukoThumb,
    images: [OkukoIMG1, OkukoIMG2, OkukoIMG3, OkukoIMG4, OkukoIMG5],
    isOnCompany: true,
    url: 'https://www.okuko.co.kr/',
  },
  {
    id: 3,
    title: '오름IMC',
    category: '마크업',
    stack: ['html5', 'css', 'jquery'],
    description: {
      work: `
      광고대행사인 오름IMC의 웹사이트 마크업 작업물입니다
      <br/>HTML, CSS, JS, 그누보드를 사용하여 작업을 하였으며 다른 사이트들과의 차별점을 위하여 여러 효과나 디자인적인 요소들을 신경쓰며 작업하였습니다.
      <br/>Swiper나 GSAP같은 자바스크립트 라이브러리들을 중점적으로 사용하였으며 모바일의 경우 그누보드의 모바일 사이트 기능을 이용하여 반응형 웹이 아닌 PC, 모바일 따로 나뉘게끔 작업하였습니다.`,
      troubleShooting: '',
    },
    thumbnails: OrmThumb,
    images: [OrmIMG1, OrmIMG2, OrmIMG3, OrmIMG4, OrmIMG5, OrmIMG6],
    isOnCompany: true,
    url: 'https://orm-imc.co.kr/',
  },
  {
    id: 4,
    title: '박스오피스 랭킹 앱',
    category: '프론트엔드',
    stack: ['html5', 'css', 'javascript', 'react', 'axios'],
    description: {
      work: `
      리액트를 사용하였으며 비동기 함수를 사용하여 박스오피스 api를 호출후
      <br/>영화정보 api에서 불러온 정보와 일치하는 영화의 세부정보들을 불러와 보여주는 기능을 구현하였습니다.
      <br/>비동기 함수를 이용하여 서로 다른 api를 이용하여 쿼리값을 임의로 추출해내 원하는 값을 얻을수있게끔 학습할수있었던 작업물입니다.`,
      troubleShooting: '',
    },
    thumbnails: BoxOfiiceThumb,
    images: [],
    isOnCompany: false,
    url: 'https://w-ho-choo.github.io/boxoffice-rank/',
  },
  {
    id: 5,
    title: 'Catch Mi',
    category: '프론트엔드',
    stack: [
      'html5',
      'css',
      'typescript',
      'react',
      'zustand',
      'ky',
      'tanstack-query',
    ],
    description: {
      work: `
      데브코스 수업 최종프로젝트로 진행한 작업물 입니다.
      <br/>야구 직관 메이트 찾기 라는 주제를 가지고 제작하였으며
      <br/>프로필 페이지 & 하위페이지들, 굿즈거래 게시글 페이지, 공통 컴포넌트, 로그인 상태유지들을 작업하였습니다.
      <br/>ky와 tanstack-query를 이용하여 프로필 페이지 및 하위 페이지들에서 CRUD를 구성하였고
      <br/>굿즈거래 게시글 페이지에서는 불러온 값에 맞게 렌더링과 로그인 조건에 따른 렌더링 유무 들을 작업하였습니다.
      <br/>로그인 상태유지의 경우 zustand와 localStorage를 활용하여 현재 로그인한 정보와 로그인 상태유무들을 판단할수있게끔 작업하였습니다.`,
      troubleShooting: '',
    },
    thumbnails: CatchMiThumb,
    images: [
      CatchMi1,
      CatchMi2,
      CatchMi3,
      CatchMi4,
      CatchMi5,
      CatchMi6,
      CatchMi7,
    ],
    isOnCompany: false,
    url: '',
  },
]
