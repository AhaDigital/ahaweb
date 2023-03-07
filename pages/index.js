import { indexQuery, globalQuery } from '../lib/queries.js'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import Layout from '@/components/organisms/Layout.js'

export default function IndexPage({ pageContent, globalContent }) {
  console.log(globalContent, pageContent, 'FE')
  const seo = {
    title: 'T',
    description: 'D',
  }

  return (
    <Layout seo={seo} {...globalContent}>
      <section>
        <p className="">Content</p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const globalContent = overlayDrafts(await getClient().fetch(globalQuery))
  const pageContent = overlayDrafts(await getClient().fetch(indexQuery))
  return {
    props: { globalContent, pageContent },
    revalidate: 10,
  }
}
