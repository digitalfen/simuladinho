// Estado do quiz
let estadoAtual = {
    temaAtual: null,
    questaoAtual: 0,
    pontuacao: 0
};

// Elementos do DOM
const temasContainer = document.querySelector('.temas-container');
const questaoContainer = document.querySelector('.questao-container');
const resultadoContainer = document.querySelector('.resultado-container');
const perguntaElement = document.querySelector('.pergunta');
const alternativasContainer = document.querySelector('.alternativas');
const pontuacaoElement = document.querySelector('.pontuacao');
const reiniciarBtn = document.querySelector('.reiniciar-btn');
const voltarBtn = document.querySelector('.voltar-btn');

// Inicialização
async function inicializarQuiz() {
    try {
        const temas = await carregarTemas();
        renderizarTemas(temas);
        esconderQuestao();
        esconderResultado();
    } catch (erro) {
        console.error('Erro ao carregar temas:', erro);
        mostrarErro('Não foi possível carregar os temas. Tente novamente.');
    }
}

// Carregar temas da API
async function carregarTemas() {
    try {
        const resposta = await fetch('/api/temas');
        if (!resposta.ok) throw new Error('Erro ao carregar temas');
        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao carregar temas:', erro);
        throw erro;
    }
}

// Renderização dos temas
function renderizarTemas(temas) {
    if (!temas || temas.length === 0) {
        mostrarErro('Nenhum tema disponível.');
        return;
    }

    temasContainer.innerHTML = temas.map(tema => `
        <button class="tema-btn" data-tema-id="${tema.id}">
            ${tema.nome}
        </button>
    `).join('');

    // Adicionar eventos aos botões de tema
    document.querySelectorAll('.tema-btn').forEach(btn => {
        btn.addEventListener('click', () => iniciarTema(parseInt(btn.dataset.temaId), temas));
    });
}

// Iniciar um tema
function iniciarTema(temaId, temas) {
    const temaSelecionado = temas.find(t => t.id === temaId);
    if (!temaSelecionado || !temaSelecionado.questoes || temaSelecionado.questoes.length === 0) {
        mostrarErro('Nenhuma questão disponível para este tema.');
        return;
    }

    estadoAtual.temaAtual = temaSelecionado;
    estadoAtual.questaoAtual = 0;
    estadoAtual.pontuacao = 0;
    
    esconderTemas();
    mostrarQuestao();
    renderizarQuestao();
}

// Renderizar questão atual
function renderizarQuestao() {
    const questao = estadoAtual.temaAtual.questoes[estadoAtual.questaoAtual];
    
    // Limpar elementos anteriores
    document.querySelector('.pergunta').textContent = questao.pergunta;
    document.querySelector('.alternativas').innerHTML = '';
    
    // Remover justificativa anterior se existir
    const justificativaAnterior = document.querySelector('.justificativa');
    if (justificativaAnterior) {
        justificativaAnterior.remove();
    }
    
    // Remover botão de próxima questão se existir
    const proximaQuestaoBtn = document.querySelector('.proxima-questao-btn');
    if (proximaQuestaoBtn) {
        proximaQuestaoBtn.remove();
    }
    
    const alternativasHTML = questao.respostas.map((alt, index) => `
        <button class="alternativa-btn" data-index="${index}">
            ${alt}
        </button>
    `).join('');
    
    document.querySelector('.alternativas').innerHTML = alternativasHTML;
    
    // Adicionar eventos aos botões de alternativa
    document.querySelectorAll('.alternativa-btn').forEach(btn => {
        btn.addEventListener('click', () => verificarResposta(parseInt(btn.dataset.index)));
    });
}

// Verificar resposta
function verificarResposta(respostaIndex) {
    const questao = estadoAtual.temaAtual.questoes[estadoAtual.questaoAtual];
    const alternativaCorreta = questao.correta;
    
    // Desabilitar todos os botões
    document.querySelectorAll('.alternativa-btn').forEach(btn => {
        btn.disabled = true;
        if (parseInt(btn.dataset.index) === alternativaCorreta) {
            btn.classList.add('correta');
        }
    });
    
    // Marcar resposta incorreta se necessário
    if (respostaIndex !== alternativaCorreta) {
        document.querySelector(`[data-index="${respostaIndex}"]`).classList.add('incorreta');
    } else {
        estadoAtual.pontuacao++;
    }
    
    // Mostrar justificativa
    mostrarJustificativa(questao.justificativa);
    
    // Adicionar botão de próxima questão
    const proximaQuestaoBtn = document.createElement('button');
    proximaQuestaoBtn.className = 'proxima-questao-btn';
    proximaQuestaoBtn.textContent = 'Próxima Questão';
    proximaQuestaoBtn.addEventListener('click', () => {
        if (estadoAtual.questaoAtual < estadoAtual.temaAtual.questoes.length - 1) {
            estadoAtual.questaoAtual++;
            renderizarQuestao();
        } else {
            mostrarResultado();
        }
    });
    
    document.querySelector('.questao-container').appendChild(proximaQuestaoBtn);
}

// Mostrar justificativa
function mostrarJustificativa(justificativa) {
    const justificativaElement = document.createElement('div');
    justificativaElement.className = 'justificativa';
    justificativaElement.innerHTML = `
        <h3>Justificativa:</h3>
        <p>${justificativa}</p>
    `;
    
    document.querySelector('.questao-container').appendChild(justificativaElement);
}

// Mostrar resultado final
function mostrarResultado() {
    esconderQuestao();
    resultadoContainer.style.display = 'block';
    
    const totalQuestoes = estadoAtual.temaAtual.questoes.length;
    const porcentagem = (estadoAtual.pontuacao / totalQuestoes) * 100;
    
    document.querySelector('.pontuacao').textContent = 
        `${estadoAtual.pontuacao} de ${totalQuestoes} (${porcentagem.toFixed(1)}%)`;
}

// Funções auxiliares de visibilidade
function esconderTemas() {
    temasContainer.style.display = 'none';
}

function esconderQuestao() {
    questaoContainer.style.display = 'none';
}

function esconderResultado() {
    resultadoContainer.style.display = 'none';
}

function mostrarQuestao() {
    questaoContainer.style.display = 'block';
}

function mostrarTemas() {
    temasContainer.style.display = 'grid';
}

function mostrarErro(mensagem) {
    const erroElement = document.createElement('div');
    erroElement.className = 'erro';
    erroElement.textContent = mensagem;
    document.querySelector('main').prepend(erroElement);
    
    setTimeout(() => erroElement.remove(), 3000);
}

// Evento de voltar ao início
voltarBtn.addEventListener('click', () => {
    esconderQuestao();
    mostrarTemas();
    inicializarQuiz();
});

// Evento de reiniciar
document.querySelector('.reiniciar-btn').addEventListener('click', () => {
    esconderResultado();
    mostrarTemas();
    inicializarQuiz();
});

// Inicializar o quiz quando a página carregar
document.addEventListener('DOMContentLoaded', inicializarQuiz); 