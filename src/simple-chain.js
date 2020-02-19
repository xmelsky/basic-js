const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) this.chain.push("( )");
    else this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.chain.length
    )
      this.throwErr();
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = [...this.chain];
    this.chain = [];
    return result.join("~~");
  },
  throwErr() {
    this.chain = [];
    throw new Error();
  }
};

module.exports = chainMaker;
