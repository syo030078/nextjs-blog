import { useColorMode } from '@chakra-ui/react'
import { useEffect } from 'react'

const lightVars = {
  '--bg-primary': 'rgb(252, 249, 246)',
  '--text-primary': '#333',
  '--text-secondary': '#666',
  '--link-color': '#b37a4a',
  '--link-hover': '#8b5e34',
  '--border-color': '#e0d6cc',
  '--card-shadow': 'rgba(139, 94, 52, 0.08)',
  '--accent': '#b37a4a',
  '--card-bg': 'white',
  '--avatar-bg': 'rgb(191, 191, 191)',
  '--subtitle-color': '#666',
}

const darkVars = {
  '--bg-primary': 'rgb(32, 28, 24)',
  '--text-primary': '#e8e0d8',
  '--text-secondary': '#a89888',
  '--link-color': '#d4a574',
  '--link-hover': '#e8c4a0',
  '--border-color': '#4a3f34',
  '--card-shadow': 'rgba(0, 0, 0, 0.3)',
  '--accent': '#d4a574',
  '--card-bg': 'rgb(42, 36, 30)',
  '--avatar-bg': 'rgb(80, 72, 64)',
  '--subtitle-color': 'white',
}

export function useColorModeSync() {
  const { colorMode } = useColorMode()

  useEffect(() => {
    const vars = colorMode === 'dark' ? darkVars : lightVars
    const root = document.documentElement

    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }, [colorMode])
}

export function ColorModeSync() {
  useColorModeSync()
  return null
}
