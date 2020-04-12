import * as Contentful from 'contentful'

export type ArticleEntity = {
  slug: string
  title: string
  body: string
  postedAt: string
  catchImage?: string
  amId?: string
  tags?: string[]
}

export type ArticleEntry = Contentful.Entry<ArticleEntity>
