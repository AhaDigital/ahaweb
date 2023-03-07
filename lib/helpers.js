import { sanityConfig } from './config'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityConfig)

export function imageUrlFor(source) {
  return builder.image(source)
}

export function buildImageObj(source) {
  return {
    asset: {
      _ref: source.asset && (source.asset._ref || source.asset._id),
    },
    // Doesn't add these props if they are empty
    ...(source.crop && { crop: source.crop }),
    ...(source.hotspot && { hotspot: source.hotspot }),
  }
}

export const visuallyHidden = `
  &:not(:focus)&:not(:active) {
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }
`
