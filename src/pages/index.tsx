import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { Article } from '@/components/molecules/article'
import { Layout } from '@/components/organisms/Layout'
import { client } from '@/utils/contentful'
import { ArticleEntity, ArticleEntry } from '@/types'

type Props = {
  articles: ArticleEntry[]
}

const NoContents = () => (
  <p>There is nothing we can do.</p>
)

const IndexPage: NextPage<Props> = ({ articles }) => {
  return (
    <Layout>
      {articles.length > 0
        ? articles.map(p => (
            <Article
              key={p.fields.slug}
              article={p.fields}
            />
          ))
        : <NoContents />}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const entries = await client.getEntries<ArticleEntity>()
  if (!entries.items) return null

  return {
    props: {
      articles: entries.items
    }
  }
}

export default IndexPage
