import {DateTime} from '../components/DateTime'
import {CoverImage} from './CoverImage'
import Link from 'next/link'

type Props = {
  title: string
  slug: string
  coverImage?: string
  date?: string
}

export const PostPreview: React.VFC<Props> = ({
  title,
  coverImage,
  date,
  slug,
}) => {
  return (
    <div>
      <div className="mb-5">
        {coverImage && <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        {date && <DateTime dateString={date} />}
      </div>
    </div>
  )
}
