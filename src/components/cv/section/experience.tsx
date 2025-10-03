import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionTitle } from '../section-title'
import { experience } from '@/data/experience'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/formatDate'

export const Experience = () => {
    return (
        <div className={`mt-4`}>
            <SectionTitle order='💼' label='Experience' />
            <div className='mt-4 grid grid-cols-2 gap-2'>
                {experience.map((entry, index) => (
                    <Card key={index} className='py-3 gap-3'>
                        <CardHeader>
                            <div className='flex items-start gap-4'>
                                <div className='size-12 rounded-lg overflow-hidden flex-shrink-0 bg-white dark:bg-slate-800 p-1'>
                                    <img
                                        src={entry.icon.src}
                                        alt={entry.company}
                                        className='w-full h-full object-contain'
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div className='flex-1'>
                                    <CardTitle className='text-xl mb-1 flex gap-2'>
                                        {entry.position}
                                        {entry.active && <Badge variant='outline'>Current</Badge>}
                                    </CardTitle>
                                    <CardDescription className='text-base'>{entry.company}</CardDescription>
                                    <p className='text-sm text-slate-500 dark:text-slate-400 mt-1'>
                                        {formatDate(entry.date.from)} - {formatDate(entry.date.until)}
                                    </p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className='list-disc list-inside space-y-1 mb-4 text-slate-700 dark:text-slate-300'>
                                {entry.description.map((item) => (
                                    <li key={item} className='text-sm'>{item}</li>
                                ))}
                            </ul>
                            <div className='flex flex-wrap gap-2'>
                                {entry.technologies.map((tech) => (
                                    <Badge key={tech} variant='secondary'>{tech}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
