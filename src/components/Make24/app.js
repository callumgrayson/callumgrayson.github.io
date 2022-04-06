// Finds ways to insert operations and parentheses into
// four digit strings to make the result 24

function addLoadEvent(func) {
  let oldOnload = window.onload;
  if (typeof oldOnload !== "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      oldOnload();
      func();
    };
  }
}

function showAlert(m) {
  let el = document.getElementsByClassName("output")[0];
  el.innerHTML = m;
  el.style.color = "red";
}

function display(num, result) {
  let el = document.getElementsByClassName("output")[0];
  el.style.color = "";
  el.innerHTML = num + "<br><br>";
  result.forEach((row) => {
    el.innerHTML += `${row}<br>`;
  });
}

function validate(num) {
  if (num.length === 4) {
    return num;
  } else {
    showAlert("You must enter a valid 4 digit number");
    return false;
  }
}

function clearInput() {
  let inp = document.getElementById("digit-input");
  inp.value = "";
}

function handleSubmit(e) {
  e.preventDefault();
  let num = `${e.target[0].value}`;
  let numStr = validate(num);
  if (numStr) {
    let result = make24.solve24(numStr);
    display(num, result);
    clearInput();
  } else {
    clearInput();
    return false;
  }
}

function addInputListener() {
  let inp = document.getElementsByClassName("input-area")[0];
  inp.addEventListener("submit", handleSubmit);
}

addLoadEvent(addInputListener);

