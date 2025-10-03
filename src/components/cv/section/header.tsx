import { basic } from '@/data/basic'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const Header = () => {
    return (
        <header>
            <div className='flex flex-col-reverse md:flex-row print:flex-row'>
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
                <div className='flex justify-center'>
                    <Avatar className='size-2/3 md:size-[200px] print:size-[200px]'>
                        <AvatarImage src={basic.photo.src} />
                        <AvatarFallback className='text-2xl font-bold bg-primary text-primary-foreground'>
                            {basic.name[0]}
                            {basic.surname[0]}
                        </AvatarFallback>
                    </Avatar>
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
