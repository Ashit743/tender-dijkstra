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