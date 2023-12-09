import { NewsLetter } from "./Classes";
import * as leitor from "readline-sync"
import banco from "./mysql";
import express from 'express';

const app = express()
const port = 3000;

app.use(express.json())

app.post('/', async (req, res) => {
    const { nome, email } = req.body;

    try {
        const newsletter = new NewsLetter();
        await newsletter.criarUsuarioBanco({ nome, email });

        return res.status(200).json({message: 'success'});
    } catch (error) {
        return res.status(500).json({message: 'error'})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


async function main() {

 
        const news = new NewsLetter()
        news.cadastrarUsuario();
        console.log(banco.nome);
        console.log(banco.email);       
}