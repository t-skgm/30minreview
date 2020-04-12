import marked from '@/utils/marked'
import { ArticleEntity } from '@/types'

type Props = {
  article: ArticleEntity
}

export const Article: React.FC<Props> = ({ article }) => {
  return (
    <div className="container">
      <div className="text">
        <h2>{article.title}</h2>
        <h4>{article.postedAt}</h4>
        { article.body && <div dangerouslySetInnerHTML={{ __html: marked(article.body) }} /> }
      </div>
    </div>
  )
}
