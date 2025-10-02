import { basic } from './basic'
import { certifications } from './certifications'
import { education } from './education'
import { experience } from './experience'

class CV {
    name = basic.name
    surname = basic.surname
    email = basic.email
    description = basic.description

    get fullName() {
        return `${this.name} ${this.surname}`
    }

    experience = experience
    education = education
    certifications = certifications
}

export const cv = new CV()