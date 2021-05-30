import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

import { blogConfig } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import { getPostBySlug, getAllPosts, PostContent } from '../../lib/api'

import { Container } from '../../components/Container'
import { PostBody } from '../../components/PostBody'
import { Header } from '../../components/Header'
import { PostHeader } from '../../components/PostHeader'
import { Layout } from '../../components/Layout'
import { PostTitle } from '../../components/PostTitle'

type Props = {
  post: PostContent
  preview?: boolean
}

export const Post: React.FC<Props> = ({ post, preview }) => {
  const router = useRouter()

  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | {blogConfig.name}</title>
                {post.ogImage?.url && <meta property="og:image" content={post.ogImage?.url} />}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type QueryProps = {
  slug: string
  content: string
}

export const getStaticProps: GetStaticProps<{ post: PostContent }, QueryProps> = async ({ params }) => {
  const post = getPostBySlug(params!.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content)

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}
