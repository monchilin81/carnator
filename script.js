document.addEventListener('DOMContentLoaded', () => {
    const questionTextElement = document.getElementById('question-text');
    const optionsContainerElement = document.getElementById('options-container');
    const resultAreaElement = document.getElementById('result-area');
    const carImageElement = document.getElementById('car-image');
    const carNameElement = document.getElementById('car-name');
    const carDescriptionElement = document.getElementById('car-description');
    const restartButtonElement = document.getElementById('restart-button');
    const progressBarElement = document.getElementById('progress-bar');
    const questionCounterElement = document.getElementById('question-counter');

    let decisionTree;
    let currentNode;
    let questionPath = [];
    let totalEstimatedQuestions = 0; // Will be estimated later

    async function loadDecisionTree() {
        try {
            const response = await fetch('decision_tree.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            decisionTree = await response.json();
            totalEstimatedQuestions = estimateTotalQuestions(decisionTree);
        } catch (error) {
            console.error('Error loading decision tree:', error);
            questionTextElement.textContent = 'Error al cargar las preguntas. Por favor, inténtalo de nuevo más tarde.';
        }
    }

    function estimateTotalQuestions(node) {
        if (!node || !node.options) return 1;
        let maxDepth = 0;
        for (const key in node.options) {
            if (node.options.hasOwnProperty(key)) {
                maxDepth = Math.max(maxDepth, estimateTotalQuestions(node.options[key]));
            }
        }
        return 1 + maxDepth;
    }

    function startGame() {
        currentNode = decisionTree;
        questionPath = [];
        resultAreaElement.style.display = 'none';
        optionsContainerElement.style.display = 'block';
        questionTextElement.style.display = 'block';
        restartButtonElement.style.display = 'none';
        displayQuestion();
    }

    function displayQuestion() {
        if (currentNode.result) {
            displayResult(currentNode.result);
            return;
        }

        questionPath.push(currentNode);
        questionTextElement.textContent = currentNode.question;
        optionsContainerElement.innerHTML = ''; // Clear previous options

        const options = currentNode.options;
        for (const optionText in options) {
            if (options.hasOwnProperty(optionText)) {
                const button = document.createElement('button');
                button.textContent = optionText;
                button.addEventListener('click', () => handleAnswer(optionText));
                
                // Add classes for styling based on common answers
                if (optionText.toLowerCase() === 'sí' || optionText.toLowerCase() === 'si') {
                    button.classList.add('option-yes');
                } else if (optionText.toLowerCase() === 'no') {
                    button.classList.add('option-no');
                } else if (optionText.toLowerCase() === 'a veces') {
                    button.classList.add('option-sometimes');
                }

                optionsContainerElement.appendChild(button);
            }
        }
        updateProgress();
    }

    function handleAnswer(optionText) {
        if (currentNode.options && currentNode.options[optionText]) {
            currentNode = currentNode.options[optionText];
            displayQuestion();
        } else {
            console.error('Invalid option or path in decision tree:', optionText, currentNode);
            questionTextElement.textContent = 'Ha ocurrido un error en la lógica del juego.';
        }
    }

    function displayResult(result) {
        questionTextElement.style.display = 'none';
        optionsContainerElement.style.display = 'none';
        resultAreaElement.style.display = 'block';
        
        carNameElement.textContent = result.car_name;
        carDescriptionElement.textContent = result.description;
        // Assuming images are in an 'images' folder relative to index.html
        // If image_url is a full path or different structure, adjust this.
        carImageElement.src = `images/${result.image_url}`; 
        carImageElement.alt = result.car_name;

        restartButtonElement.style.display = 'block';
        progressBarElement.style.width = '100%';
        questionCounterElement.textContent = `Resultado final`;
    }

    function updateProgress() {
        const currentQuestionNumber = questionPath.length;
        // A more accurate total questions might be the depth of the current path to the deepest leaf
        // For simplicity, using the initial estimate or a fixed number if estimate is hard.
        // The current estimation is the max depth, which might not be accurate for all paths.
        const progressPercentage = totalEstimatedQuestions > 0 ? (currentQuestionNumber / totalEstimatedQuestions) * 100 : 0;
        progressBarElement.style.width = `${Math.min(progressPercentage, 100)}%`;
        questionCounterElement.textContent = `Pregunta ${currentQuestionNumber} de ~${totalEstimatedQuestions}`;
    }

    restartButtonElement.addEventListener('click', startGame);

    // Initialize the game
    async function initGame() {
        await loadDecisionTree();
        if (decisionTree) {
            startGame();
        }
    }

    initGame();
});

