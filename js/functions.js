//Функция для проверки длины строки.
const checkingLengthString = (text, maxLength) => text.length <= maxLength;
checkingLengthString('Kekc', 20);

//Функция для проверки, является ли строка палиндромом
const checkingPalindrome = (text) => {
  const textWithoutSpace = text.toLowerCase().replaceAll(' ', '');
  const textReverse = textWithoutSpace.split('').reverse().join('');
  return textWithoutSpace === textReverse.toLowerCase();
};
checkingPalindrome('Лёша на полке клопа нашёл ');
