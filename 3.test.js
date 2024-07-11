const { countOccurrences } = require('./3');

describe('Test 3', () => {
    it('should return the right count occurences', () => {
        // Arrange
        const input = ['xc', 'dz', 'bbb', 'dz'];
        const query = ['bbb', 'ac', 'dz'];

        // Action
        const result = countOccurrences(input, query);

        // Assert
        expect(result).toEqual([1, 0, 2]);
    })
});