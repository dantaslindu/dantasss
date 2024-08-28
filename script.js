const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Lucas é um jovem de 17 anos que sonha em ser jogador de futebol profissional. No entanto, ele vem de uma família humilde e sente a pressão de começar a trabalhar para ajudar em casa. Ele precisa decidir o que fazer:",
        alternativas: [
            {
                texto: "Focar nos treinos de futebol, acreditando que um dia será descoberto por um grande clube.",
                afirmacao: "Lucas decide se dedicar totalmente ao futebol, treinando todos os dias com a esperança de ser notado por um olheiro."
            },
            {
                texto: "Procurar um emprego para ajudar sua família, deixando os treinos de futebol para o tempo livre.",
                afirmacao: "Lucas começa a procurar emprego, determinado a apoiar sua família financeiramente, mesmo que isso signifique menos tempo para treinar."
            }
        ]
    },
    {
        enunciado: "Após tomar sua decisão, Lucas recebe uma oferta inesperada: um olheiro de um time local o convida para um teste, mas ele também é chamado para uma entrevista de emprego em uma empresa que paga bem. Ele precisa escolher:",
        alternativas: [
            {
                texto: "Participar do teste de futebol, acreditando que esta é sua grande chance de se tornar um jogador profissional.",
                afirmacao: "Lucas decide ir ao teste, determinado a dar o melhor de si e provar que tem talento para o futebol profissional."
            },
            {
                texto: "Ir à entrevista de emprego, pensando na estabilidade financeira que o trabalho pode oferecer à sua família.",
                afirmacao: "Lucas opta por ir à entrevista, considerando que um emprego fixo poderia resolver muitos problemas em casa."
            }
        ]
    },
    {
        enunciado: "Após o teste/entrevista, Lucas se vê em uma situação difícil: ele passou no teste de futebol, mas a empresa também ofereceu o emprego. Agora, ele deve decidir qual caminho seguir:",
        alternativas: [
            {
                texto: "Aceitar a oferta do time de futebol e se dedicar inteiramente à carreira esportiva.",
                afirmacao: "Lucas aceita a oferta do time, começando a treinar como jogador profissional, mesmo sabendo dos riscos e incertezas da carreira."
            },
            {
                texto: "Aceitar o emprego na empresa, garantindo um salário fixo e mais segurança para sua família.",
                afirmacao: "Lucas decide aceitar o emprego, garantindo uma renda estável, mas deixando o sonho de ser jogador de futebol de lado."
            }
        ]
    },
    {
        enunciado: "Enquanto se ajusta à sua nova vida como jogador/trabalhador, Lucas enfrenta um novo desafio: seu desempenho no futebol é promissor, mas exige muito tempo e energia, o que afeta sua vida pessoal e profissional. Ele deve decidir como equilibrar sua vida:",
        alternativas: [
            {
                texto: "Dobrar seus esforços no futebol, na esperança de ser promovido a um clube maior, mesmo que isso sacrifique seu tempo pessoal.",
                afirmacao: "Lucas se concentra ainda mais no futebol, dedicando todo o seu tempo ao esporte, determinado a alcançar o sucesso."
            },
            {
                texto: "Equilibrar o trabalho com os treinos, aceitando que talvez não consiga se destacar tanto no futebol.",
                afirmacao: "Lucas tenta equilibrar o trabalho e o futebol, ciente de que isso pode limitar suas chances de crescer em ambas as áreas."
            }
        ]
    },
    {
        enunciado: "Após enfrentar diversos desafios, Lucas é confrontado com uma última escolha: uma oportunidade de se mudar para outra cidade para jogar em um clube maior surge, mas ele teria que deixar sua família e o emprego estável para trás. Ele deve decidir:",
        alternativas: [
            {
                texto: "Mudar-se para a outra cidade e perseguir seu sonho no futebol, mesmo que isso signifique se afastar da família e da segurança do emprego.",
                afirmacao: "Lucas decide se mudar e seguir seu sonho, determinado a alcançar o sucesso no futebol, independentemente dos sacrifícios."
            },
            {
                texto: "Ficar com sua família e manter o emprego, aceitando que o futebol pode ser apenas uma paixão e não uma carreira.",
                afirmacao: "Lucas decide ficar, priorizando a estabilidade e o bem-estar de sua família, mesmo que isso signifique deixar o sonho de ser jogador de futebol para trás."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPergunta() {
    if (atual >= perguntas.length) {
        mostrarResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostrarAlternativas();
}

function mostrarAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click" , () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
};

function respostaSelecionada(opcoesSelecionadas){
    const afirmacoes = opcoesSelecionadas.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPergunta();
}

function mostrarResultado() {
    caixaPerguntas.textContent = "Então "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostrarPergunta();