module.exports = function createDreamTeam(arr) {
  return (
    Array.isArray(arr) &&
    arr
      .filter(e => typeof e === "string")
      .map(e => e.trim()[0].toUpperCase())
      .sort()
      .join("")
  );
};
