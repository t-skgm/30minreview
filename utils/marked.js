import marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  sanitize: false,
  smartLists: true,
  smartypants: true
});

export default marked
