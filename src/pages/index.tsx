import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { Article } from '@/components/molecules/article'
import { Layout } from '@/components/organisms/Layout'
import { client } from '@/utils/contentful'
import { ArticleEntity, ArticleEntry } from '@/types'
import { consts } from "@/consts"

type Props = {
  articles: ArticleEntry[]
}

const NoContents = () => (
  <p>There is nothing we can do.</p>
)

const IndexPage: NextPage<Props> = ({ articles }) => {
  return (
    <Layout>
      <p>30分でいろいろ書く。</p>
      {articles.length > 0
        ? articles.map(a => (
            <Article
              key={a.fields.slug}
              article={a.fields}
            />
          ))
        : <NoContents />}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const entries = await client.getEntries<ArticleEntity>({
    content_type: 'article',
    order: '-fields.postedAt',
    limit: consts.paginate.articlesPerPage
  })
  if (!entries || entries.total < 1) return null

  return {
    props: {
      articles: entries.items
    }
  }
}

export default IndexPage
