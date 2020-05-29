function Human(name, age, race) {
  (this.name = name), (this.age = age), (this.race = race);
  this.fav = () => {
    return 'my fav hobby this coding';
  };
}

Human.prototype.eyes = 'black';

Human.prototype.sayHello = () => {
  let speak = 'hello world';
  return speak;
};

Human.prototype.updateName = () => {
  this.name = 'rob';
  return this.name;
};

let humanOne = new Human('rafael', 34, 'hispanic');

humanOne.sex = 'male';

let makeHimSayHello = humanOne.sayHello();

console.log(humanOne);
console.log(humanOne.eyes);
console.log(humanOne.sayHello);
console.log(humanOne.sayHello());
console.log(makeHimSayHello);
console.log(humanOne.updateName());
console.log(humanOne);

humanOne.name = 'rick';

console.log(humanOne);
console.log(humanOne.fav());
