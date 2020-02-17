module.exports = function countCats(arr) {
  return arr.reduce((res, a) => res.concat(a.filter(el => el === "^^")), [])
    .length;
};
