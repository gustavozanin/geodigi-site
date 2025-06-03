// Função para carregar o conteúdo na área principal com base no ID da seção
function loadContent(sectionId) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = ''; // Limpa o conteúdo atual da área

    // Conteúdo para a seção "Bem-vindo"
    if (sectionId === 'bem-vindo') {
        contentArea.innerHTML = `
            <div class="text-center py-12">
                <h2 class="text-5xl font-extrabold text-blue-700 mb-6">Bem-vindo ao nosso Espaço Geográfico Digital!</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Neste espaço, vamos mergulhar em uma nova jornada cheia de estudo e diversão. Será uma experiência incrível e repleta de aprendizado sobre o nosso mundo!
                </p>
                <img src="https://placehold.co/600x300/e0f2fe/0288d1?text=GEODIGI+Bem-vindo" alt="Imagem de boas-vindas GEODIGI" class="mx-auto mt-8 rounded-lg shadow-lg">
            </div>
        `;
    }
    // Conteúdo para a seção "Educação para Riscos"
    else if (sectionId === 'educacao-riscos') {
        contentArea.innerHTML = `
            <div class="space-y-8">
                <h2 class="text-4xl font-bold text-blue-700 mb-4">Educação para Riscos</h2>
                <p class="text-lg text-gray-700">Esta seção é dedicada à compreensão dos riscos ambientais e como podemos nos preparar e agir.</p>

                <!-- Seção de Observação de Imagens -->
                <div class="bg-blue-50 p-6 rounded-lg shadow-md">
                    <h3 class="text-2xl font-semibold text-blue-800 mb-4">VAMOS OBSERVAR AS IMAGENS</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div class="relative bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                            <img src="https://placehold.co/300x200/a7f3d0/059669?text=Enchente" alt="Imagem de enchente" class="w-full h-48 object-cover rounded-md mb-3">
                            <div class="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1 shadow-md">
                                <!-- Ícone de fixação (pin) em SVG -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2.5a.5.5 0 001 0V7a6 6 0 00-12 0v2.5a.5.5 0 001 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <p class="text-sm text-gray-600 text-center">Enchente em área urbana</p>
                        </div>
                        <div class="relative bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                            <img src="https://placehold.co/300x200/fecaca/dc2626?text=Deslizamento" alt="Imagem de deslizamento" class="w-full h-48 object-cover rounded-md mb-3">
                            <div class="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1 shadow-md">
                                <!-- Ícone de fixação (pin) em SVG -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2.5a.5.5 0 001 0V7a6 6 0 00-12 0v2.5a.5.5 0 001 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <p class="text-sm text-gray-600 text-center">Deslizamento de terra</p>
                        </div>
                        <div class="relative bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                            <img src="https://placehold.co/300x200/bfdbfe/2563eb?text=Seca" alt="Imagem de seca" class="w-full h-48 object-cover rounded-md mb-3">
                            <div class="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1 shadow-md">
                                <!-- Ícone de fixação (pin) em SVG -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2.5a.5.5 0 001 0V7a6 6 0 00-12 0v2.5a.5.5 0 001 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <p class="text-sm text-gray-600 text-center">Região afetada pela seca</p>
                        </div>
                    </div>
                    <div class="text-center mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <p class="text-xl font-medium text-yellow-800">Vamos refletir...</p>
                        <p class="text-lg text-gray-700 mt-2">QUAIS SÃO AS CAUSAS E CONSEQUÊNCIAS PRESENTES NAS IMAGENS ACIMA?</p>
                        <textarea class="w-full p-3 mt-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" rows="4" placeholder="Escreva suas reflexões aqui..."></textarea>
                    </div>
                </div>

                <!-- Seção de Vídeo (placeholder) -->
                <div class="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 class="text-2xl font-semibold text-green-800 mb-4">Entendendo os Riscos (Vídeo)</h3>
                    <div class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                        <!-- Placeholder para incorporar vídeo do YouTube. Substitua o 'src' pelo link do seu vídeo. -->
                        <iframe class="w-full h-96" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdefg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p class="text-sm text-gray-500 mt-2 text-center">Assista a este vídeo para aprofundar seu conhecimento sobre riscos ambientais.</p>
                    </div>
                </div>

                <!-- Seção de Gamificação (Quiz) -->
                <div class="bg-purple-50 p-6 rounded-lg shadow-md">
                    <h3 class="text-2xl font-semibold text-purple-800 mb-4">Teste Seu Conhecimento - Quiz sobre Riscos</h3>
                    <div id="quiz-container" class="space-y-4">
                        <p id="question-text" class="text-xl font-medium text-gray-800"></p>
                        <div id="options-container" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <!-- As opções do quiz serão carregadas aqui pelo JavaScript -->
                        </div>
                        <button id="next-button" class="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out">Próxima Pergunta</button>
                        <p id="feedback-text" class="text-lg mt-4"></p>
                        <p id="score-text" class="text-xl font-bold text-green-700 mt-4 hidden">Sua pontuação: <span id="current-score">0</span>/<span id="total-questions">0</span></p>
                    </div>
                </div>
            </div>
        `;
        // Inicializa o quiz após o conteúdo da seção ser carregado
        initializeQuiz();
    }
    // Conteúdo para outras seções (placeholders)
    else {
        contentArea.innerHTML = `
            <div class="text-center py-12">
                <h2 class="text-4xl font-bold text-gray-700 mb-4">${sectionId.replace(/-/g, ' ').toUpperCase()}</h2>
                <p class="text-lg text-gray-600">Conteúdo para a seção "${sectionId.replace(/-/g, ' ')}" será adicionado aqui em breve!</p>
                <img src="https://placehold.co/600x300/cccccc/333333?text=Em+Construção" alt="Página em construção" class="mx-auto mt-8 rounded-lg shadow-lg">
            </div>
        `;
    }
}

