export type HourMinute = `${'0' | '1' | '2'}${string}:${string}${string}`

interface appointmentDto {
    date: Date,
    time: HourMinute,
    userId: number
}


export default appointmentDto