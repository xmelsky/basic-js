module.exports = function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition,
    additionRepeatTimes = 0,
    additionSeparator = "|"
  } = {}
) {
  str = str && str.toString();
  addition = addition && addition.toString();
  let result = "";
  for (let i = repeatTimes; i > 0; i--) {
    result += str;
    for (let y = additionRepeatTimes; y > 0; y--) {
      result += addition + (y - 1 > 0 ? additionSeparator : "");
    }
    result += i - 1 > 0 ? separator : "";
  }
  result += !additionRepeatTimes && addition ? addition : "";
  return result;
};
