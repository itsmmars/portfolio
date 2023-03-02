export interface ProjProps {
  name: string
  logo: string
  preview?: boolean
  alt: string
  url: string
  imgUrl?: string
  summary?: string
  overview?: string
}

export interface ExpProps {
  name?: string
  role: string
  location: string
  url?: string
  client?: string
  start: string
  end: string
  summary: string
  overview: string[]
}