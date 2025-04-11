const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Executa o build
console.log('Executando build...');
execSync('node build.js', { stdio: 'inherit' });

// Verifica se a pasta dist existe
if (!fs.existsSync('dist')) {
    console.error('Erro: A pasta dist não foi criada pelo build');
    process.exit(1);
}

// Configura o git para a branch gh-pages
console.log('Configurando git para deploy...');
try {
    // Cria a branch gh-pages se não existir
    execSync('git checkout -b gh-pages || git checkout gh-pages', { stdio: 'inherit' });
    
    // Move os arquivos da dist para a raiz
    const files = fs.readdirSync('dist');
    files.forEach(file => {
        const sourcePath = path.join('dist', file);
        const destPath = path.join('.', file);
        if (fs.existsSync(destPath)) {
            fs.rmSync(destPath, { recursive: true, force: true });
        }
        fs.renameSync(sourcePath, destPath);
    });

    // Remove a pasta dist
    fs.rmdirSync('dist');

    // Adiciona todos os arquivos
    execSync('git add .', { stdio: 'inherit' });

    // Commit
    execSync('git commit -m "Deploy para GitHub Pages"', { stdio: 'inherit' });

    // Push para a branch gh-pages
    execSync('git push origin gh-pages --force', { stdio: 'inherit' });

    // Volta para a branch principal
    execSync('git checkout main', { stdio: 'inherit' });

    console.log('Deploy concluído com sucesso!');
} catch (error) {
    console.error('Erro durante o deploy:', error.message);
    process.exit(1);
} 