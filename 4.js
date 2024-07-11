function diagonalDifference(matrix) {
    const N = matrix.length;

    let diagonal1Sum = 0;
    let diagonal2Sum = 0;

    for (let i = 0; i < N; i++) {
        diagonal1Sum += matrix[i][i];         
        diagonal2Sum += matrix[i][N - 1 - i]; 
    }

    return Math.abs(diagonal1Sum - diagonal2Sum);
}

module.exports = { diagonalDifference };
  