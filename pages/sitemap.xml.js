import { sitemapQuery } from '../lib/queries.js'
import { getClient, overlayDrafts } from '../lib/sanity.server'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://ahadigital.se/</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         console.log(slug)
         return `
          <url>
              <loc>${`https://ahadigital.se/${slug.current}/`}</loc>
          </url>
        `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const sitemapContent = overlayDrafts(await getClient().fetch(sitemapQuery))

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(sitemapContent)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
