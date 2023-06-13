import * as React from "react"

type DrawerState = {
  isOpen: boolean
  toggle: () => void
  close: () => void
}

const defaultState:DrawerState = {
  isOpen: false,
  toggle: () => {},
  close: () => {}
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
    },
    close: () => {
      setIsOpen(false)
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