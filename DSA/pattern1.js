const log = console.log;

export const squarePattern = (num) => {
  if (Number.isInteger(num)) {
    for (let i = 0; i < num; i++) {
      let row = "";
      for (let j = 0; j < num; j++) {
        row += "* ";
      }
      log(row);
    }
  }
};

export const rightAngleTrianglePattern = (num, str) => {
  if (Number.isInteger(num)) {
    if (str === "*") {
      for (let i = 0; i < num; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
          row += "* ";
        }
        log(row);
      }
    }
    if (str === "number") {
      for (let i = 0; i < num; i++) {
        let row = [];
        let row_str = "";
        for (let j = 1; j <= i + 1; j++) {
          row.push(j);
        }
        for (let rowi = 0; rowi < row.length; rowi++) {
          row_str += row[rowi].toString();
        }
        log(row_str);
      }
    }
  }
};

export const reverseRightAnglePattern = (num, str) => {
  if (Number.isInteger(num)) {
    if (str === "*") {
      for (let i = 0; i < num; i++) {
        let row = "";
        for (let j = num; j > i; j--) {
          row += "* ";
        }
        log(row);
      }
    }

    if (str === "number") {
      for (let i = 0; i < num; i++) {
        let row = [];
        let idx = 1;
        for (let j = num; j > i; j--) {
          row.push(idx++);
        }
        log(row.join(" "));
      }
    }
  }
};

export const straightPyramidStar = (a) => {
  if (Number.isInteger(a)) {
    let k = 1;
    for (let i = 0; i < a; i++) {
      let row = [];
      for (let j = a; j > i; j--) {
        row.push(" ");
      }
      for (let l = 0; l < k; l++) {
        row.push("*");
      }
      k += 2;
      log(row.join(" "));
    }
  }
};

export const reversePyramidStar = (a) => {
  if (Number.isInteger(a)) {
    let k = a * 2 - 1;
    for (let i = 0; i < a; i++) {
      let row = [];
      for (let j = 0; j <= i; j++) {
        row.push(" ");
      }
      for (let l = k; l > 0; l--) {
        row.push("*");
      }
      k -= 2;
      log(row.join(" "));
    }
  }
};

export const rhombus = (a) => {
  if (Number.isInteger(a)) {
    straightPyramidStar(a);
    reversePyramidStar(a);
  }
};

export const arrowHead = (a) => {
  if (Number.isInteger(a) && a > 1) {
    rightAngleTrianglePattern(a, "*");
    reverseRightAnglePattern(a - 1, "*");
  }
};

export const toggledRightAngleTriangle = (a) => {
  if (Number.isInteger(a)) {
    let rowBool = 1;
    for (let i = 0; i < a; i++) {
      let row = [];
      let colBool = rowBool;
      for (let j = 0; j <= i; j++) {
        row.push(colBool);
        colBool = +!colBool;
      }
      log(row.join(" "));
      rowBool = +!rowBool;
    }
  }
};

export const crownPattern = (a) => {
  if (Number.isInteger(a)) {
    let l = a - 1;
    for (let i = 1; i < a; i++) {
      let row = [];
      for (let j = 1; j <= i; j++) {
        row.push(j);
      }
      for (let j = a - i; j > 1; j--) {
        row.push("  ");
      }
      for (let j = a - l; j > 0; j--) {
        row.push(j);
      }
      l--;
      log(row.join(""));
    }
  }
};

export const IncreasingNumberRightAngledTriangle = (a) => {
  if (Number.isInteger(a)) {
    let globalIdx = 1;
    for (let i = 0; i < a; i++) {
      let row = [];
      for (let j = 0; j <= i; j++) {
        row.push(globalIdx++);
      }
      log(row.join(" "));
    }
  }
};

export const alphaRightAngledTriangle = (a) => {
  if (Number.isInteger(a)) {
    for (let i = 0; i <= a; i++) {
      let row = [];
      let start = 65;
      for (let j = 0; j < i; j++) {
        row.push(String.fromCharCode(start));
        start++;
      }
      log(row.join(""));
    }
  }
};

export const alphaHillPattern = (a) => {
  if (Number.isInteger(a)) {
    let l = 0;
    for (let i = 0; i < a; i++) {
      let row = [];
      for (let j = a - i; j > 0; j--) {
        row.push(" ");
      }
      let start = 65;
      for (let j = 0; j <= i; j++) {
        row.push(String.fromCharCode(start++));
      }

      start = 65 + l - 1;
      for (let j = 0; j < i; j++) {
        row.push(String.fromCharCode(start--));
      }
      l++;
      log(row.join(""));
    }
  }
};

export const alphaTrianglePattern = (a) => {
  if (Number.isInteger(a)) {
    let initialStartFrom = 65 + a - 1;
    for (let i = 0; i < a; i++) {
      let rowDataStart = initialStartFrom;
      let row = [];
      for (let j = 0; j <= i; j++) {
        row.push(String.fromCharCode(rowDataStart++));
      }
      initialStartFrom--;
      log(row.join(""));
    }
  }
};

//incomplete

export const symmetricVoidPattern = (a) => {
  if (Number.isInteger(a)) {
    //first half
    for (let i = 0; i < a; i++) {
      let row = [];
      for (let j = a - i; j > 0; j--) {
        row.push("*");
      }
      for (let j = 0; j < i; j++) {
        row.push("  ");
      }
      for (let j = a - i; j > 0; j--) {
        row.push("*");
      }
    }
  }
};
