import Head from 'next/head'
import { useRouter } from 'next/router'
import { imageUrlFor, buildImageObj } from '@/lib/helpers'

const Seo = ({ seo = {}, fallbackSEO = {} }) => {
  const { title, description, image, robots = 'index, follow' } = seo
  const {
    ogTitle: fallbackTitle,
    ogDescription: fallbackDescription,
    ogImage: fallbackImage,
  } = fallbackSEO

  const router = useRouter()

  const imageUrl =
    image && image.asset
      ? {
          facebook: imageUrlFor(buildImageObj(image))
            .width(1200)
            .height(627)
            .url(),
          twitter: imageUrlFor(buildImageObj(image))
            .width(1200)
            .height(600)
            .url(),
        }
      : null

  const fallbackImageUrl =
    fallbackImage && fallbackImage.asset
      ? {
          facebook: imageUrlFor(buildImageObj(fallbackImage))
            .width(1200)
            .height(627)
            .url(),
          twitter: imageUrlFor(buildImageObj(fallbackImage))
            .width(1200)
            .height(600)
            .url(),
        }
      : null

  console.log(imageUrl, fallbackImageUrl)

  return (
    <Head>
      <title>{`${title || fallbackTitle} - Aha Digital`}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link rel="preconnect" href="https://cdn.sanity.io" />
      <link
        rel="preconnect dns-prefetch"
        href="https://www.google-analytics.com"
      />
      <link rel="icon" href="/favicon-32x32.png" type="image/png" />
      <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png" />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/icons/icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/icons/icon-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href="/icons/icon-256x256.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="384x384"
        href="/icons/icon-384x384.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/icons/icon-512x512.png"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <meta name="description" content={description || fallbackDescription} />
      <meta
        property="og:description"
        content={description || fallbackDescription}
      />
      <meta property="og:site_name" content="Aha Digital" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={router.locale} />
      <meta property="og:url" content={router.pathname} />
      <meta property="og:see_also" content="https://github.com/AhaDigital/" />
      <meta
        property="og:see_also"
        content="https://www.instagram.com/ahadigital.se/"
      />
      <meta
        property="og:see_also"
        content="https://www.linkedin.com/company/aha-digital-swe/"
      />
      <meta
        property="og:see_also"
        content="https://www.facebook.com/AhaDigitalSwe/"
      />
      <meta
        property="og:see_also"
        content="https://twitter.com/ahadigitalswe/"
      />

      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta
        property="og:image"
        content={
          (imageUrl && imageUrl.facebook) ||
          (fallbackImageUrl && fallbackImageUrl.facebook) ||
          ''
        }
      />
      <meta
        property="twitter:image"
        content={
          (imageUrl && imageUrl.twitter) ||
          (fallbackImageUrl && fallbackImageUrl.twitter) ||
          ''
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AhaDigitalSwe" />
      <meta name="twitter:creator" content="@AhaDigitalSwe" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="600" />
      <meta property="robots" content={robots} />
    </Head>
  )
}

export default Seo
