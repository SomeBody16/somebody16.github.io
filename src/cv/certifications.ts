import type { ImageMetadata } from "astro"

import tebEdukacjaLogo from '@/assets/logo/teb-edukacja.jpeg'
import microsoftLogo from '@/assets/logo/microsoft.png'
import ciscoLogo from '@/assets/logo/cisco.png'

export type Certification = {
    name: string
    date: [month: number, year: number]
    icon: ImageMetadata
    description?: string
}

export const certifications: Certification[] = [
    {
        name: 'Qualification E.12',
        date: [7, 2018],
        icon: tebEdukacjaLogo,
    },
    {
        name: 'Qualification E.13',
        date: [7, 2019],
        icon: tebEdukacjaLogo,
    },
    {
        name: 'Qualification E.14',
        date: [1, 2020],
        icon: tebEdukacjaLogo,
    },
    {
        name: 'Microsoft Office Specialist - Excel 2016',
        date: [5, 2019],
        icon: microsoftLogo,
    },
    {
        name: 'Microsoft Office Specialist - Word 2013',
        date: [6, 2017],
        icon: microsoftLogo,
        description: 'Qualified to Microsoft Office Specialist (MOS) Championship in Anaheim 2017',
    },
    {
        name: 'Cisco IT Essentials',
        date: [6, 2018],
        icon: ciscoLogo,
    }
]