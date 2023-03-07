import React, { createContext, useState } from 'react'

const AccessibilityContext = createContext({
  isTabbing: false,
})

const AccessibilityContextProvider = ({ children }) => {
  const [isTabbing, setIsTabbing] = useState(false)
  return (
    <AccessibilityContext.Provider value={{ isTabbing, setIsTabbing }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export { AccessibilityContext, AccessibilityContextProvider }
