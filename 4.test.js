const { diagonalDifference } = require('./4.js');

describe('Test 4', () => {
    it('should return the right diagonal difference', () => {
        // Arrange
        const input = [
            [1, 2, 0],
            [4, 5, 6],
            [7, 8, 9]
        ];

        // Action
        const result = diagonalDifference(input);

        // Assert
        expect(result).toBe(3);
    });
});