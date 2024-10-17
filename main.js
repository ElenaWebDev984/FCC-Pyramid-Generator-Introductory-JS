const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

//change the code to a different kind of loop
/*for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
  }*/

   /* if ("") {
      console.log("Condition is true");
    } else if (5 > 10) {
      console.log("5 is less than 10");
    } else {
      console.log("This is the else block");
    }*/
  
let continueLoop = false;
let done = 0;

while (continueLoop) {
  done++;
  rows.push(padRow(done, count));
  if (done == count) {
    continueLoop = false;
  }
}

  let result = "";
  
  for (const row of rows) {
    result = result + "\n" + row;
  }

  console.log(result);

  

  