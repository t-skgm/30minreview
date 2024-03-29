import { parseISO, format } from 'date-fns'

export const DateTime: React.VFC<{ dateString: string }> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
