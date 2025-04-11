const fs = require('fs');
const path = require('path');

// Função para ler todos os arquivos JSON da pasta data
function lerArquivosJSON() {
    const dataPath = path.join(__dirname, 'data');
    const arquivos = fs.readdirSync(dataPath);
    const temas = [];

    console.log('Arquivos encontrados:', arquivos);

    arquivos.forEach(arquivo => {
        if (arquivo.endsWith('.json')) {
            console.log(`Lendo arquivo: ${arquivo}`);
            const conteudo = fs.readFileSync(path.join(dataPath, arquivo), 'utf8');
            const dados = JSON.parse(conteudo);
            console.log(`Dados do arquivo ${arquivo}:`, dados);
            temas.push({
                id: temas.length + 1,
                nome: dados.nome,
                questoes: dados.questoes
            });
        }
    });

    return temas;
}

// Função para criar a pasta dist se não existir
function criarPastaDist() {
    const distPath = path.join(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
        console.log('Removendo pasta dist antiga...');
        fs.rmSync(distPath, { recursive: true });
    }
    console.log('Criando nova pasta dist...');
    fs.mkdirSync(distPath);
    return distPath;
}

// Função para copiar arquivos estáticos
function copiarArquivosEstaticos(distPath) {
    const arquivosEstaticos = ['index.html', 'styles.css', 'script.js'];
    arquivosEstaticos.forEach(arquivo => {
        const origem = path.join(__dirname, 'public', arquivo);
        const destino = path.join(distPath, arquivo);
        console.log(`Copiando ${origem} para ${destino}`);
        fs.copyFileSync(origem, destino);
    });
}

// Função para gerar o arquivo de dados
function gerarArquivoDados(distPath, temas) {
    console.log('Temas a serem incluídos no build:', temas);
    
    const conteudoJS = `// Arquivo gerado automaticamente pelo build
const temas = ${JSON.stringify(temas, null, 2)};

// Função que simula o carregamento dos temas
async function carregarTemas() {
    return Promise.resolve(temas);
}`;

    const arquivoDados = path.join(distPath, 'data.js');
    console.log(`Gerando arquivo de dados em: ${arquivoDados}`);
    fs.writeFileSync(arquivoDados, conteudoJS);
}

// Função principal de build
function build() {
    console.log('Iniciando build...');
    
    // Ler todos os JSONs
    console.log('Lendo arquivos JSON...');
    const temas = lerArquivosJSON();
    console.log(`${temas.length} tema(s) encontrado(s)`);
    
    // Criar pasta dist
    console.log('Criando pasta dist...');
    const distPath = criarPastaDist();
    
    // Copiar arquivos estáticos
    console.log('Copiando arquivos estáticos...');
    copiarArquivosEstaticos(distPath);
    
    // Gerar arquivo de dados
    console.log('Gerando arquivo de dados...');
    gerarArquivoDados(distPath, temas);
    
    console.log('Build concluído com sucesso!');
    console.log(`Os arquivos estão na pasta 'dist'`);
}

// Executar o build
build(); 