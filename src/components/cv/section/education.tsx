import { education } from '@/data/education'
import { SectionTitle } from '../section-title'
import { Badge } from '@/components/ui/badge'

export const Education = () => {
    return (
        <div className={`mt-4`}>
            <SectionTitle order='🎓' label='Education' />
            <div className='mt-4'>
                {education.map((entry, index) => (
                    <div key={index} className='mt-4 flex flex-col'>
                        <div className='text-lg font-bold'>{entry.school}</div>
                        <div className='flex gap-2'>
                            <span>{entry.degree}</span>
                        </div>
                        <Badge variant='outline' className='mt-2'>
                            {entry.status}
                        </Badge>
                    </div>
                ))}
            </div>
        </div>
    )
}
