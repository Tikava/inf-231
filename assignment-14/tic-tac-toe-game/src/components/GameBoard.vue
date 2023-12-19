<template>
    <div class="game-board">
        <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
            <div v-for="(cell, colIndex) in row" :key="colIndex" class="cell" @click="makeMove(rowIndex, colIndex)">
                {{ cell }}
            </div>
        </div>
        <button @click="reset">Restart</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            board: [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ],
            currentPlayer: 'X'
        };
    },
    methods: {
        makeMove(row, col) {
            if (this.board[row][col] === '') {
                this.board[row][col] = this.currentPlayer;
                if (this.checkWin()) {
                    alert(this.currentPlayer + ' wins!');
                    this.reset();
                } else if (this.board.flat().includes('')) {
                    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
                } else {
                    alert('Draw!');
                    this.reset();
                }
            }
        },
        checkWin() {
            const lines = [
                [this.board[0][0], this.board[0][1], this.board[0][2]],
                [this.board[1][0], this.board[1][1], this.board[1][2]],
                [this.board[2][0], this.board[2][1], this.board[2][2]],
                [this.board[0][0], this.board[1][0], this.board[2][0]],
                [this.board[0][1], this.board[1][1], this.board[2][1]],
                [this.board[0][2], this.board[1][2], this.board[2][2]],
                [this.board[0][0], this.board[1][1], this.board[2][2]],
                [this.board[0][2], this.board[1][1], this.board[2][0]]
            ];
            for (let line of lines) {
                if (line.every(cell => cell === 'X') || line.every(cell => cell === 'O')) {
                    return true;
                }
            }
            return false;
        },
        reset() {
            this.board = [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ];
            this.currentPlayer = 'X';
        }
    }
};
</script>
  
<style scoped>
.game-board {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.row {
    display: flex;
    justify-content: center;
}

.cell {
    width: 60px;
    height: 60px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
}
</style>
