class VigenereCipheringMachine {
  constructor(mode) {
    this.mode = mode !== false ? "direct" : "reverse";
    this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.finishString = {
      direct: i => i,
      reverse: i =>
        i
          .split("")
          .reverse()
          .join("")
    };
  }

  normalizeKey(message, key) {
    while (message.length > key.length) {
      key += key;
    }
    for (let i = 0; i < message.length; i++) {
      if (this.abc.indexOf(message.charAt(i)) == -1) {
        key = key.slice(0, i) + message.charAt(i) + key.slice(i);
      }
    }
    return key;
  }

  createString(message, key, flag) {
    message = message.toUpperCase();
    key = this.normalizeKey(message, key.toUpperCase());
    let res = "";
    for (let i = 0; i < message.length; i++) {
      if (this.abc.indexOf(message.charAt(i)) === -1) {
        res += message.charAt(i);
      } else {
        if (flag === true) {
          res += this.abc.charAt(
            (this.abc.indexOf(message.charAt(i)) +
              this.abc.indexOf(key.charAt(i))) %
              26
          );
        } else {
          res += this.abc.charAt(
            (this.abc.indexOf(message.charAt(i)) -
              this.abc.indexOf(key.charAt(i)) +
              26) %
              26
          );
        }
      }
    }
    return this.finishString[this.mode](res);
  }

  encrypt(...params) {
    if (params.length !== 2) throw Error();
    return this.createString(params[0], params[1], true);
  }

  decrypt(...params) {
    if (params.length !== 2) throw Error();
    return this.createString(params[0], params[1], false);
  }
}

module.exports = VigenereCipheringMachine;
