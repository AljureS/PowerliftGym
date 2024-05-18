import server from "./server"
import { PORT } from "./config/envs"
import "reflect-metadata"
import { AppDataSource } from "./config/data-source"



const initializeApp = async () => {
    await AppDataSource.initialize()

    server.listen(PORT, ()=>{
        console.log(`Server listening on the port ${PORT}`);
        
    })
}

initializeApp()