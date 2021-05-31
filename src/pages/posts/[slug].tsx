import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

import { blogConfig } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import { getPostBySlug, getAllPosts, PostContentType } from '../../lib/api'

import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Layout } from '../../components/Layout'
import { PostContent } from '../../components/Post'

type Props = {
  post: PostContentType
  preview?: boolean
}

export const Post: React.VFC<Props> = ({ post, preview }) => {
  const router = useRouter()

  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Head>
        <title>{post.title} | {blogConfig.name}</title>
        {post.ogImage?.url && <meta property="og:image" content={post.ogImage.url} />}
      </Head>

      <Container>
        <Header />
        <PostContent loading={router.isFallback} post={post} />
      </Container>
    </Layout>
  )
}

export default Post

type QueryProps = {
  slug: string
}

export const getStaticProps: GetStaticProps<{ post: PostContentType }, QueryProps> = async ({ params }) => {
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

export const getStaticPaths: GetStaticPaths<QueryProps> = async () => {
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
