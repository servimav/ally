import { useShare } from '@vueuse/core'

export function share() {
    const { share, isSupported } = useShare();
    if (isSupported.value) {
        share({
            text: 'Ally Servimav',
            url: location.origin
        })
    }
}

export * from './const'
export * from './notification'
export * from './theme'
