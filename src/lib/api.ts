import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { pick } from 'remeda'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export type PostContentType = {
  title: string
  date: string
  slug: string
  content: string
  excerpt?: string
  ogImage?: { url: string }
  coverImage?: string
}

export type PostContentField = 'title' | 'slug' | 'date' | 'content' | 'ogImage' | 'coverImage'

export const postContentFields: PostContentField[] = ['title', 'slug', 'date', 'content', 'ogImage', 'coverImage']

export function getPostBySlug<TFields extends PostContentField>(
  slug: string,
  fields: TFields[] = []
): Pick<PostContentType, TFields> {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  const metadata = {
    content,
    slug: realSlug,
    ...data
  } as PostContentType

  return pick(metadata, fields)
}

export function getAllPosts<TFields extends PostContentField>(fields: TFields[] = []) {
  const slugs = getPostSlugs()

  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1: { date?: Date }, post2: { date?: Date }) => {
      if (post1.date === undefined || post2.date === undefined) return 0
      return post1.date > post2.date ? -1 : 1
    })

  return posts
}
