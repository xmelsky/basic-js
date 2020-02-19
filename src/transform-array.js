module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error();
  const result = [];
  const controls = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev"
  ];

  for (let i = 0; i < arr.length; i++) {
    if (controls.includes(arr[i])) {
      switch (arr[i]) {
        case "--discard-next":
          if (i + 2 < arr.length) i++;
          break;
        case "--discard-prev":
          result.pop();
          break;
        case "--double-next":
          if (i + 1 < arr.length) result.push(arr[i + 1]);
          break;
        default:
          if (i - 1 >= 0) result.push(arr[i - 1]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
