import type { ImageMetadata } from "astro"

import webBespokersIcon from '@/assets/company/web-bespokers.jpeg'
import netzindianerIcon from '@/assets/company/netzindianer.png'
import livekidIcon from '@/assets/company/livekid.jpeg'
import ciscoIcon from '@/assets/company/cisco.png'

export type Experience = {
    company: string
    icon: ImageMetadata
    position: string
    startDate: [month: number, year: number]
    endDate: [month: number, year: number]
}

const currentExperienceDate = [new Date().getMonth() + 1, new Date().getFullYear()]

export const experience = [
    {
        company: 'Web Bespokers',
        icon: webBespokersIcon,
        position: 'Full Stack Web Developer',
        startDate: [1, 2020],
        endDate: [4, 2020],
        description: [
            'Bugfixes and features in football match scores management tool',
            'Features in browser extension about filtering google result',
            'Manual application testing',
        ],
        technologies: [
            'JavaScript',
            'CSS',
            'Laravel',
            'HTML',
            'PHP',
        ],
    },
    {
        company: 'Netzindianer',
        icon: netzindianerIcon,
        position: 'Junior Backend Developer',
        startDate: [11, 2020],
        endDate: [3, 2022],
        description: [
            'Bugfixes and features - German newspaper websites',
            'Project development - SSO',
            'Manual application testing',
            'Writing Unit Tests',
        ],
        technologies: [
            'Laravel',
            'PHP',
        ],
    },
    {
        company: 'Backend Developer',
        icon: livekidIcon,
        position: 'Full Stack Web Developer',
        startDate: [3, 2022],
        endDate: [10, 2023],
        description: [
            'Bugfixes and features - LiveKid',
            'Bugfixes and features - FunClass',
            'Project development - LiveKid Face',
            'Project development - LiveKid Microservices',
            'Manual application testing',
            'Writing Unit Tests',
            'Working in Agile Environment',
        ],
        technologies: [
            'Clojure',
            'Node.js',
            'Python',
        ],
    },
    {
        company: 'Software Engineer',
        icon: ciscoIcon,
        position: 'Senior Software Developer',
        startDate: [11, 2023],
        endDate: currentExperienceDate,
        description: [
            'Bugfixes and features - Webex',
            'Project development - WebRTC libraries for webex application',
            'Refactoring and enchanting statistics reporting',
            'Presentations to managers about new features',
            'Working in Agile Environment',
        ],
        technologies: [
            'TypeScript',
            'JavaScript',
            'WebRTC',
            'React',
        ],
    }
]