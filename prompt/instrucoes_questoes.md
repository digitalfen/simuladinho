# Instruções para IA/LLM - Lista de Tarefas

Este documento contém uma sequência de instruções que devem ser executadas pela IA/LLM para processar e armazenar perguntas e respostas sobre sistemas operacionais.

# Objetivo do Sistema

## Estrutura do Processamento

1. **Formato do Arquivo JSON**
   - Nome do arquivo: `sistemas_operacionais.json`
   - Estrutura: Objeto com o seguinte formato:
   ```json
   {
     "nome": "string", // nome
     "descricao": "string", // descricao
     "tags": ["string", "string", "..."], //tags de identificacao
     "questoes": [
       {
         "pergunta": "string",
         "respostas": ["string", "string", "string", "..."],
         "correta": int, [index da lista que corresponde a resposta correta]
         "justificativa": "string"
       }
     ]
   }
   ```

2. **Fluxo de Processamento**
   - Receber texto contendo:
     - Uma pergunta
     - Lista de alternativas (respostas)
     - Indicação da resposta correta
     - Justificativa da resposta

   - Para cada texto recebido:
     1. Extrair os componentes necessários
     2. Converter para o formato JSON especificado
     3. Adicionar o objeto à lista de questões em um novo arquivo `data/[nome_aqui].json`

3. **Condição de Parada**
   - O processamento continua até receber a ordem de parada"
   - Ao receber esta frase, o sistema deve finalizar o processamento

4. **Regras de Validação**
   - Todos os campos são obrigatórios
   - A resposta correta deve estar presente na lista de respostas
   - Cada pergunta deve ter pelo menos duas alternativas de resposta
