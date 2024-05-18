import { DataSource } from "typeorm";
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credentials";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "proyecto_m3",
    //dropSchema: true, //eleminar datos cada vez que se actualice el servidor 
    synchronize: true,
    logging: false,
    entities: [User, Appointment, Credential], // User, Appointment
    subscribers: [],
    migrations: [],
})