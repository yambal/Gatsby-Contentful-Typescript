import * as React from "react"

type DrawerState = {
  isOpen: boolean
  toggle: () => void
}

const defaultState:DrawerState = {
  isOpen: false,
  toggle: () => {},
}

const DrawerContext = React.createContext(defaultState)

type DrawerProvider = {
  children: React.ReactNode
}

export const DrawerProvider = ({children}: DrawerProvider) => {
  const [isOpen, setIsOpen] = React.useState(defaultState.isOpen)

  const value = {
    isOpen,
    toggle: () => {
      setIsOpen(!isOpen)
    }
  }

  return (
    <DrawerContext.Provider value={value}>
      { children }
    </DrawerContext.Provider>
  )
}

export const useDrawer = ():DrawerState => {
  return React.useContext(DrawerContext)
}