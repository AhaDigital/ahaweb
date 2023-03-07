export const globalQuery = `*[_id == "siteSettings"][0]{
  contactInfo,
  fallbackSEO,
  footerMenu,
  mainMenu{
    mainMenuPages[]{
      _key,
      page->{
        slug,
        title
      }
    }
  },
  seoPitch
}`
export const indexQuery = `*[_id == "a78c99c2-4c15-4a29-9bf8-0d46f834422d"][0]`
export const sitemapQuery = `*[_type == "pages"] { slug }`
