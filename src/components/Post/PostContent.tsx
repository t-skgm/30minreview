import { PostContentType } from '../../lib/api'
import { PostBody } from './PostBody'
import { PostHeader } from './PostHeader'
import { PostTitle } from './PostTitle'

type Props = {
  post: PostContentType
  loading: boolean
}

export const PostContent: React.VFC<Props> = ({ loading, post }) => {
  if (loading) {
    return <PostTitle>Loading...</PostTitle>
  }

  return (
    <article className="mb-32 max-w-4xl mx-auto">
      <PostHeader title={post.title} date={post.date} coverImage={post.coverImage} />
      <PostBody content={post.content} />
    </article>
  )
}
