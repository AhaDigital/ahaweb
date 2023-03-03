import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import { resolveProductionUrl } from './resolveProductionUrl'

// document schemas
import pages from './schemas/documents/pages'
import news from './schemas/documents/news'
import siteSettings from './schemas/documents/siteSettings'

// Object types
import bodyPortableText from './schemas/objects/bodyPortableText'
import bodyPortableRollingText from './schemas/objects/bodyPortableRollingText'
import bodyPortableRollingTextWord from './schemas/objects/bodyPortableRollingTextWord'
import bodyPortableFeaturedLink from './schemas/objects/bodyPortableFeaturedLink'
import mainImage from './schemas/objects/mainImage'
import simpleImage from './schemas/objects/simpleImage'
import seo from './schemas/objects/seo'
import mainMenu from './schemas/objects/mainMenu'
import mainMenuPage from './schemas/objects/mainMenuPage'
import content from './schemas/objects/content'
import textBlock from './schemas/objects/textBlock'
import textImageBlock from './schemas/objects/textImageBlock'
import listBlock from './schemas/objects/listBlock'
import listBlockItem from './schemas/objects/listBlockItem'
import listContentBlock from './schemas/objects/listContentBlock'
import columnsBlock from './schemas/objects/columnsBlock'
import columnsBlockItem from './schemas/objects/columnsBlockItem'
import salesPitch from './schemas/objects/salesPitch'
import inlineText from './schemas/objects/inlineText'
import inlineTextListItem from './schemas/objects/inlineTextListItem'
import contactInfo from './schemas/objects/contactInfo'
import contactPerson from './schemas/objects/contactPerson'

const projectId = import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.NEXT_PUBLIC_SANITY_DATASET

export default defineConfig({
  name: 'default',
  title: 'Aha digital',

  projectId: projectId || '',
  dataset: dataset || '',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [
      siteSettings,
      pages,
      news,
      bodyPortableText,
      bodyPortableRollingText,
      bodyPortableRollingTextWord,
      bodyPortableFeaturedLink,
      mainImage,
      simpleImage,
      seo,
      mainMenu,
      mainMenuPage,
      content,
      textBlock,
      textImageBlock,
      listBlock,
      listBlockItem,
      listContentBlock,
      columnsBlock,
      columnsBlockItem,
      salesPitch,
      inlineText,
      inlineTextListItem,
      contactInfo,
      contactPerson
    ],
  },
  document: {
    productionUrl: resolveProductionUrl,
  },
})
