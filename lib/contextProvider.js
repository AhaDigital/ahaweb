import React, { cloneElement } from 'react'
import { AccessibilityContextProvider } from './contexts'

const ProviderComposer = ({ contexts, children }) => {
  return contexts.reduceRight(
    (kids, parent) => cloneElement(parent, { children: kids }),
    children,
  )
}

export const ContextProvider = ({ children }) => {
  return (
    // eslint-disable-next-line react/jsx-key
    <ProviderComposer contexts={[<AccessibilityContextProvider />]}>
      {children}
    </ProviderComposer>
  )
}
