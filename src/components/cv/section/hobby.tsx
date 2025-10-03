import { Badge } from '@/components/ui/badge'
import { SectionTitle } from '../section-title'
import { hobby } from '@/data/hobby'

export const Hobby = () => {
    return (
        <div className={`mt-4`}>
            <SectionTitle order='🔥' label='Hobby' />
            <div className='mt-4 flex gap-1 font-bold flex-wrap'>
                {hobby.map((item, index) => (
                    <Badge key={index} variant='outline'>
                        {item}
                    </Badge>
                ))}
            </div>
        </div>
    )
}
