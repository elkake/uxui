import Express from "express";
import cors from "cors";
import dbConnection from "../db/connection";
import router from "../routes/userRouter";
const {port} = require("../config");
// const port = 3000;

const app = Express();
const userPath = "/api/user";
// const authPath = "/api/auth";

class server{
    listen() {
        app.listen(port, () =>{
            console.log(`Server listening on port ${port}`);
        });
    }

    middlewares(){
        app.use(cors());
        app.use(Express.json());
        app.use(Express.static("public"));
    }

    routes() {
        //en esta middleware se define  la ruta y en que carpeta estan
        // app.use(authPath, routerAuth)
        app.use(userPath, router)
    }

    constructor(){

        connectDB();
        this.middlewares;
        this.routes;

    }

}

async function connectDB () {
    dbConnection();
}



export default server;