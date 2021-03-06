import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Article } from '@/components/molecules/article'
import { Layout } from '@/components/organisms/Layout'
import { client } from '@/utils/contentful'
import { ArticleEntity, ArticleEntry } from '@/types'

type Props = {
  article?: ArticleEntry
}

type UrlQuery = { slug: string }

const NoContents = () => (
  <p>There is nothing we can do.</p>
)

const ArticleIdPage: NextPage<Props> = ({ article }) => {
  console.log(article)
  return (
    <Layout>
      {article
        ? (
          <Article
            key={article.fields.slug}
            article={article.fields}
          />
        )
        : <NoContents />}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props, UrlQuery> = async context => {
  const articleSlug = context.params.slug
  // `slug` is required and unique
  const entries = await client.getEntries<ArticleEntity>({
    content_type: 'article',
    'fields.slug': articleSlug,
    limit: 1
  })
  if (!entries || entries.total < 1) return null

  return {
    props: {
      article: entries.items[0]
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await client.getEntries<ArticleEntity>()
  const paths = entries.items.map(entry => `/articles/${entry.fields.slug}`)

  return { paths, fallback: false }
}

export default ArticleIdPage
