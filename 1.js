function reverseString(str) {
  const alphabets = str.replace(/[0-9]/g, '');
  const numbers = str.replace(/[^0-9]/g, '');

  const reversedAlphabets = alphabets.split('').reverse().join('');
  
  return reversedAlphabets + numbers;
}

module.exports = { reverseString };