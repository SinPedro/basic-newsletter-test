"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Classes_1 = require("./Classes");
const mysql_1 = __importDefault(require("./mysql"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email } = req.body;
    try {
        const newsletter = new Classes_1.NewsLetter();
        yield newsletter.criarUsuarioBanco({ nome, email });
        return res.status(200).json({ message: 'success' });
    }
    catch (error) {
        return res.status(500).json({ message: 'error' });
    }
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const news = new Classes_1.NewsLetter();
        news.cadastrarUsuario();
        console.log(mysql_1.default.nome);
        console.log(mysql_1.default.email);
    });
}
