//Функция для проверки длины строки.
function checkingLengthString (text, maxLength) {
  return text.length <= maxLength;
}
checkingLengthString('Kekc', 20);

//Функция для проверки, является ли строка палиндромом
function checkingPalindrome (text) {
  const textWithoutSpace = text.replaceAll(' ', '');
  const textReverse = textWithoutSpace.split('').reverse().join('');
  return textWithoutSpace.toLowerCase() === textReverse.toLowerCase();
}
checkingPalindrome('Лёша на полке клопа нашёл ');
