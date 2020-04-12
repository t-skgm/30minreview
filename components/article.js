import marked from '../utils/marked'

function Article({ postedAt, title, body }) {
  return (
    <div className="container">
      <div className="text">
        <h2>{title}</h2>
        <h4>{postedAt}</h4>
        { body && <div dangerouslySetInnerHTML={{ __html: marked(body) }} /> }
      </div>
    </div>
  )
}

export default Article
