import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { HourMinute } from "../dto/apptDto"

@Entity({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column("time", { precision: 0 })
    time: HourMinute
    
    @Column()
    userId: number

    @Column({default: "active"})
    status: string
    
    @ManyToOne(()=> User, (user)=> user.appointment)
    user:User
}