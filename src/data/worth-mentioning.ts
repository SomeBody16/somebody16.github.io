import { formatDate } from '@/lib/formatDate'
import type { MonthDateRange } from './_types'

export type WorthMentioningItem = {
    label: string
    place: string
    description?: string
}

export const worthMentioning: WorthMentioningItem[] = [
    {
        label: 'Microsoft Office Specialist World Championship 2017',
        place: 'Anaheim, USA',
        description: `Participant (Microsoft Word 2013)`,
    },
    {
        label: 'C++ teacher for 13-15 years olds',
        place: 'Middle School',
        description: `Teaching about C++ language in beginers level`,
    },
    {
        label: 'Microsoft Office Specialist<br/>Excel 2016',
        place: formatDate([5, 2019]),
    },
    {
        label: 'Microsoft Office Specialist<br/>Word 2013',
        place: formatDate([6, 2017]),
    },
    {
        label: 'Qualification E.12',
        place: formatDate([7, 2018]),
    },
    {
        label: 'Qualification E.13',
        place: formatDate([7, 2019]),
    },
    {
        label: 'Qualification E.14',
        place: formatDate([1, 2020]),
    },
    {
        label: 'Cisco IT Essentials',
        place: formatDate([6, 2018]),
    },
]
