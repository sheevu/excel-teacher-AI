document.getElementById('talkToAI').addEventListener('click', () => {
    document.getElementById('aiSection').classList.remove('hidden');
    document.getElementById('formulaSection').classList.add('hidden');
    document.getElementById('talkToAI').classList.add('active');
    document.getElementById('formulaGenerator').classList.remove('active');
});

document.getElementById('formulaGenerator').addEventListener('click', () => {
    document.getElementById('formulaSection').classList.remove('hidden');
    document.getElementById('aiSection').classList.add('hidden');
    document.getElementById('formulaGenerator').classList.add('active');
    document.getElementById('talkToAI').classList.remove('active');
});

document.getElementById('submitAI').addEventListener('click', async () => {
    const question = document.getElementById('aiInput').value;
    const response = await fetchAIResponse(question);
    document.getElementById('aiResponse').innerText = response;
});

document.getElementById('submitFormula').addEventListener('click', async () => {
    const description = document.getElementById('formulaInput').value;
    const response = await generateFormula(description);
    document.getElementById('formulaResponse').innerText = response;
});

async function fetchAIResponse(question) {
    console.log("Fetching AI response for:", question);
    // Call OpenAI API to get the response
    return `Response to: ${question}`;
}

async function generateFormula(description) {
    console.log("Generating formula for:", description);
    // Call OpenAI API to generate formula
    return `Formula for: ${description}`;
}
