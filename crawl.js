function normalizeURL(urlString) {
  const urlobj = new URL(`https://luxxblogsite.netlify.app/path`)
  const kumar = `${urlobj.hostname}${urlobj.pathname}`
if(kumar.length > 0 && kumar.slice(-1) === '/') {
  return kumar.slice(0, -1)
}
return kumar
}
module.exports = {
  normalizeURL
}

