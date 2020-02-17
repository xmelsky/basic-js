const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(value) {
  value = typeof value === "string" && parseFloat(value);
  return (
    !isNaN(value) &&
    value > 0 &&
    value < 15 &&
    Math.ceil(Math.log(MODERN_ACTIVITY / value) / K)
  );
};
