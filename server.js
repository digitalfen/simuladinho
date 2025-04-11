const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Servir arquivos JSON da pasta data
app.use('/data', express.static('data'));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para listar todos os temas disponíveis
app.get('/api/temas', (req, res) => {
    try {
        const dataPath = path.join(__dirname, 'data');
        const arquivos = fs.readdirSync(dataPath);
        const temas = [];

        arquivos.forEach(arquivo => {
            if (arquivo.endsWith('.json')) {
                const nomeBase = arquivo.replace('.json', '');
                const conteudo = fs.readFileSync(path.join(dataPath, arquivo), 'utf8');
                const dados = JSON.parse(conteudo);
                
                temas.push({
                    id: temas.length + 1,
                    nome: dados.nome,
                    questoes: dados.questoes
                });
            }
        });

        res.json(temas);
    } catch (erro) {
        console.error('Erro ao ler temas:', erro);
        res.status(500).json({ erro: 'Erro ao ler temas' });
    }
});

// Rota para obter as questões de um tema específico
app.get('/api/temas/:tema', (req, res) => {
    const tema = req.params.tema;
    try {
        const data = fs.readFileSync(path.join(__dirname, 'data', `${tema}.json`), 'utf8');
        const questoes = JSON.parse(data);
        res.json(questoes);
    } catch (error) {
        res.status(404).json({ error: 'Tema não encontrado' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
}); 