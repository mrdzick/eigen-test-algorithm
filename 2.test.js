const { longest } = require('./2');

describe('Test 2', () => {
    it('should return the longest sentence', () => {
        // Arrange
        const input = 'Saya sangat senang mengerjakan soal algoritma';

        // Action
        const result = longest(input);

        // Assert
        expect(result).toBe('mengerjakan: 11 character');
    });
});