const make24 = {
  solve24(numStr) {
    if (!numStr.length) {
      return "Nothing to work with!";
    }

    const n0 = [...numStr.split("")];
    let nArr = [...n0];
    let pArr = [];
    let combos = [];
    this.removeOneDigit(nArr, pArr, combos);
    combos = this.retInts(combos);
    // console.log(combos);

    const ops = this.operationCombinations(4);
    // console.log(ops);

    // Needing combos, ops and groupings
    const groupStr = "123";
    const nGroup0 = [...groupStr.split("")];
    let nGroup = [...nGroup0];
    let pGroup = [];
    let groups = [];
    this.removeOneDigit(nGroup, pGroup, groups);
    groups = this.retInts(groups);
    // console.log(groups);

    // Altogether...
    const digitSet = [...combos];
    const opSet = [...ops];
    const ordSet = [...groups];
    let sets24 = [];
    this.calc24(digitSet, opSet, ordSet, sets24);
    // console.log(sets24);

    const stringsArray = this.convertArraysToString(sets24);
    // console.log(stringsArray);

    const uniqueStringsArray = this.getUniqueStrings(stringsArray);
    // const lenUSA = uniqueStringsArray.length;
    // const randLen = Math.ceil(Math.random() * lenUSA);

    // return [uniqueStringsArray[randLen]];
    return uniqueStringsArray;
  },

  removeOneDigit(nArr, pArr, x) {
    for (let a = 0; a < nArr.length; a++) {
      let n = [...nArr];
      let p = [...pArr].concat(n.splice(a, 1));

      if (n.length > 0) {
        // console.log(n, p);
        this.removeOneDigit(n, p, x);
      } else {
        // console.log(x);
        x.push(p);
      }
    }
  },

  operationCombinations(gaps) {
    let n = gaps;
    let combs = [];

    // essentially making all the combos of 111 -> 333
    for (let a = 0; a < n; a++) {
      let n1 = a + 1;
      for (let b = 0; b < n; b++) {
        let n2 = b + 1;
        for (let c = 0; c < n; c++) {
          let n3 = c + 1;
          combs.push([n1, n2, n3]);
        }
      }
    }

    // console.log(combs);
    return combs;
  },

  calc24(digitSet, opSet, ordSet, sets24) {
    // for each item in combos
    // apply each set of operations where 1 is add, 2 is sub, 3 is mult, 4 is div
    // apply each order of operations
    // check if the outcome is 24

    let dS = [...digitSet];
    const opS = [...opSet];
    let orS = [...ordSet];

    // Now all sets are ready to go
    // dS, opS, orS, sets24
    for (let a = 0; a < dS.length; a++) {
      // dS[a][0], dS[a][1], dS[a][2], dS[a][3]
      for (let b = 0; b < opS.length; b++) {
        // opS[b][0], opS[b][1], opS[b][2] ** can be 1, 2, 3, 4 add sub mult div
        for (let c = 0; c < orS.length; c++) {
          // orS[c][0], orS[c][1], orS[c][2] ** can be 1, 2, 3 order of ops

          let first = orS[c].indexOf(1); // 0 in array of ops
          let second = orS[c].indexOf(2); // 1
          let third = orS[c].indexOf(3); // 2

          // Four digits 1, 2, 3, 4
          // let getOp = (arr, key) => {
          //   if (arr[key] === 1) {
          //     return '+';
          //   } else if (arr[key] === 2) {
          //     return '-';
          //   } else if (arr[key] === 3) {
          //     return '*';
          //   } else if (arr[key] === 4) {
          //     return '/';
          //   }
          // }

          const calCer = (operand1, operand2, opArr, key) => {
            if (opArr[key] === 1) {
              return operand1 + operand2;
            } else if (opArr[key] === 2) {
              return operand1 - operand2;
            } else if (opArr[key] === 3) {
              return operand1 * operand2;
            } else if (opArr[key] === 4) {
              return operand1 / operand2;
            }
          };

          let oper1 = dS[a][first];
          let oper2 = dS[a][first + 1];
          let res1 = calCer(oper1, oper2, opS[b], first);
          // console.log(res1);

          // Reduce the arrays
          const d2 = [...dS[a]];
          d2.splice(first, 2, res1);

          let tempOpS = [...opS[b]];
          tempOpS.splice(first, 1);
          const oP2 = [...tempOpS];
          let tempOrS = [...orS[c]];
          tempOrS.splice(first, 1);
          const oR2 = [...tempOrS];

          // New second and third, adjusted on conditional
          let secondB;
          let thirdB;
          secondB = first > second ? second : second - 1;
          thirdB = first > third ? third : third - 1;

          // Call Calcer on reduced arrays
          let oper1b = d2[secondB];
          let oper2b = d2[secondB + 1];
          let res2 = calCer(oper1b, oper2b, oP2, secondB);
          // console.log(res2);

          // Reduce the arrays
          const d3 = [...d2];
          d3.splice(secondB, 2, res2);

          let tempOpS2 = [...oP2];
          tempOpS2.splice(secondB, 1);
          const oP3 = [...tempOpS2];

          let tempOrS2 = [...oR2];
          tempOrS2.splice(secondB, 1);

          // New third, adjusted on conditional
          let thirdC;
          thirdC = secondB > thirdB ? thirdB : thirdB - 1;

          // Call Calcer on reduced arrays
          let oper1c = d3[thirdC];
          let oper2c = d3[thirdC + 1];
          let res3 = calCer(oper1c, oper2c, oP3, thirdC);

          if (res3 === 24) {
            let arrayOfArrs = [[...dS[a]], [...opS[b]], [...orS[c]]];
            sets24.push(arrayOfArrs);
          }
        }
      }
    }
  },

  retInts(arr) {
    let retIntArr = [];
    for (let a = 0; a < arr.length; a++) {
      let tempArr = [];
      for (let b = 0; b < arr[a].length; b++) {
        let c = parseInt(arr[a][b]);
        tempArr.push(c);
      }
      retIntArr.push(tempArr);
    }
    return retIntArr;
  },

  convertArraysToString(sets24) {
    let retArr = [];

    for (let i = 0; i < sets24.length; i++) {
      // get phaseObj
      let phaseObj = this.getPhaseObj(sets24[i]);
      // get phaseStr
      let phaseStr = this.getPhaseStr(phaseObj);
      // push phaseStr to returnObj
      retArr.push(phaseStr);
    }
    return retArr;
  },

  getPhaseObj(inArr) {
    const newInArr0 = [...inArr[0]];

    // get order indexes
    const first = inArr[2].indexOf(1);
    const second = inArr[2].indexOf(2);
    const third = inArr[2].indexOf(3);

    const posFirst = first === 0 ? "L" : first === 1 ? "M" : "R";
    const posSecond = second === 0 ? "L" : second === 1 ? "M" : "R";
    const posThird = third === 0 ? "L" : third === 1 ? "M" : "R";

    // splice at inArr[first] cut 2 replace with
    // [inArr[0][first], inArr[0][first + 1]]
    newInArr0.splice(first, 2, [inArr[0][first], inArr[0][first + 1]]);

    // get vals based on first
    const d1 = newInArr0[first];
    const op1 = inArr[1][first];

    const d2 = newInArr0[second];
    const op2 = inArr[1][second];

    const d3 = newInArr0[third];
    const op3 = inArr[1][third];

    const retPhObj = {
      phase1: {
        d1: d1,
        op: op1,
        opInd: first,
        pos: posFirst,
      },
      phase2: {
        d2: d2,
        op: op2,
        opInd: second,
        pos: posSecond,
      },
      phase3: {
        d3: d3,
        op: op3,
        opInd: third,
        pos: posThird,
      },
    };

    return retPhObj;
  },

  getPhaseStr(inObj) {
    // Gets the type of operation from each phase object
    let opPat1 = inObj.phase1.op;
    let opPat2 = inObj.phase2.op;
    let opPat3 = inObj.phase3.op;

    const d1a = inObj.phase1.d1[0];
    const d1b = inObj.phase1.d1[1];
    const d2 = inObj.phase2.d2;
    const d3 = inObj.phase3.d3;

    // first second third
    const opInd1 = inObj.phase1.opInd;
    const opInd2 = inObj.phase2.opInd;
    const opInd3 = inObj.phase3.opInd;

    // Get string vals of ops
    let getOp = (key) => {
      if (key === 1) {
        return "+";
      } else if (key === 2) {
        return "-";
      } else if (key === 3) {
        return "*";
      } else if (key === 4) {
        return "/";
      }
    };

    const op1Str = getOp(opPat1);
    const op2Str = getOp(opPat2);
    const op3Str = getOp(opPat3);

    // Brackets around phase1
    const phase1Str = `(${d1a}${op1Str}${d1b})`;

    // Brackets around phase2
    let phase2Str = "";
    const opDiff12 = opInd2 - opInd1;
    if (opDiff12 === 2) {
      phase2Str = `(${d3}${op2Str}${d2})`;
    } else if (opDiff12 === -2) {
      phase2Str = `(${d2}${op2Str}${d3})`;
    } else if (opDiff12 === 1) {
      phase2Str = `(${phase1Str}${op2Str}${d2})`;
    } else if (opDiff12 === -1) {
      phase2Str = `(${d2}${op2Str}${phase1Str})`;
    } else {
      console.log("WTF?? Something does not make sense");
    }

    // String phase3
    let phase3Str = "";
    if (opInd3 === 1 && opInd1 === 0) {
      phase3Str = `${phase1Str}${op3Str}${phase2Str}`;
    } else if (opInd3 === 1 && opInd1 === 2) {
      phase3Str = `${phase2Str}${op3Str}${phase1Str}`;
    } else if (opInd3 === 0) {
      phase3Str = `${d3}${op3Str}${phase2Str}`;
    } else if (opInd3 === 2) {
      phase3Str = `${phase2Str}${op3Str}${d3}`;
    } else {
      console.log("WTF?? Something does not make sense");
    }

    // Brackets around phase1 only
    let only1Str = "";
    if (opDiff12 === 2) {
      only1Str = `${phase1Str}${op3Str}${d3}${op2Str}${d2}`;
    } else if (opDiff12 === -2) {
      only1Str = `${d2}${op2Str}${d3}${op3Str}${phase1Str}`;
    } else if (opDiff12 === 1 && opInd1 === 0) {
      only1Str = `${phase1Str}${op2Str}${d2}${op3Str}${d3}`;
    } else if (opDiff12 === 1 && opInd1 === 1) {
      only1Str = `${d3}${op3Str}${phase1Str}${op2Str}${d2}`;
    } else if (opDiff12 === -1 && opInd1 === 2) {
      only1Str = `${d3}${op3Str}${d2}${op2Str}${phase1Str}`;
    } else if (opDiff12 === -1 && opInd1 === 1) {
      only1Str = `${d2}${op2Str}${phase1Str}${op3Str}${d3}`;
    } else {
      console.log("WTF?? Something does not make sense");
    }

    // Phase1 String with no brackets
    const phase1StrNoBrackets = `${d1a}${op1Str}${d1b}`;

    // Brackets around phase2
    let only2Str = "";
    if (opDiff12 === 2) {
      only2Str = `${phase1StrNoBrackets}${op3Str}(${d3}${op2Str}${d2})`;
    } else if (opDiff12 === -2) {
      only2Str = `(${d2}${op2Str}${d3})${op3Str}${phase1StrNoBrackets}`;
    } else if (opDiff12 === 1 && opInd1 === 0) {
      only2Str = `(${phase1StrNoBrackets}${op2Str}${d2})${op3Str}${d3}`;
    } else if (opDiff12 === 1 && opInd1 === 1) {
      only2Str = `${d3}${op3Str}(${phase1StrNoBrackets}${op2Str}${d2})`;
    } else if (opDiff12 === -1 && opInd1 === 2) {
      only2Str = `${d3}${op3Str}(${d2}${op2Str}${phase1StrNoBrackets})`;
    } else if (opDiff12 === -1 && opInd1 === 1) {
      only2Str = `(${d2}${op2Str}${phase1StrNoBrackets})${op3Str}${d3}`;
    } else {
      console.log("WTF?? Something does not make sense");
    }

    // No brackets
    let noBracketsStr = ``;
    if (opDiff12 === 2) {
      noBracketsStr = `${phase1StrNoBrackets}${op3Str}${d3}${op2Str}${d2}`;
    } else if (opDiff12 === -2) {
      noBracketsStr = `${d2}${op2Str}${d3}${op3Str}${phase1StrNoBrackets}`;
    } else if (opDiff12 === 1 && opInd1 === 0) {
      noBracketsStr = `${phase1StrNoBrackets}${op2Str}${d2}${op3Str}${d3}`;
    } else if (opDiff12 === 1 && opInd1 === 1) {
      noBracketsStr = `${d3}${op3Str}${phase1StrNoBrackets}${op2Str}${d2}`;
    } else if (opDiff12 === -1 && opInd1 === 2) {
      noBracketsStr = `${d3}${op3Str}${d2}${op2Str}${phase1StrNoBrackets}`;
    } else if (opDiff12 === -1 && opInd1 === 1) {
      noBracketsStr = `${d2}${op2Str}${phase1StrNoBrackets}${op3Str}${d3}`;
    } else {
      console.log("WTF?? Something does not make sense");
    }

    // tests: brackets12 === noBrackets, brackets12 === brackets1, brackets12 === brackets2
    // Compare: phase3Str, only1Str, only2Str, noBracketsStr
    let finalStr = "";
    if (eval(noBracketsStr) === eval(phase3Str)) {
      finalStr = noBracketsStr;
    } else if (eval(only2Str) === eval(phase3Str)) {
      finalStr = only2Str;
    } else if (eval(only1Str) === eval(phase3Str)) {
      finalStr = only1Str;
    } else {
      finalStr = phase3Str;
    }
    return finalStr;
  },

  getUniqueStrings(arr) {
    // Take arr, sort, remove duplicates, return
    let retArr = [];
    const sortArr = [...arr];
    const sortedArr = sortArr.sort();

    retArr = sortedArr.reduce((acc, val) => {
      return acc.includes(val) ? acc : acc.concat(val);
    }, []);

    return retArr;
  },
};
