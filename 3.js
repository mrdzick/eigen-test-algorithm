function countOccurrences(input, query) {
    const frequencyMap = {};
  
    for (const word of input) {
      frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    }
  
    const result = [];
  
    for (const word of query) {
      result.push(frequencyMap[word] || 0);
    }
  
    return result;
  }

module.exports = { countOccurrences };
  