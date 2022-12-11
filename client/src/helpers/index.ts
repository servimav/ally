import { useShare } from '@vueuse/core'

export function share(text = 'Prueba Ally, el Gestor de Enlaces', url = location.origin) {
    const { share, isSupported } = useShare();
    if (isSupported.value) {
        share({ text, url })
    }
}

export * from './const'
export * from './notification'
export * from './theme'
