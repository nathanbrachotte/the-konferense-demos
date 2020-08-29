import KSEButton from './playgrounds/KSEButton'
import KSENotification from './playgrounds/KSENotification'
import KSERace from './playgrounds/KSERace'
import Transitions from './playgrounds/Transitions'

export const STACK: Record<string, { screen: JSX.Element | Function }> = {
  Transitions: {
    screen: Transitions,
  },
  'Easing/Spring': {
    screen: KSERace,
  },
  'Notification Center': {
    screen: KSENotification,
  },
  'Button example': {
    screen: KSEButton,
  },
} as const

export const PLAYGROUNDS = Object.keys(STACK).map((item) => item)
