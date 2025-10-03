import { SectionTitle } from '../section-title'
import { languages } from '@/data/languages'

export const Languages = () => {
    return (
        <div className={`mt-4`}>
            <SectionTitle order='🗣️' label='Languages' />
            <div className='mt-4 flex flex-col gap-1'>
                {languages.map((lang, index) => (
                    <div key={index} className='flex gap-2'>
                        <span className='font-bold'>{lang.name}:</span>
                        <span>{lang.level}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
