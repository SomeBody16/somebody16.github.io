import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { SectionTitle } from '../section-title'
import { worthMentioning } from '@/data/worth-mentioning'

export const WorthMentioning = () => {
    return (
        <div className={`mt-4`}>
            <SectionTitle order='🏆' label='Worth mentioning' />
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-2 py-3'>
                {worthMentioning.map((entry, index) => (
                    <Card key={index} className='py-3 gap-3'>
                        <CardHeader>
                            <div className='flex flex-col items-start'>
                                <span className='text-sm text-slate-500 dark:text-slate-400'>{entry.place}</span>
                                <CardTitle
                                    className='text-lg mb-1'
                                    dangerouslySetInnerHTML={{
                                        __html: entry.label,
                                    }}
                                />
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}
