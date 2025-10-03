import { basic } from '@/data/basic'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export const ProfileAvatar = () => {
    return (
        <Avatar className='size-[200px]'>
            <AvatarImage src={basic.photo.src} />
            <AvatarFallback className='text-2xl font-bold bg-primary text-primary-foreground'>
                {basic.name[0]}
                {basic.surname[0]}
            </AvatarFallback>
        </Avatar>
    )
}
