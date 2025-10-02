const ageFromBirthDate = (birthDateStr: string) => {
    const today = new Date()
    const birthDate = new Date(birthDateStr)
    return today.getFullYear() - birthDate.getFullYear()
}

export const basic = {
    name: 'Filip',
    surname: 'Nowakowski',
    email: 'f.nowakowski@gmail.com',
    age: ageFromBirthDate('2000-01-06'),
    description: `
Hey! Personally I'm a Full-Stack developer, I prefer own solutions
than premade ones because I know 100% of code and if needed I can
safely modify it, add new feature or debug it if it won't work.
Furthermore, I'm ambitious (Ex. Student council, World Championship in
Microsoft Word Specialist 2013).
I'm self-taught and I always find a way to learn a specific technology.
I enjoy tracking news in javascript
world, with youtube, reddit, and all kind of news sources - day
without new framework is a lost day.

Attention to detail is one of my strengths, as I believe it plays a crucial role
in delivering high-quality work. I am a highly communicative individual and
enjoy collaborating with others to achieve common goals. Responsibility is a
core value of mine, and I always strive to meet deadlines and deliver results
that exceed expectations.
    `.trim(),
}
