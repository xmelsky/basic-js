const SEASONS = [
  "winter",
  "winter",
  "spring",
  "spring",
  "spring",
  "summer",
  "summer",
  "summer",
  "autumn",
  "autumn",
  "autumn",
  "winter"
];
module.exports = function getSeason(date) {
  if (date && date.getTime() !== date.getTime()) throw Error();
  return (
    (date && SEASONS[date.getMonth()]) ||
    "Unable to determine the time of year!"
  );
};