// Dados do Quiz: perguntas, opções e resposta correta
const quizQuestions = [
    {
        question: "O que é um risco ambiental?",
        options: [
            "Um evento natural que não causa danos.",
            "A probabilidade de um evento natural ou antrópico causar danos a pessoas e bens.",
            "Apenas a poluição do ar.",
            "Um tipo de clima."
        ],
        correctAnswer: "A probabilidade de um evento natural ou antrópico causar danos a pessoas e bens."
    },
    {
        question: "Qual a importância da 'Educação para o Risco'?",
        options: [
            "Não tem importância, pois desastres são inevitáveis.",
            "Apenas para informar sobre desastres passados.",
            "Desenvolver a percepção do risco e competências para a tomada de decisão, promovendo a prevenção.",
            "Ensinar a construir casas em áreas de risco."
        ],
        correctAnswer: "Desenvolver a percepção do risco e competências para a tomada de decisão, promovendo a prevenção."
    },
    {
        question: "O que significa vulnerabilidade em relação a riscos?",
        options: [
            "Ser imune a qualquer desastre.",
            "A capacidade de uma comunidade se recuperar rapidamente de um desastre.",
            "A suscetibilidade de uma comunidade ou sistema a ser afetado negativamente por um perigo.",
            "A abundância de recursos naturais em uma área."
        ],
        correctAnswer: "A suscetibilidade de uma comunidade ou sistema a ser afetado negativamente por um perigo."
    }
];

let currentQuestionIndex = 0; // Índice da pergunta atual
let score = 0; // Pontuação do usuário

// Variáveis para referenciar elementos do DOM do quiz
let questionText, optionsContainer, nextButton, feedbackText, scoreText, currentScoreSpan, totalQuestionsSpan;

// Função para inicializar o quiz, obtendo referências aos elementos e carregando a primeira pergunta
function initializeQuiz() {
    questionText = document.getElementById('question-text');
    optionsContainer = document.getElementById('options-container');
    nextButton = document.getElementById('next-button');
    feedbackText = document.getElementById('feedback-text');
    scoreText = document.getElementById('score-text');
    currentScoreSpan = document.getElementById('current-score');
    totalQuestionsSpan = document.getElementById('total-questions');

    // Adiciona o event listener para o botão "Próxima Pergunta"
    if (nextButton) {
        nextButton.addEventListener('click', nextQuestion);
    }
    
    totalQuestionsSpan.textContent = quizQuestions.length; // Exibe o total de perguntas
    loadQuestion(); // Carrega a primeira pergunta
}

