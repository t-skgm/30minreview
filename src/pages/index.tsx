// import Container from '../components/Container'
// import MoreStories from '../components/MoreStories'
// import HeroPost from '../components/hero-post'
// import Intro from '../components/intro'
import { Layout } from '../components/Layout'
import {PostPreview} from '../components/PostPreview'

import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { blogConfig, globalNav } from '../lib/constants'

export default function Index({ allPosts }: any) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
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
              <li key={item.title}><a href={item.path}>{item.title}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          {allPosts.length > 0 &&
            <div>
              {allPosts.map((post: any) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  // author={post.author}
                  slug={post.slug}
                  // excerpt={post.excerpt}
                />
              ))}
            </div>
          }
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
  ])

  return {
    props: { allPosts },
  }
}
