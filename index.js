
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let currentPlayerTurn = document.getElementById('currentPlayer');
    let winMessage = document.getElementById('win');

    currentPlayerTurn.innerHTML=currentPlayer;
    cells.forEach(cell => {
      cell.addEventListener('click', handleCellClick);
    });
  
    function handleCellClick(event) {
      const index = event.target.getAttribute('data-index');
      if (gameBoard[index] === '' && !checkWinner()) 
      {
        gameBoard[index] = currentPlayer;
        event.target.innerHTML = currentPlayer;
        
        if (checkWinner()) 
        {
            winMessage.innerHTML = `Player ${currentPlayer} wins!`;
        } else if (gameBoard.every(cell => cell !== '')) {
            winMessage.innerHTML = 'It\'s a draw!';
        }
        else{
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        currentPlayerTurn.innerHTML = currentPlayer;
        }
      }
    }
  
    function checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
  
      return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
      });
    }
  
    function resetGame() {
      gameBoard = ['', '', '', '', '', '', '', '', ''];
      currentPlayer = 'X';
      currentPlayerTurn.innerHTML=currentPlayer;
      winMessage.innerHTML='';
      // Clear the board
      cells.forEach(cell => {
        cell.innerHTML = '';
      });
    }

    function reset()
    {
        resetGame();
    }
  