// Selecionando elementos HTML usando IDs e classes
const board = document.getElementById("board"); // O tabuleiro do jogo
const cells = document.querySelectorAll(".cell"); // Todas as células do tabuleiro
const winnerDisplay = document.getElementById("winner"); // Exibição do vencedor

// Variáveis iniciais do jogo
let currentPlayer = "X"; // O jogador atual (inicia com 'X')
let gameBoard = ["", "", "", "", "", "", "", "", ""]; // Representação do tabuleiro
let gameActive = true; // Verifica se o jogo está ativo

// Matriz de combinações vencedoras
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Linhas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Colunas
  [0, 4, 8],
  [2, 4, 6], // Diagonais
];

// Função para lidar com o clique em uma célula
function handleCellClick(e) {
  const cell = e.target; // A célula que foi clicada
  const index = Array.from(cells).indexOf(cell); // Obtém o índice da célula clicada

  // Verifica se a célula já está ocupada ou o jogo não está mais ativo
  if (gameBoard[index] !== "" || !gameActive) return;

  gameBoard[index] = currentPlayer; // Atualiza o estado do tabuleiro
  cell.textContent = currentPlayer; // Exibe o símbolo do jogador na célula

  // Verifica se o jogador atual venceu
  if (checkWinner(currentPlayer)) {
    window.alert(`${currentPlayer} venceu!`)
    // winnerDisplay.textContent = `${currentPlayer} venceu!`;
    gameActive = false; // Desativa o jogo
  } else if (gameBoard.every((cell) => cell !== "")) {
    // winnerDisplay.textContent = "Empate!";
    window.alert("Deu velha")
    gameActive = false; // Desativa o jogo em caso de empate
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X"; // Troca o jogador
  }
}

// Função para verificar se um jogador venceu
function checkWinner(player) {
  return winningCombos.some((combination) => {
    return combination.every((index) => {
      return gameBoard[index] === player;
    });
  });
}

// Função para iniciar um novo jogo
function startGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""]; // Limpa o tabuleiro
  currentPlayer = "X"; // Reinicia o jogador atual
  gameActive = true; // Ativa o jogo
  winnerDisplay.textContent = ""; // Limpa a exibição do vencedor
  cells.forEach((cell) => {
    cell.textContent = ""; // Limpa o conteúdo das células
  });
}

// Adiciona um evento de clique a cada célula
cells.forEach((cell) => cell.addEventListener("click", handleCellClick));

// Inicia o jogo quando a página é carregada
startGame();
