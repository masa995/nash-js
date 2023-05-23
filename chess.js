const symb = '#';
const deskWidth = 4;
const deskHeight = 8;

let res = '';
let i, j;

for (i = 0; i < deskHeight; i++){
  for (j = 0; j < deskWidth; j++){
    i%2 === 0 ? (res += symb + " ") : (res += " " + symb)
  }
  res += '\n';
}
console.log(res)