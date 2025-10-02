import type { ImageMetadata } from "astro"

import wszibLogo from '@/assets/logo/wszib.jpeg'

export type Education = {
    school: string
    degree: string
    status: string
    icon: ImageMetadata
}

export const education: Education[] = [
    {
        school: 'Wyższa Szkoła Zarządzania i Bankowości',
        degree: 'Inżynier (Bachelor), Informatyka (IT)',
        status: 'In progress',
        icon: wszibLogo,
    }
]