export interface WorkData {
  id: number
  title: string
  category: string
  stack: string[]
  description: {
    work: string | string[]
    troubleShooting?: string
  }
  thumbnails: string
  images: string[]
  isOnCompany: boolean
  url: string
}

export interface StackElementsIndex {
  [key: string]: JSX.Element
}
