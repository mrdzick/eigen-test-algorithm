const { reverseString } = require('./1.js');

describe('Test 1', () => {
    it('should return EIGEN1', () => {
        // Arrange
        const input = 'NEGIE1';

        // Action
        const result = reverseString(input);

        // Assert
        expect(result).toBe('EIGEN1');
    })
});

