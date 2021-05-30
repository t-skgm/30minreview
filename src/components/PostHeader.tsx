import {DateTime} from '../components/DateTime'
import {CoverImage} from '../components/CoverImage'
import {PostTitle} from '../components/PostTitle'

type Props = {
  title: string
  date: string
  coverImage?: string
}

export const PostHeader: React.VFC<Props> = ({ title, date, coverImage })  => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage ?? ''} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateTime dateString={date} />
        </div>
      </div>
    </>
  )
}
