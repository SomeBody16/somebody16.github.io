import type { MonthDate } from "@/data/_types"

export const formatDate = (date: MonthDate | string) => {
    if (typeof date === 'string') {
        return date
    }
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${months[date[0] - 1]} ${date[1]}`
}
