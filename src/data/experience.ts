import type { ImageMetadata } from 'astro'

import webBespokersIcon from '@/assets/logo/web-bespokers.jpeg'
import netzindianerIcon from '@/assets/logo/netzindianer.png'
import livekidIcon from '@/assets/logo/livekid.jpeg'
import ciscoIcon from '@/assets/logo/cisco.jpeg'
import type { MonthDateRange } from './_types'

export type Experience = {
    active?: boolean
    company: string
    icon: ImageMetadata
    position: string
    date: MonthDateRange
    description: string[]
    technologies: string[]
}

export const experience: Experience[] = [
    {
        active: true,
        company: 'Cisco',
        icon: ciscoIcon,
        position: 'Software Engineer',
        date: {
            from: [11, 2023],
            until: 'Now',
        },
        description: [
            'Bugfixes and features - Webex',
            'Project development - WebRTC libraries for webex application',
            'Refactoring and enchanting statistics reporting',
            'Sports and Wellbeing Horseback Riding leader - organized classes, managed the budget and communication with participants and stables',
            'Working in Agile Environment',
        ],
        technologies: ['TypeScript', 'JavaScript', 'WebRTC', 'React'],
    },
    {
        company: 'LiveKid',
        icon: livekidIcon,
        position: 'Backend Developer',
        date: {
            from: [3, 2022],
            until: [10, 2023],
        },
        description: [
            'Bugfixes and features - LiveKid, FunClass',
            'Project development - LiveKid Face, Microservices',
            'Manual application testing',
            'Writing Unit Tests',
            'Working in Agile Environment',
        ],
        technologies: ['Clojure', 'Node.js', 'Python'],
    },
    {
        company: 'Netzindianer',
        icon: netzindianerIcon,
        position: 'Junior Backend Developer',
        date: {
            from: [11, 2020],
            until: [3, 2022],
        },
        description: [
            'Bugfixes and features - German newspaper websites',
            'Project development - SSO',
            'Manual application testing and unit tests',
        ],
        technologies: ['Laravel', 'PHP'],
    },
    {
        company: 'Web Bespokers',
        icon: webBespokersIcon,
        position: 'Full Stack Web Developer',
        date: {
            from: [1, 2020],
            until: [4, 2020],
        },
        description: [
            'Bugfixes and features in football match scores management tool',
            'Features in browser extension about filtering google result',
            'Manual application testing',
        ],
        technologies: ['JavaScript', 'CSS', 'Laravel', 'HTML', 'PHP'],
    },
]
