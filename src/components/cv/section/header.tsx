import { basic } from '@/data/basic'
import { ProfileAvatar } from '../profile-avatar'

export const Header = () => {
    return (
        <header>
            <div className='flex'>
                <div className='grow'>
                    <div className='flex h-24 items-end'>
                        <div className='text-8xl mr-4 text-primary'>CV.</div>
                        <div className='text-4xl font-bold flex flex-col justify-end pb-1'>
                            <div>{basic.name}</div>
                            <div>{basic.surname}</div>
                        </div>
                    </div>
                    <div className='mt-4 text-lg'>
                        <div className='flex gap-2'>
                            <span className='font-bold'>E-mail:</span>
                            <span>{basic.email}</span>
                        </div>
                        <div className='flex gap-2'>
                            <span className='font-bold'>Phone:</span>
                            <span>{basic.phone}</span>
                        </div>
                        <div className='flex gap-2'>
                            <span className='font-bold'>Current location:</span>
                            <span>{basic.location}</span>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <ProfileAvatar />
                </div>
            </div>
            <div
                className='mt-4 p-4 border-x-4 border-primary text-sm'
                dangerouslySetInnerHTML={{
                    __html: basic.description,
                }}
            />
        </header>
    )
}
