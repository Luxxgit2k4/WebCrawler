const { JSDOM } = require('jsdom')      // importing jsdom package
function getURLsFromHtml(htmlBody, baseURL) { // baseURL is the url where the web crawler is gonna run
const urls = []
  const dom = new JSDOM(htmlBody)
const linkElements =  dom.window.document.querySelectorAll('a')
  for (const linkElement of linkElements) {
    if (linkElement.href.slice(0, 1) === '/') /* checks for the presence of '/'
as the relative url is a path*/    {
 // concatenating  relative url with base url
        try {
          const urlobj = new URL(`${baseURL}${linkElement.href}`)
          urls.push(urlobj.href)
        }
  catch (err) {
    console.log(`error with relative url: ${err.message}`)
  }
    } else {
      //absolute url
   try {
     const urlobj = new URL(linkElement.href)
          urls.push(urlobj.href)
        }
  catch (err) {
    console.log(`error with absolute  url: ${err.message}`)
  }
    }
  }
  return urls

}
function normalizeURL(urlString) {   /* To standardise the url,
it ensures that all URLs are treated as same*/
  const urlobj = new URL(urlString)
  const kumar = `${urlobj.hostname}${urlobj.pathname}`
if(kumar.length > 0 && kumar.slice(-1) === '/') { // checks if the url has / at the end
  return kumar.slice(0, -1)
}
return kumar   // kumar will return the normalized URL
}
module.exports = {
  normalizeURL,
  getURLsFromHtml
}

