import { UsersBusiness } from "./business/UsersBusiness";
import { UsersDatabase } from "./database/UsersDatabase";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {Request, Response} from 'express'

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.listen(Number(process.env.PORT) || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
const usersBusiness = new UsersBusiness(new UsersDatabase);

app.get('/users', async (req: Request, res: Response)=>{
    try {
        const output = await usersBusiness.getUsers()

        res.status(200).send(output)
    } catch (error) {
        console.log(error)
    }
})
app.post('/users', async (req: Request, res: Response)=>{
    try {
        const input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        const output = await usersBusiness.createUser(input)

        res.status(200).send(output)
    } catch (error) {
        console.log(error)
    }
})