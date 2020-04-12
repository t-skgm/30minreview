import styled from "@emotion/styled"
import Link from "next/link"
import marked from '@/utils/marked'
import { colors } from "@/consts"
import { ArticleEntity } from '@/types'
import { AppleMusicWidget } from '@/components/atoms/AppleMusicWidget'

const Wrapper = styled.article`
  margin: 1rem 0;
`

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;

  a {
    color: ${colors.text};
  }
`

type Props = {
  article: ArticleEntity
}

export const Article: React.FC<Props> = ({ article }) => {
  return (
    <Wrapper>
      <div className="text">
        <Title><Link href={`/articles/${article.slug}`}><a>{article.title}</a></Link></Title>
        <p>{article.postedAt}</p>
        { article.amId && <AppleMusicWidget playlistId={article.amId} playlistName={article.title} />}
        { article.body && <div dangerouslySetInnerHTML={{ __html: marked(article.body) }} /> }
      </div>
    </Wrapper>
  )
}
