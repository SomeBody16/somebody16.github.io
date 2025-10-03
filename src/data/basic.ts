import profilePhoto from '@/assets/profile-photo.webp'

const ageFromBirthDate = (birthDateStr: string) => {
    const today = new Date()
    const birthDate = new Date(birthDateStr)
    return today.getFullYear() - birthDate.getFullYear()
}

export const basic = {
    photo: profilePhoto,
    name: 'Filip',
    surname: 'Nowakowski',
    email: 'f.nowakowski@gmail.com',
    phone: '+48 666 873 070',
    age: ageFromBirthDate('2000-01-06'),
    location: 'Kraków, Poland',
    description: `
<p>
    I am a highly <strong>driven Full-Stack Developer</strong> committed to <strong>architectural excellence</strong> and deep system ownership. My focus is on building custom, maintainable solutions, ensuring <strong>100% code control</strong> to relentlessly <strong>simplify complexity</strong> at scale.
</p><br/>
<p>
    I bring a track record of extreme <strong>ambition</strong> (competitive drive) and <strong>initiative</strong> (self-taught mastery), prioritizing high-quality work through strong <strong>attention to detail</strong>, responsibility, and a collaborative spirit.
</p>
    `.replaceAll('\n', ' ').trim(),
}
