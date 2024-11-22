// Seleciona o contêiner onde os veículos serão exibidos
const exibirVeiculos = document.getElementById("exibirVeiculos"); 

const tempoPorPorcentagem = 5; // Segundos necessários para carregar 1%

//pega os dado da API
async function fetchVeiculos() {
    try {
        const response = await fetch("http://localhost:3000/veiculos");
        const veiculos = await response.json();
        inicializarVeiculos(veiculos);
    } catch (error) {
        console.error("Erro ao buscar veículos:", error);
    }
}

// Função para criar a interface de um veículo
function createVehicleElement(veiculo) {

    //Nome do veículo
    const veiculoDiv = document.createElement("div");
    veiculoDiv.className = "veiculo";

    const name = document.createElement("div");
    name.textContent = veiculo.name;
    //Modelo do veículo
    const modelo = document.createElement("div");
    modelo.textContent = `Modelo: ${veiculo.modelo}`;
    modelo.style.color = "black";
    //Monitora o progesso do carregamento
    const progressBarContainer = document.createElement("div");
    progressBarContainer.className = "progress-bar";

    const progressBar = document.createElement("div");
    progressBar.className = "progress";
    progressBar.style.width = `${veiculo.carga}%`;

    const progressText = document.createElement("div");
    progressText.className = "progress-text";
    progressText.textContent = `${veiculo.carga}%`;

    const timeRemaining = document.createElement("div");
    timeRemaining.className = "time-remaining";
    timeRemaining.textContent = calculateTimeRemaining(veiculo.carga);

    progressBarContainer.appendChild(progressBar);
    veiculoDiv.appendChild(name); // Adiciona o nome na interface
    veiculoDiv.appendChild(modelo); // Adiciona o modelo na interface
    veiculoDiv.appendChild(progressBarContainer); //Barra de progresso
    veiculoDiv.appendChild(progressText); // Texto da barra de carregamento
    veiculoDiv.appendChild(timeRemaining); // Texto de tempo que falta para a carga completa

    return { element: veiculoDiv, progressBar, progressText, timeRemaining };
}

// Função para calcular o tempo restante
function calculateTimeRemaining(cargaAtual) {
    if (cargaAtual >= 100) return "Carga completa!";
    const porcentagemRestante = 100 - cargaAtual;
    const tempoRestante = porcentagemRestante * tempoPorPorcentagem;
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    return `Tempo restante: ${minutos}m ${segundos}s`;
}

// Função para inicializar a interface
function inicializarVeiculos(veiculos) {
    const vehicleElements = veiculos.map((veiculo) => {
        const { element, progressBar, progressText, timeRemaining } = createVehicleElement(veiculo);
        exibirVeiculos.appendChild(element);
        return { progressBar, progressText, timeRemaining, veiculo };
    });

    // Atualiza os status a cada 5 segundos
    setInterval(() => updateVehicleCharge(vehicleElements), 5000);
}

// Função para atualizar a carga dos veículos
function updateVehicleCharge(vehicleElements) {
    vehicleElements.forEach(({ progressBar, progressText, timeRemaining, veiculo }) => {
        if (veiculo.carga < 100) {
            veiculo.carga += 1; // Simula o carregamento
            progressBar.style.width = `${veiculo.carga}%`;
            progressText.textContent = `${veiculo.carga}%`;
            timeRemaining.textContent = calculateTimeRemaining(veiculo.carga);
        } else {
            timeRemaining.textContent = "Carga completa!";
        }
    });
}

fetchVeiculos();