import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  href?: string
  height: number
  width: number
}

export const CoverImage: React.VFC<Props> = ({ title, src, href, height, width }) => {
  const image = (
    <Image
      src={src}
      alt={`${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': href,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  )

  return (
    <div className="sm:mx-0">
      {href ? (
        <Link href={href}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
