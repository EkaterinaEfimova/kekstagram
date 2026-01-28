function isCorrectStr(str, length) {
  if (str.length <= length) {
    return true;
  }
  return false;
}

isCorrectStr('проверяемая строка', 22);

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

function parseIntInString(str) {
  const newStr = str.toString();
  let result = '';
  for (let i = 0; i < newStr.length; i++) {
    if (!Number.isNaN(parseInt(newStr[i], 10))) {
      result += newStr[i];
    }
  }
  if (result.length === 0) {
    result = NaN;
    return result;
  }
  return parseInt(result, 10);
}

parseIntInString('2023 год');
