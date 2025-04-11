// Função para carregar os temas do diretório data
async function carregarTemas() {
    try {
        const response = await fetch('/api/temas');
        if (!response.ok) {
            throw new Error('Erro ao carregar os temas');
        }
        const temas = await response.json();
        console.log('Temas carregados:', temas);
        return temas;
    } catch (error) {
        console.error('Erro ao carregar temas:', error);
        return [];
    }
}

// Inicializa os temas
let temas = [];
carregarTemas().then(temasCarregados => {
    temas = temasCarregados;
    console.log('Temas carregados:', temas);
    if (typeof onTemasCarregados === 'function') {
        onTemasCarregados();
    }
}); 