// Função para carregar uma nova pergunta ou finalizar o quiz
function loadQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const question = quizQuestions[currentQuestionIndex];
        questionText.textContent = question.question; // Atualiza o texto da pergunta
        optionsContainer.innerHTML = ''; // Limpa as opções anteriores
        feedbackText.textContent = ''; // Limpa o feedback
        nextButton.style.display = 'none'; // Esconde o botão "Próxima Pergunta" até uma opção ser selecionada

        // Cria botões para cada opção de resposta
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'bg-blue-200 text-blue-800 py-3 px-4 rounded-lg shadow-sm hover:bg-blue-300 transition duration-200 ease-in-out text-left';
            button.onclick = () => selectAnswer(option, question.correctAnswer, button); // Adiciona o evento de clique
            optionsContainer.appendChild(button);
        });
    } else {
        showFinalScore(); // Se todas as perguntas foram respondidas, mostra a pontuação final
    }
}

// Função para lidar com a seleção de uma resposta
function selectAnswer(selectedOption, correctAnswer, clickedButton) {
    // Desabilita todos os botões de opção após a seleção para evitar múltiplas escolhas
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
        button.classList.remove('hover:bg-blue-300'); // Remove o efeito hover
    });

    // Verifica se a resposta selecionada está correta e atualiza o feedback e a pontuação
    if (selectedOption === correctAnswer) {
        feedbackText.textContent = 'Correto!';
        feedbackText.className = 'text-lg mt-4 text-green-600 font-semibold';
        score++; // Incrementa a pontuação
        clickedButton.classList.add('bg-green-300', 'border-green-500'); // Destaca a resposta correta
    } else {
        feedbackText.textContent = 'Incorreto. A resposta correta era: ' + correctAnswer;
        feedbackText.className = 'text-lg mt-4 text-red-600 font-semibold';
        clickedButton.classList.add('bg-red-300', 'border-red-500'); // Destaca a resposta incorreta
        // Encontra e destaca a resposta correta se a selecionada foi incorreta
        Array.from(optionsContainer.children).forEach(button => {
            if (button.textContent === correctAnswer) {
                button.classList.add('bg-green-300', 'border-green-500');
            }
        });
    }
    nextButton.style.display = 'block'; // Mostra o botão "Próxima Pergunta"
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++; // Incrementa o índice da pergunta
    currentScoreSpan.textContent = score; // Atualiza a pontuação exibida
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion(); // Carrega a próxima pergunta
    } else {
        showFinalScore(); // Se não há mais perguntas, mostra a pontuação final
    }
}

// Função para exibir a pontuação final do quiz
function showFinalScore() {
    questionText.textContent = 'Quiz Concluído!';
    optionsContainer.innerHTML = ''; // Limpa as opções
    feedbackText.textContent = ''; // Limpa o feedback
    nextButton.style.display = 'none'; // Esconde o botão "Próxima Pergunta"
    scoreText.classList.remove('hidden'); // Mostra o texto da pontuação
    scoreText.innerHTML = `Sua pontuação final: <span class="font-bold text-blue-700">${score}</span> de <span class="font-bold text-blue-700">${quizQuestions.length}</span>`;

    // Adiciona um botão para reiniciar o quiz
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Reiniciar Quiz';
    restartButton.className = 'mt-6 bg-purple-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-200 ease-in-out';
    restartButton.onclick = restartQuiz; // Adiciona o evento de clique para reiniciar
    optionsContainer.appendChild(restartButton);
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0; // Reseta o índice da pergunta
    score = 0; // Reseta a pontuação
    scoreText.classList.add('hidden'); // Esconde o texto da pontuação
    loadQuestion(); // Carrega a primeira pergunta novamente
}

// Carrega o conteúdo inicial ("Bem-vindo") quando a página é completamente carregada
document.addEventListener('DOMContentLoaded', () => {
    loadContent('bem-vindo');
});
