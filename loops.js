//for loop
for (let i = 0; i < 10; i++) {
  console.log('for: ', i);
}

//while loop
let x = 0;
while (x < 10) {
  console.log('while: ', x);
  x++;
}

//do...while loop, will execute at least one time no matter the condition
let y = 0;
do {
  console.log('do.while', y);
  y++;
} while (y < 10);

//for...in loop, used to loop through objects
let object = {
  a: 1,
  b: 2,
  c: 3,
};

for (let prop in object) {
  console.log('for.in', object[prop]);
}

//for...of, used to loop through arrays and strings
let array = [1, 2, 3];
for (let number of array) {
  console.log('for.of: ', number);
}

//forEach
let array2 = [1, 2, 3];
array2.forEach((number) => {
  console.log('forEach: ', number);
});

//map
let array3 = ['a', 'b', 'c'];

array3.map((letter) => {
  console.log('map: ', letter);
});
