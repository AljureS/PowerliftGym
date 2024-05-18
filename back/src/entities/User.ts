import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Appointment } from "./Appointment"
import { Credential } from "./Credentials"

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    birthdate: Date //| number

    @Column()
    nDni: number

    @OneToOne(()=> Credential)
    @JoinColumn()
    credential: Credential

    @OneToMany(()=> Appointment, (appointment)=> appointment.user)
    appointment: Appointment[]
}