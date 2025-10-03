import { SectionTitle } from '../section-title'
import { skills } from '@/data/skills'
import { Badge } from '@/components/ui/badge'

export const Skills = () => {
    return (
        <div className={`mt-4`}>
            <SectionTitle order='💻' label='Skills' />
            <div className='mt-4 flex gap-1 flex-wrap'>
                {skills.map((label, index) => (
                    <Badge variant='outline' key={index}>{label}</Badge>
                ))}
            </div>
        </div>
    )
}
