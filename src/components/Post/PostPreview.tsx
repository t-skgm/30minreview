import { DateTime } from '../DateTime'
import { CoverImage } from '../CoverImage'
import { PostContentType } from '../../lib/api'
import Link from 'next/link'

type Props = {
  post: PostContentType
}

export const PostPreview: React.VFC<Props> = ({ post }) => {
  return (
    <div>
      <div className="mb-5">
        {post.coverImage && <CoverImage
          title={post.title}
          src={post.coverImage}
          height={278}
          width={556}
          href={`/posts/${post.slug}`}
        />}
      </div>

      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${post.slug}`}>
          <a className="hover:underline">{post.title}</a>
        </Link>
      </h3>

      <div className="text-lg mb-4">
        {post.date && <DateTime dateString={post.date} />}
      </div>

      <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
    </div>
  )
}
