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

function IsWorkTime(startWorkTime, endWorkTime, startMeetingTime, lengthMeeting) {
  function getMinuts(timeStr) {
    const arrayTime = timeStr.split(':');
    const minuts = Number(arrayTime[0]) * 60 + Number(arrayTime[1]);
    return minuts;
  }

  if (getMinuts(startMeetingTime) >= getMinuts(startWorkTime) && (getMinuts(startMeetingTime) + lengthMeeting) <= getMinuts(endWorkTime)) {
    return true;
  }
  return false;
}

IsWorkTime('08:00', '17:30', '14:00', 90);
