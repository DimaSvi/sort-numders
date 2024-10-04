const somenumbers = [2, 1, 7, 102, -6];

let maxnumber = somenumbers [0];
let minnumber = somenumbers [0];

for (let i = 1; i < somenumbers.length; i++) {
if (somenumbers [i] > maxnumber) { maxnumber = somenumbers[1];
}
if (somenumbers [i] < minnumber) { minnumber = somenumbers [i];
}
}
console.log ("the highest number:", maxnumber)
console.log ("the least number:", minnumber)

