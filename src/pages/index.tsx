import { getAllPosts, PostContentType } from '../lib/api'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { blogConfig, globalNav } from '../lib/constants'

import { Layout } from '../components/Layout'
import { PostPreview } from '../components/Post'
import { Container } from '../components/Container'

type Props = {
  allPosts: PostContentType[]
}

const Index: React.VFC<Props> = ({ allPosts }) => {
  return (
    <Layout>
      <Head>
        <title>{blogConfig.name}</title>
      </Head>

      <header>
        <h1 className="text-3xl text-center">{blogConfig.name}</h1>
      </header>

      <nav className="max-w-3xl mx-auto">
        <ul className="flex space-x-4">
          {globalNav.items.map(item => (
            <li key={item.title}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mb-32 max-w-4xl mx-auto">
        {allPosts.length > 0 && (
          <div>
            {allPosts.map(post => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>

      {/* Paginate. */}
    </Layout>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage'])

  return {
    props: { allPosts }
  }
}
