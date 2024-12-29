const { normalizeURL } = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL strip protocol', () => {
  const input = 'https://luxxblogsite.netlify.app/path/'
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

