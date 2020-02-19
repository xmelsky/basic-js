module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    for (const item of arr) {
      depth = Array.isArray(item)
        ? Math.max(this.calculateDepth(item), depth)
        : depth;
    }
    return ++depth;
  }
};
