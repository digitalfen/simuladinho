// Arquivo gerado automaticamente pelo build
const temas = [
  {
    "id": 1,
    "nome": "Sistemas Operacionais",
    "questoes": [
      {
        "pergunta": "Assinale a alternativa INCORRETA:",
        "respostas": [
          "Em uma arquitetura em camadas, a do sistema operacional se localiza entre os programas aplicativos e os usuários.",
          "Um sistema operacional fornece uma interface entre o usuário e computador.",
          "Gerência é, basicamente, a principal função de um sistema operacional, que também deve fornecer \"camadas\" para garantir a execução de outros aplicativos.",
          "Sistema operacional é um programa ou conjunto de programas que visa tornar \"operacional\" um computador ou um sistema computacional qualquer.",
          "Um hardware sem um sistema que permita interagir com ele, gerenciá-lo, utilizar seus recursos, torna-se apenas um hardware."
        ],
        "correta": 0,
        "justificativa": "Essa afirmação está incorreta porque na arquitetura em camadas, o sistema operacional fica entre o hardware e os programas aplicativos, não entre os programas e os usuários. Os usuários interagem com os aplicativos, que por sua vez usam o sistema operacional para acessar os recursos do hardware. Logo, a ordem correta seria: Usuário → Aplicativos → Sistema Operacional → Hardware"
      },
      {
        "pergunta": "Como são conhecidos os componentes físicos e a parte lógica, respectivamente, no mundo computacional?",
        "respostas": [
          "Periféricos e sistemas.",
          "CPU e sistema operacional.",
          "Memórias e programas.",
          "Unidade central de processamento e aplicativos.",
          "Hardware e software."
        ],
        "correta": 4,
        "justificativa": "No mundo computacional: Hardware refere-se aos componentes físicos do computador, como CPU, memória, HD, teclado, mouse, placa-mãe, etc. Software é a parte lógica, ou seja, os programas e sistemas que instruem o hardware sobre o que fazer — inclui o sistema operacional, aplicativos, drivers, etc."
      },
      {
        "pergunta": "Qual é a sequência correta que representa o fluxo básico de funcionamento de um sistema computacional?",
        "respostas": [
          "Processamento -> Saída -> Retroalimentação.",
          "Entrada -> Saída -> Retroalimentação.",
          "Entrada -> Processamento -> Saída.",
          "Processamento -> Entrada -> Saída.",
          "Retroalimentação -> Entrada -> Processamento."
        ],
        "correta": 2,
        "justificativa": "Entrada: dados ou instruções fornecidas ao sistema (por teclado, mouse, sensores, etc.). Processamento: manipulação dos dados de entrada (realizado pela CPU). Saída: resultado do processamento (exibido em uma tela, impresso, armazenado, etc.). Essa é a estrutura fundamental da computação."
      },
      {
        "pergunta": "Em qual versão do Windows a Microsoft conseguiu \"livrar-se\" da dependência do MS-DOS em sua arquitetura?",
        "respostas": [
          "Windows 98.",
          "Windows 95.",
          "Windows 7.",
          "Windows XP.",
          "Windows Me."
        ],
        "correta": 3,
        "justificativa": "O Windows XP, lançado em 2001, foi a primeira versão amplamente adotada do Windows voltada para o consumidor final que se baseou totalmente no Windows NT (New Technology), uma arquitetura independente do MS-DOS. Antes dele, Windows 95, 98 e Me ainda eram fortemente baseados no MS-DOS, com uma arquitetura híbrida."
      },
      {
        "pergunta": "O uso de qual dispositivo caracteriza a primeira geração de computadores?",
        "respostas": [
          "Válvulas.",
          "CI's (circuitos integrados).",
          "Transistores.",
          "Fitas magnéticas.",
          "Microprocessadores."
        ],
        "correta": 0,
        "justificativa": "A primeira geração de computadores (décadas de 1940 e 1950) foi caracterizada pelo uso de válvulas eletrônicas (também chamadas de tubos a vácuo) para processar dados. Esses computadores eram grandes, consumiam muita energia e geravam muito calor. Exemplo famoso dessa geração: ENIAC (Electronic Numerical Integrator and Computer)."
      },
      {
        "pergunta": "O uso dos processadores deve ser distribuído entre os aplicativos ativos no sistema, de forma que cada um deles possa executar no tempo, sequência e velocidade adequados para cumprir suas funções sem prejudicar os outros. O mesmo ocorre com a memória RAM, que deve ser distribuída de forma justa entre as aplicações. Essa função de um sistema operacional pode ser definida como:",
        "respostas": [
          "Write-back.",
          "Abstração.",
          "Concorrência.",
          "Divisibilidade.",
          "Gerência."
        ],
        "correta": 4,
        "justificativa": "A gerência é uma das funções fundamentais do sistema operacional. Ela envolve: Gerência de processos: controle do uso do processador entre os aplicativos ativos. Gerência de memória: alocação e liberação da memória RAM para os processos. Gerência de dispositivos e arquivos: controle de acesso e uso de recursos de hardware e armazenamento."
      },
      {
        "pergunta": "Qual alternativa define melhor a função de um sistema operacional em prover uma camada de abstração para usuários e aplicativos?",
        "respostas": [
          "Um sistema operacional deve detalhar para usuários e aplicativos as tarefas necessárias para interagir com cada tipo de hardware.",
          "A camada de abstração visa ocultar do sistema operacional os drivers de dispositivos.",
          "Provendo essa camada, um sistema operacional torna-se independente da arquitetura dos programas aplicativos.",
          "Ocultar do usuário e dos programas aplicativos detalhes de implementação no uso dos recursos físicos.",
          "Por meio de suas abstrações, o sistema operacional permite aos usuários utilizar os programas aplicativos de forma independente."
        ],
        "correta": 3,
        "justificativa": "A principal função de abstração do sistema operacional é justamente esconder os detalhes complexos do hardware (como gerenciamento de memória, controle de dispositivos de entrada/saída, e acesso ao processador) para que usuários e programas não precisem lidar diretamente com esses aspectos técnicos. Isso facilita o desenvolvimento e o uso de software, tornando o sistema mais amigável e eficiente."
      },
      {
        "pergunta": "Qual o nome do computador da Apple, lançado em meados dos anos 1980, que se tornou um marco na disseminação das interfaces gráficas?",
        "respostas": [
          "iPad.",
          "XENIX.",
          "Macintosh.",
          "iComputer.",
          "PARC."
        ],
        "correta": 2,
        "justificativa": "O Macintosh, lançado pela Apple em 1984, foi um marco na história da computação pessoal por popularizar as interfaces gráficas (GUI) e o uso do mouse. Embora a ideia de interface gráfica tenha sido inicialmente desenvolvida no Xerox PARC, foi a Apple quem levou esse conceito ao mercado de massa com o Macintosh."
      },
      {
        "pergunta": "Qual o primeiro sistema operacional da Microsoft que, inicialmente, fora adaptado para o PC da IBM?",
        "respostas": [
          "Basic.",
          "UNIX.",
          "MS-DOS.",
          "IBM OS/2.",
          "Windows."
        ],
        "correta": 2,
        "justificativa": "O MS-DOS (Microsoft Disk Operating System) foi o primeiro sistema operacional da Microsoft adaptado para o IBM PC, lançado em 1981. A Microsoft comprou os direitos de um sistema chamado QDOS (Quick and Dirty Operating System), o adaptou e licenciou para a IBM, que o distribuiu com seus computadores como PC-DOS (versão customizada do MS-DOS)."
      },
      {
        "pergunta": "Assinale a alternativa que apresenta uma correta classificação dos tipos de memória com relação ao seu desempenho (da mais rápida para a mais lenta).",
        "respostas": [
          "Registradores / cache / memória RAM / disco magnético / fita magnética.",
          "Cache / memória ROM / registradores / fita magnética / disco magnético.",
          "Registradores / cache / memória ROM / disco magnético / fita magnética.",
          "Cache / memória RAM / registradores / disco magnético / fita magnética.",
          "Registradores / cache / memória RAM / fita magnética / disco magnético."
        ],
        "correta": 0,
        "justificativa": "A hierarquia de memória, da mais rápida para a mais lenta, é: Registradores (dentro do processador) → Cache (memória rápida próxima ao processador) → Memória RAM (memória principal) → Disco Magnético (armazenamento secundário) → Fita Magnética (armazenamento terciário). Esta ordem reflete o compromisso entre velocidade de acesso e capacidade de armazenamento."
      },
      {
        "pergunta": "Dispositivos de entrada e saída (E/S) geralmente possuem controladores formados por um ou mais chips em uma placa. Esses controladores têm a função de receber os comandos do sistema operacional e gerar as instruções mais adequadas para os dispositivos propriamente ditos. Que nome se dá ao software fornecido pelo fabricante que faz a interface entre o sistema operacional e o controlador?",
        "respostas": [
          "USB.",
          "PCI.",
          "Driver.",
          "IDE.",
          "ISA."
        ],
        "correta": 2,
        "justificativa": "O driver (ou controlador) é o software que permite a comunicação entre o sistema operacional e o hardware. Ele traduz os comandos do sistema operacional para instruções que o dispositivo pode entender, e vice-versa. É fornecido pelo fabricante do dispositivo e é essencial para o funcionamento correto do hardware."
      },
      {
        "pergunta": "Na arquitetura de hardware dos computadores, ele é como uma estrada que possibilita a comunicação entre todos os outros elementos, como a memória e os dispositivos de E/S (entrada e saída). Estamos nos referindo ao:",
        "respostas": [
          "Processador.",
          "Circuito integrado.",
          "Controlador SCSI.",
          "Barramento.",
          "Monitor de vídeo."
        ],
        "correta": 3,
        "justificativa": "O barramento (bus) é o sistema de comunicação que permite a transferência de dados entre os componentes do computador. Ele funciona como uma estrada de dados, permitindo que a CPU se comunique com a memória e os dispositivos de entrada/saída. Existem diferentes tipos de barramentos, como o barramento de dados, de endereços e de controle."
      },
      {
        "pergunta": "Neste tipo de sistema operacional, ao acessar uma aplicação, o usuário interage com sua interface, porém, não sabe onde estão sendo executados seus processos ou onde estão sendo armazenados seus arquivos. Essas características são de um sistema operacional:",
        "respostas": [
          "Monousuário.",
          "Cliente-servidor.",
          "Multiusuário.",
          "Peer-to-peer.",
          "Distribuído."
        ],
        "correta": 4,
        "justificativa": "Um sistema operacional distribuído é aquele onde os recursos e processos estão espalhados por diferentes computadores em uma rede, mas são apresentados ao usuário como se estivessem em um único sistema. A transparência é uma característica fundamental, onde o usuário não precisa saber onde os processos estão sendo executados ou onde os arquivos estão armazenados."
      },
      {
        "pergunta": "O tipo de sistema operacional que disponibiliza serviços de autenticação remota, acesso a arquivos, banco de dados, impressoras, entre outros, é classificado como sendo do tipo:",
        "respostas": [
          "Sistema operacional virtual.",
          "Sistema operacional de banco de dados.",
          "Sistema operacional compartilhado.",
          "Sistema operacional hyper-threading.",
          "Sistema operacional de rede."
        ],
        "correta": 4,
        "justificativa": "Um sistema operacional de rede é projetado especificamente para gerenciar recursos compartilhados em uma rede de computadores. Ele fornece serviços como autenticação de usuários, compartilhamento de arquivos, acesso a banco de dados, compartilhamento de impressoras e outros recursos de rede. Exemplos incluem Windows Server, Linux Server e Novell NetWare."
      },
      {
        "pergunta": "Qual alternativa apresenta uma correta relação entre processadores de arquitetura RISC e CISC?",
        "respostas": [
          "Um processador CISC é mais performático que um RISC.",
          "Um sistema operacional desenvolvido para RISC faz uso das subcamadas de microcódigo embutidas na arquitetura do processador, reduzindo o conjunto de instruções do seu kernel, o que não acontece nos processadores CISC.",
          "Processadores RISC estão em desuso, já os CISCs tornaram-se \"padrão de mercado\".",
          "Processadores CISC têm a vantagem de aumentar o tamanho do código executável dos programas, já os processadores RISC exigem muito menos \"linhas de código\".",
          "Processadores RISC baseiam-se em um conjunto reduzido de instruções no processador, enquanto os processadores CISC têm uma arquitetura mais complexa, que implementa em sua engenharia subcamadas de microcódigos e microinstruções."
        ],
        "correta": 4,
        "justificativa": "A principal diferença entre RISC (Reduced Instruction Set Computing) e CISC (Complex Instruction Set Computing) está na complexidade das instruções. RISC usa um conjunto reduzido de instruções simples e diretas, enquanto CISC implementa um conjunto maior de instruções complexas através de microcódigos. Cada abordagem tem suas vantagens e desvantagens em termos de desempenho e eficiência."
      },
      {
        "pergunta": "Qual alternativa define melhor o que vem a ser um processo ou tarefa dentro dos sistemas operacionais?",
        "respostas": [
          "Um programa que está aguardando para ser executado.",
          "Uma thread que foi subdividida em porções menores de código.",
          "Um programa que está em execução.",
          "Um subprograma que auxilia o processador.",
          "O agendamento de um programa para ser executado posteriormente."
        ],
        "correta": 2,
        "justificativa": "Um processo é um programa em execução. Ele inclui o código do programa, os dados que o programa está manipulando, a pilha de execução, o contador de programa e outros recursos necessários para sua execução. Um programa é apenas um arquivo executável, enquanto um processo é a instância em execução desse programa."
      },
      {
        "pergunta": "Qual das alternativas abaixo apresenta uma característica de um sistema operacional em batch?",
        "respostas": [
          "As memórias auxiliares trabalham de forma isolada ao processador, caracterizando um processamento em fila.",
          "O processador recebe um programa após o outro para serem processados em sequência.",
          "Os usuários alocavam o \"tempo de máquina\", quando cada processo era executado de forma concorrente com os outros.",
          "O carregamento desse tipo de sistema operacional se dava pelo arquivo \"autoexec.bat\".",
          "Todos os programas a serem executados são colocados em um buffer, sendo que o sistema operacional aloca tempos de processador para cada um deles de forma paralela."
        ],
        "correta": 1,
        "justificativa": "Sistemas em batch (lote) processam programas sequencialmente, um após o outro, sem interação do usuário durante a execução. Os programas são agrupados em lotes e processados em sequência, otimizando o uso do processador. Esta foi uma das primeiras formas de sistemas operacionais, desenvolvida para maximizar a utilização do processador."
      },
      {
        "pergunta": "Qual o único componente em uma arquitetura de hardware que possui mecanismos mecânicos?",
        "respostas": [
          "Memória ROM.",
          "CPU.",
          "Disco magnético.",
          "CMOS.",
          "Barramento."
        ],
        "correta": 2,
        "justificativa": "O disco magnético (HD - Hard Disk) é o único componente listado que possui partes mecânicas em movimento. Ele contém discos magnéticos que giram e cabeças de leitura/escrita que se movem para acessar diferentes áreas do disco. Todos os outros componentes são puramente eletrônicos, sem partes móveis."
      },
      {
        "pergunta": "Que tipo de sistema operacional é usado em aparelhos de DVD, TV ou em reprodutores de MP3?",
        "respostas": [
          "Embarcado.",
          "Multiusuário.",
          "Multitarefas.",
          "Monousuário.",
          "Tempo real."
        ],
        "correta": 0,
        "justificativa": "Sistemas operacionais embarcados (embedded) são projetados para funcionar em dispositivos específicos com recursos limitados. Eles são otimizados para realizar tarefas específicas e geralmente têm requisitos de tempo real. São usados em diversos dispositivos eletrônicos como DVD players, TVs, reprodutores de MP3, smartphones, etc."
      },
      {
        "pergunta": "A técnica de swapping é um dos métodos mais utilizados para gerenciar a sobrecarga da memória. Qual alternativa apresenta a forma como esta técnica funciona?",
        "respostas": [
          "O conteúdo dos registradores é espelhado em outra área ainda não alocada de memória.",
          "Os processos trocam informações de execução, determinando qual processo pode executar primeiro as suas instruções.",
          "O sistema operacional pega o conteúdo completo da memória e move para um arquivo no disco rígido.",
          "O swapping ocorre somente quando existe o esgotamento do uso da CPU, que, ao entrar em ação, limpa as instruções que não estão mais em uso.",
          "O swapping ocorre quando o disco rígido necessita agrupar os dados de um determinado aplicativo para que a leitura deste ocorra em série, aumentando o throughput."
        ],
        "correta": 2,
        "justificativa": "O swapping é uma técnica de gerenciamento de memória virtual onde o sistema operacional move processos inteiros da memória principal para o disco rígido (área de swap) quando a memória RAM está cheia, e os traz de volta quando necessário. Isso permite que o sistema execute mais processos do que caberia na memória física."
      },
      {
        "pergunta": "Assinale a alternativa que explica corretamente quando um determinado processo é terminado pela condição de \"erro fatal\":",
        "respostas": [
          "O erro fatal ocorre de forma involuntária, por parâmetros errados fornecidos por outros processos, aplicações ou pelo usuário.",
          "Acontece de forma involuntária, quando um determinado processo faz uma chamada de sistema determinando o encerramento de outro processo. Multiusuário.",
          "Ocorre quando um erro é causado pelo processo, normalmente por um erro de programação, de forma involuntária.",
          "Um erro fatal ocorre quando a execução termina e os recursos são liberados de forma voluntária.",
          "Ocorre voluntariamente quando um usuário submete um grande volume de processos, com os quais a CPU não pode lidar."
        ],
        "correta": 2,
        "justificativa": "Um erro fatal é um erro não recuperável que causa o término abrupto de um processo. Geralmente ocorre devido a erros de programação como acesso a memória inválida, divisão por zero, ou outras exceções não tratadas. É involuntário e pode resultar em perda de dados não salvos."
      },
      {
        "pergunta": "Assinale a alternativa que não apresenta um sistema operacional baseado no padrão Unix:",
        "respostas": [
          "LANtastic.",
          "HP-UX.",
          "Solaris.",
          "FreeBSD.",
          "Linux."
        ],
        "correta": 0,
        "justificativa": "LANtastic é um sistema operacional de rede proprietário da Artisoft, não baseado no Unix. Todos os outros são sistemas Unix-like: HP-UX (Hewlett-Packard), Solaris (Sun/Oracle), FreeBSD e Linux são todos derivados ou inspirados no Unix original."
      },
      {
        "pergunta": "Este termo descreve processos que ficam em background (segundo plano) com a finalidade de lidar com requisições, como, por exemplo, a abertura de uma sessão de transferência de arquivo (FTP). Assinale a alternativa que apresenta o nome correto deste termo:",
        "respostas": [
          "PID.",
          "Daemon.",
          "PCB.",
          "System Call.",
          "Child."
        ],
        "correta": 1,
        "justificativa": "Daemon (ou demônio) é um processo que roda em background, sem interação direta com o usuário, prestando serviços específicos. Exemplos incluem o daemon FTP para transferência de arquivos, o daemon HTTP para servidores web, e o daemon SSH para conexões seguras."
      },
      {
        "pergunta": "Leia a definição a seguir e assinale a alternativa que se refere a ela: Variável especial protegida (ou tipo abstrato de dados) que tem como função o controle de acesso a recursos compartilhados.",
        "respostas": [
          "Semáforos.",
          "Exclusão mútua.",
          "Região crítica.",
          "Monitores.",
          "Escalonamento."
        ],
        "correta": 0,
        "justificativa": "Semáforos são variáveis especiais usadas para controlar o acesso a recursos compartilhados entre processos. Eles implementam a exclusão mútua e são fundamentais para evitar condições de corrida. Um semáforo pode ter apenas dois valores (binário) ou múltiplos valores (contador)."
      },
      {
        "pergunta": "No tocante ao uso das CPUs e ao gerenciamento de processos, assinale a alternativa correta:",
        "respostas": [
          "A CPU é responsável pelo gerenciamento de todos os processos de um sistema.",
          "Um processo é executado de forma serial em uma CPU, desde o seu início até o seu término, independentemente do tempo de execução.",
          "Em sistemas com múltiplos processadores, faz-se necessária a alocação de processos em uma única CPU, que funcionará como distribuidora destes.",
          "Em sistemas com duas cores (equivalentes a duas CPUs), um mesmo processo ocupa, ao mesmo tempo, as CPUs.",
          "Uma CPU só pode executar um processo por vez."
        ],
        "correta": 4,
        "justificativa": "Em um sistema com uma única CPU, apenas um processo pode ser executado por vez. O sistema operacional gerencia a CPU através do escalonador de processos, que alterna entre diferentes processos para dar a impressão de execução simultânea (multitarefa). Em sistemas com múltiplas CPUs, cada CPU pode executar um processo diferente simultaneamente."
      },
      {
        "pergunta": "O Linux, na realidade, é apenas um kernel / núcleo do sistema operacional. Para se tornar efetivamente um sistema operacional completo, ele utiliza aplicativos de qual projeto?",
        "respostas": [
          "Ubuntu.",
          "GPL.",
          "Apache.",
          "GNU.",
          "System V."
        ],
        "correta": 3,
        "justificativa": "O Linux é apenas o kernel, enquanto o GNU fornece a maioria dos utilitários e ferramentas que compõem um sistema operacional completo. Por isso, muitos preferem chamar o sistema de GNU/Linux. O projeto GNU (GNU's Not Unix) foi iniciado por Richard Stallman para criar um sistema operacional livre baseado no Unix."
      },
      {
        "pergunta": "O que vem a ser uma \"condição de corrida\"?",
        "respostas": [
          "Situação em que dois ou mais processos querem partilhar um recurso ou, ainda, processos teoricamente simultâneos cujo resultado depende do escalonamento de processos.",
          "É o modo de assegurar que os processos sejam impedidos de usar uma variável ou um arquivo compartilhado que já estiver em uso por outro processo.",
          "É um processo similar ao funcionamento do protocolo de transporte TCP, que concorre com outras mensagens para a entrega e confirmação de recebimento.",
          "São processos relacionados, interagindo de maneira independente.",
          "A condição de corrida é caracterizada pela disputa de dois ou mais processos pelo uso do barramento."
        ],
        "correta": 0,
        "justificativa": "Uma condição de corrida ocorre quando o comportamento de um sistema depende da ordem relativa de execução de eventos em processos concorrentes. O resultado pode ser imprevisível e potencialmente problemático, pois depende do timing exato de quando cada processo acessa recursos compartilhados."
      },
      {
        "pergunta": "Qual a motivação do estudante Linus Torvalds ao ter a ideia de desenvolver o Linux?",
        "respostas": [
          "Criar um sistema operacional que pudesse competir comercialmente com o Windows.",
          "Tornar o Linux um padrão de kernel para sistemas operacionais de grande porte.",
          "Em virtude da extinção do sistema operacional DOS, fez-se necessário um outro sistema que pudesse servir de base para interfaces gráficas (GUI).",
          "A dificuldade na emulação de terminais do sistema Minix, desenvolvido pelo professor Andrew Tanenbaum.",
          "Linus Torvalds decidiu iniciar o desenvolvimento do Linux baseado no alto custo dos sistemas operacionais dos computadores da Apple, desenvolvendo uma alternativa a estes."
        ],
        "correta": 3,
        "justificativa": "Linus Torvalds começou a desenvolver o Linux em 1991 como um projeto pessoal para criar um kernel Unix-like que pudesse rodar em PCs com processadores Intel 80386. Sua motivação inicial foi a dificuldade em emular terminais no Minix, um sistema educacional desenvolvido por Andrew Tanenbaum."
      },
      {
        "pergunta": "Qual das opções abaixo não apresenta um tipo de distribuição Linux?",
        "respostas": [
          "Fedora.",
          "FreeBSD.",
          "Slackware.",
          "CentOS.",
          "Debian."
        ],
        "correta": 1,
        "justificativa": "FreeBSD não é uma distribuição Linux, mas sim um sistema operacional Unix-like independente. Todas as outras opções são distribuições Linux: Fedora (Red Hat), Slackware (uma das mais antigas), CentOS (baseado no Red Hat Enterprise Linux) e Debian (uma das maiores e mais influentes)."
      },
      {
        "pergunta": "A interface entre o sistema operacional e os dispositivos de entrada e saída (E/S) é feita por _________. Assinale a alternativa que completa corretamente a lacuna.",
        "respostas": [
          "Um driver.",
          "Um barramento.",
          "Uma controladora SAS.",
          "Um gerenciador de dispositivos.",
          "Um registrador."
        ],
        "correta": 0,
        "justificativa": "O driver é o software que faz a interface entre o sistema operacional e os dispositivos de hardware. Ele traduz os comandos do sistema operacional para instruções que o dispositivo pode entender, e vice-versa. Cada dispositivo de hardware precisa de seu próprio driver específico para funcionar corretamente com o sistema operacional."
      },
      {
        "pergunta": "Atualmente, sistemas baseados em thin clients vêm sendo muito adotados. Em que consiste exatamente um thin client?",
        "respostas": [
          "Um cliente magro (ou thin client) é um dispositivo de entrada e saída que armazena as informações localmente em um tipo de memória mais rápida do que a de discos rígidos convencionais.",
          "Thin clients são sistemas computacionais completos, com o diferencial de terem um sistema operacional específico, instalado em um computador central.",
          "São computadores com processador, placa de vídeo, disco rígido e sem dispositivos de entrada e saída, que ficam localizados centralmente.",
          "Thin clients são computadores que possuem um sistema operacional mínimo instalado, sem processador (que fica localizado no computador central) e todas as instruções são executadas em memória.",
          "São máquinas com capacidade limitada, com pouco software instalado localmente, que se comunicam com um computador central por meio do protocolo de rede."
        ],
        "correta": 4,
        "justificativa": "Um thin client é um computador com recursos limitados que depende principalmente de um servidor central para processamento. Ele possui hardware mínimo, pouco ou nenhum software instalado localmente, e se conecta a um servidor central via rede para executar aplicações e acessar dados. O processamento principal ocorre no servidor, enquanto o thin client serve principalmente como interface de usuário."
      },
      {
        "pergunta": "Conjunto de dados armazenados em um dispositivo físico não volátil, com um nome e/ou referência que permita sua localização futura. Esse é um conceito melhor aplicável a:",
        "respostas": [
          "Processos.",
          "Metadados.",
          "Arquivos.",
          "Partições.",
          "Gerenciadores de entrada e saída"
        ],
        "correta": 2,
        "justificativa": "Um arquivo é uma unidade lógica de armazenamento que contém dados, programas ou informações. Ele é armazenado em um dispositivo físico não volátil (como disco rígido) e possui um nome ou identificador que permite sua localização. Os arquivos são organizados em diretórios e são gerenciados pelo sistema de arquivos do sistema operacional."
      },
      {
        "pergunta": "Em sistemas baseados em Unix, qual usuário, na teoria, tem acesso irrestrito a todos os arquivos, independentemente de permissões de acesso?",
        "respostas": [
          "Master.",
          "Admin.",
          "Administrator.",
          "System.",
          "Root."
        ],
        "correta": 4,
        "justificativa": "O usuário 'root' é o superusuário em sistemas Unix/Linux. Ele possui privilégios administrativos completos e tem acesso irrestrito a todos os arquivos e recursos do sistema, independentemente das permissões de acesso definidas. O uso do root deve ser feito com cautela, pois operações realizadas como root podem afetar todo o sistema."
      },
      {
        "pergunta": "Em um computador no padrão PC, o espaço de cada dispositivo de armazenamento é dividido em uma pequena área inicial de configuração. Qual o nome dessa área?",
        "respostas": [
          "FAT - File Allocation Table",
          "MBR - Master Boot Record",
          "BIOS - Basic Input/Output System",
          "SCSI - Small Computer System Interface",
          "POST - Power-On Self-Test"
        ],
        "correta": 1,
        "justificativa": "O MBR (Master Boot Record) é uma pequena área no início do disco rígido que contém informações sobre as partições do disco e o código de inicialização do sistema operacional. É o primeiro setor do disco (setor 0) e é essencial para o processo de boot do computador. O MBR contém a tabela de partições e o código de bootstrap que carrega o sistema operacional."
      },
      {
        "pergunta": "O princípio fundamental de uma estrutura RAID é combinar vários discos rígidos físicos em uma estrutura lógica de discos, de forma a aumentar a confiabilidade e o desempenho do ambiente. Qual nível de RAID utiliza controle por paridades espalhadas pelos discos que o compõem?",
        "respostas": [
          "RAID 0.",
          "RAID 1.",
          "RAID 5.",
          "RAID 0+1.",
          "RAID 1+0."
        ],
        "correta": 2,
        "justificativa": "O RAID 5 utiliza paridade distribuída entre todos os discos do conjunto. A paridade é calculada e armazenada em diferentes discos, permitindo a recuperação de dados em caso de falha de um dos discos. Além disso, a distribuição da paridade melhora o desempenho em comparação com o RAID 4, que armazena a paridade em um único disco."
      },
      {
        "pergunta": "Qual das alternativas contém o item que não é considerado um dispositivo de entrada e saída?",
        "respostas": [
          "Scanner.",
          "Impressora.",
          "Disco Rígido.",
          "Processador.",
          "Teclado."
        ],
        "correta": 3,
        "justificativa": "O processador (CPU) não é um dispositivo de entrada e saída, mas sim o componente central de processamento do computador. Dispositivos de entrada e saída (E/S) são periféricos que permitem a interação entre o computador e o mundo externo. Scanner, impressora, disco rígido e teclado são todos dispositivos de E/S."
      },
      {
        "pergunta": "Quando um usuário pressiona ou libera uma tecla do computador, o que acontece imediatamente no sistema?",
        "respostas": [
          "É gerada uma interrupção de E/S.",
          "É enviada uma instrução para um dispositivo de saída, como um monitor.",
          "A memória do sistema libera espaço para armazenar essa nova instrução, realocando seu conteúdo.",
          "O controlador do teclado traduz essa informação, convertendo o caractere para uma sequência de 128 bits que é enviada para o sistema operacional.",
          "A instrução gerada é enviada para a memória, que vai armazenar essa informação para posterior envio a um dispositivo de saída."
        ],
        "correta": 0,
        "justificativa": "Quando uma tecla é pressionada ou liberada, o controlador do teclado gera uma interrupção de hardware (interrupção de E/S) que é enviada ao processador. O sistema operacional então trata essa interrupção, identifica qual tecla foi pressionada/liberada e toma as ações apropriadas, como exibir o caractere na tela ou executar uma função específica."
      },
      {
        "pergunta": "Sistemas de arquivo do tipo FAT têm como vantagens oferecer suporte a políticas de segurança; têm sido o principal tipo de sistema de arquivos da Microsoft adotado do DOS até o Windows Me. Qual opção abaixo melhor retrata o erro nesta afirmação?",
        "respostas": [
          "Sistemas de arquivo FAT perduram até hoje como opção-padrão em todas as versões do sistema operacional Windows.",
          "Sistemas de arquivo do tipo FAT não oferecem suporte a políticas de segurança.",
          "A afirmação refere-se ao sistema de arquivos NTFS.",
          "Somente na versão FAT32 é que se tornou possível o controle de acesso a arquivos.",
          "O sistema operacional em disco (DOS) originalmente não possuía suporte a FAT."
        ],
        "correta": 1,
        "justificativa": "O sistema de arquivos FAT (File Allocation Table) não oferece suporte nativo a políticas de segurança como controle de acesso baseado em usuários, criptografia ou auditoria. Essas funcionalidades foram introduzidas com o NTFS (New Technology File System), que se tornou o sistema de arquivos padrão a partir do Windows NT/2000. O FAT é um sistema de arquivos mais simples, sem recursos avançados de segurança."
      },
      {
        "pergunta": "Um sistema de armazenamento de arquivos pode conter milhões de arquivos que são organizados em estruturas hierárquicas denominadas ____________. Selecione a opção que preenche corretamente a lacuna.",
        "respostas": [
          "Memória flash.",
          "Storages.",
          "DNS.",
          "Diretórios.",
          "Biblioteca."
        ],
        "correta": 3,
        "justificativa": "Diretórios (ou pastas) são estruturas hierárquicas usadas para organizar arquivos em um sistema de arquivos. Eles permitem a criação de uma estrutura em árvore, onde cada diretório pode conter arquivos e subdiretórios. Esta organização facilita a localização e gerenciamento de arquivos, especialmente em sistemas com grande quantidade de dados."
      }
    ]
  }
];

// Função que simula o carregamento dos temas
async function carregarTemas() {
    return Promise.resolve(temas);
}