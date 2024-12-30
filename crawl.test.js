const { normalizeURL, sunni, getURLsFromHtml } = require('./crawl.js')
const {test, expect} = require('@jest/globals')


test('normalizeURL strip protocol', () => {
  const input = 'https://luxxblogsite.netlify.app/path'
  const actual = normalizeURL(input)
  const expected = 'luxxblogsite.netlify.app/path'
 expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash', () => {
  const input = 'https://luxxblogsite.netlify.app/path/'
  const actual = normalizeURL(input)
  const expected = 'luxxblogsite.netlify.app/path'
 expect(actual).toEqual(expected)
})

test('normalizeURL strip capitals', () => {
  const input = 'https://LUXXBLOGSITE.netlify.app/path '
  const actual = normalizeURL(input)
  const expected = 'luxxblogsite.netlify.app/path'
 expect(actual).toEqual(expected)
})

test('normalizeURL strip http', () => {
  const input = 'http://luxxblogsite.netlify.app/path '
  const actual = normalizeURL(input)
  const expected = 'luxxblogsite.netlify.app/path'
 expect(actual).toEqual(expected)
})

test('getURLsFromHTML absolute', () => {
  const inputHTMLBody = `
  <html>
  <body>
  <a href="https://luxxblogsite.netlify.app/path/">
       luxxblogsite.netlify.app
       </a>
       </body>
       </html>
       `
  const inputBaseURL = "https://luxxblogsite.netlify.app/path/"
  const actual = getURLsFromHtml(inputHTMLBody, inputBaseURL)
    const expected = ["https://luxxblogsite.netlify.app/path/"]
expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative', () => {
  const inputHTMLBody = `
  <html>
  <body>
  <a href="/path/">
       luxxblogsite.netlify.app
       </a>
       </body>
       </html>
       `
  const inputBaseURL = "https://luxxblogsite.netlify.app"
  const actual = getURLsFromHtml(inputHTMLBody, inputBaseURL)
    const expected = ["https://luxxblogsite.netlify.app/path/"]
expect(actual).toEqual(expected)
})

test('getURLsFromHTML both', () => {
  const inputHTMLBody = `
  <html>
  <body>
 <a href="https://luxxblogsite.netlify.app/path1/">
       luxxblogsite.netlify.app Path one
    </a>
  <a href="/path2/">
       luxxblogsite.netlify.app Path two
      </a>
      </body>
       </html>
       `
  const inputBaseURL = "https://luxxblogsite.netlify.app"
  const actual = getURLsFromHtml(inputHTMLBody, inputBaseURL)
    const expected = ["https://luxxblogsite.netlify.app/path1/","https://luxxblogsite.netlify.app/path2/"]
expect(actual).toEqual(expected)
})

test('getURLsFromHTML invalid', () => {
  const inputHTMLBody = `
  <html>
  <body>
  <a href="invalid">
       Invalid URL
       </a>
       </body>
       </html>
       `
  const inputBaseURL = "https://luxxblogsite.netlify.app"
  const actual = getURLsFromHtml(inputHTMLBody, inputBaseURL)
    const expected = []
expect(actual).toEqual(expected)
})

