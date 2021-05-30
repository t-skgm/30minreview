import remark from 'remark'
import html from 'remark-html'

const processor =  remark().use(html)

export default async function markdownToHtml(markdown: string) {
  const result = await processor.process(markdown)
  return result.toString()
}
