export type MonthDate = [month: number, year: number]
export type MonthDateRange = {
    from: MonthDate | string
    until: MonthDate | string
}
