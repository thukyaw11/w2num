class w2num {
  constructor() {
    const dashRegx = /(,|-)/;
    const basicNum = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      ten: 10,
      twenty: 20,
      thirty: 30,
      forty: 40,
      fifty: 50,
      sixty: 60,
      seventy: 70,
      eighty: 80,
      ninety: 90
    };


    const multipliers = {
      hundred: 100,
      thousand: 1000,
      million: 1000000,
    };

    this.toNum= function(string) {
      let result = 0;
      let tempResult = 0;
  
      const splittedNum = string.toLowerCase().split(" ");
  
      for (let index = 0; index < splittedNum.length; index++) {
        const ele = splittedNum[index];
  
        if (basicNum[ele]) {
          tempResult += basicNum[ele];
        } else if (multipliers[ele]) {
          switch (ele) {
            case "hundred":
              tempResult *= multipliers[ele];
              break;
            case "thousand":
            case "million":
              result += tempResult * multipliers[ele];
              tempResult = 0;
              break;
            default:
              break;
          }
        } else if (dashRegx.test(ele)) {
          tempResult += sumDashNum(ele);
        } else if (ele === "and") {
          continue;
        }
      }
      result += tempResult;
      return result;
    }
  
    function sumDashNum(eleString) {
      const eleSl = eleString.split("-");
      const sel = eleSl[0];
      const khu = eleSl[1];
      return basicNum[sel] + basicNum[khu];
    }

    this.toWord = function(numberToChange) {
      if (numberToChange === 0) return 'zero';

      let result = '';

      if (numberToChange < 20) {
        result = getKeyByValue(basicNum, numberToChange);
      } else if (numberToChange < 100) {
        const tens = Math.floor(numberToChange / 10) * 10;
        const units = numberToChange % 10;
        result = getKeyByValue(basicNum, tens);
        if (units > 0) {
          result += '-' + getKeyByValue(basicNum, units);
        }
      } else if (numberToChange < 1000) {
        const hundreds = Math.floor(numberToChange / 100);
        const remainder = numberToChange % 100;
        result = getKeyByValue(basicNum, hundreds) + ' hundred';
        if (remainder > 0) {
          result += ' and ' + this.toWord(remainder);
        }
      } else if (numberToChange < 1000000) {
        const thousands = Math.floor(numberToChange / 1000);
        const remainder = numberToChange % 1000;
        result = this.toWord(thousands) + ' thousand';
        if (remainder > 0) {
          result += (remainder < 100 ? ' and ' : ' ') + this.toWord(remainder);
        }
      } else if (numberToChange < 1000000000) {
        const millions = Math.floor(numberToChange / 1000000);
        const remainder = numberToChange % 1000000;
        result = this.toWord(millions) + ' million';
        if (remainder > 0) {
          result += (remainder < 100 ? ' and ' : ' ') + this.toWord(remainder);
        }
      } else if (numberToChange < 1000000000000) {
        const billions = Math.floor(numberToChange / 1000000000);
        const remainder = numberToChange % 1000000000;
        result = this.toWord(billions) + ' billion';
        if (remainder > 0) {
          result += (remainder < 100 ? ' and ' : ' ') + this.toWord(remainder);
        }
      }

      return result.trim();
    };

    const getKeyByValue = (object, value) => {
      return Object.keys(object).find(key => object[key] === value);
    }
  }
}

module.exports = w2num;
