import { useEffect, useState } from 'react'
import Head from 'next/head'
import Article from '../components/article'

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function getArticles() {
      const allArticles = await fetchEntries()
      setArticles([...allArticles])
    }
    getArticles()
  }, [])

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {articles.length > 0
        ? articles.map(p => (
            <Article
              key={p.fields.title}
              title={p.fields.title}
              body={p.fields.body}
              postedAt={p.fields.postedAt}
            />
          ))
        : null}
    </>
  )
}

export default HomePage
