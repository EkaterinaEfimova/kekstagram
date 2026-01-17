//Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы
console.log('Функция определения корректности строки');

function isCorrectStr(str, length) {
  if (str.length <= length) {
    return true;
  }
  return false;
}
isCorrectStr('проверяемая строка', 22);

console.log(`Ожидаю получить: true; получаю ${isCorrectStr('проверяемая строка', 20)}`);

console.log(`Ожидаю получить: true; получаю ${isCorrectStr('проверяемая строка', 18)}`);

console.log(`Ожидаю получить: false; получаю ${isCorrectStr('проверяемая строка', 10)}`);

//Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
console.log('Функция определения палиндрома');

function isPalindrome(str) {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

isPalindrome('топот');

console.log(`Ожидаю получить: true; получаю ${isPalindrome('топот')}`);

console.log(`Ожидаю получить: true; получаю ${isPalindrome(('ДовОд'))}`);

console.log(`Ожидаю получить: false; получаю ${isPalindrome('Кекс')}`);

console.log(`Ожидаю получить: true; получаю ${isPalindrome('Лёша на полке клопа нашёл ')}`);
console.log('Лёша на полке клопа нашёл '.replaceAll(' ', '').toLowerCase());


//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN

console.log('Функция извлечения цифр из строки');

function parseIntInString(str) {
  let newStr = str.toString();
  let result = '';
  for (let i = 0; i < newStr.length; i++) {
    if (!Number.isNaN(parseInt(newStr[i]))) {
      result += newStr[i];
    }
  }
  if (result.length === 0) {
    result = NaN;
    return result;
  }
  return parseInt(result);
}

parseIntInString('2023 год');

console.log(`Ожидаю получить: 2023; получаю: ${parseIntInString('2023 год')}`);

console.log(`Ожидаю получить: 2022; получаю: ${parseIntInString('ECMAScript 2022')}`);

console.log(`Ожидаю получить: 105; получаю: ${parseIntInString('1 кефир, 0.5 батона')}`);

console.log(`Ожидаю получить: 7; получаю: ${parseIntInString('агент 007')}`);

console.log(`Ожидаю получить: NaN; получаю: ${parseIntInString('а я томат')}`);
