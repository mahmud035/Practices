// Reference to an Object
function memory() {
  return '';
}

const foo = {
  bar1: memory(), // 5kb
  bar2: memory(), // 5kb
};

function clickEvent() {
  alert(foo.bar1[0]); // 10kb - since it has to load the whole `foo` object
}

// ❌ DOM leak:
var one = document.getElementById('one');
var two = document.getElementById('two');
one.addEventListener('click', function () {
  two.remove();
  console.log(two); // will print the html even after deletion
});

// ✅ Fix for above
var one = document.getElementById('one');
one.addEventListener('click', function () {
  var two = document.getElementById('two');
  two.remove();
});

// ✅ Unregister the callback
var one = document.getElementById('one');
one.addEventListener('click', function () {
  var two = document.getElementById('two');
  two.remove();
});
one.removeEventListener('click');

var a = 'apples'; // global with var
b = 'oranges'; // global without var

// Global window Object
console.log(window.a); // prints "apples"
console.log(window.b); // prints "oranges"

// Limiting Object References
var test = {
  prop1: 'test',
};

function printProp1(test) {
  console.log(test.prop1);
}

printProp1(test); //'test'

var test = {
  prop1: 'test',
};

function printProp1(prop1) {
  console.log(prop1);
}

printProp1(test.prop1); //'test'

// The `delete` Operator
var test = {
  prop1: 'test',
};

console.log(test.prop1); // 'test'
delete test.prop1;
console.log(test.prop1); // _undefined_

//* ------- Exercise Solutions -------

// Ques-1: Analyze and optimize the call for printProperty
function someLargeArray() {
  return new Array(1000000);
}

var exampleObject = {
  prop1: someLargeArray(),
  prop2: someLargeArray(),
};

function printProperty(obj) {
  console.log(obj['prop1']);
}
printProperty(exampleObject); // ❌ Wrong way (Passing entire object)

//* Optimized Answer:
function someLargeArray() {
  return new Array(1000000);
}

var exampleObject = {
  prop1: someLargeArray(),
  prop2: someLargeArray(),
};

function printProperty(prop) {
  console.log(prop);
}
printProperty(exampleObject.prop1); // ✅ Right way (only pass which property is needed)

// Ques-2: Analyze and optimize the global scope for the following code block:
var RED = 0,
  GREEN = 1,
  BLUE = 2;

function redGreenBlueCount(arr) {
  var counter = new Array(3).fill(0);

  for (var i = 0; i < arr.length; i++) {
    var curr = arr[i];
    if (curr == RED) {
      counter[RED]++;
    } else if (curr == GREEN) {
      counter[GREEN]++;
    } else if (curr == BLUE) {
      counter[BLUE]++;
    }
  }

  return counter;
}

//* Optimized Answer:
function redGreenBlueCount(arr) {
  const counter = new Array(3).fill(0);
  const RED = 0,
    GREEN = 1,
    BLUE = 2;

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];

    if (curr === RED) counter[RED]++;
    else if (curr === GREEN) counter[GREEN]++;
    else if (curr === BLUE) counter[BLUE]++;
  }

  return counter;
}
redGreenBlueCount([0, 1, 1, 1, 2, 2, 2]); // [1, 3, 3]

// <button id="one">Button 1</button>
// <button id="two">Button 2</button>

// Ques-3: Analyze and fix memory issues for the following code
var one = document.querySelector('#one');
var two = document.querySelector('#two');

function callBackExample() {
  one.removeEventListener('', callBackExample);
}

one.addEventListener('click', function () {
  two.remove();
  console.log(two); // ❌ will print the html even after deletion
});

two.addEventListener('click', function () {
  one.remove();
  console.log(one); // ❌ will print the html even after deletion
});

//* Optimized Answer:
const one = document.querySelector('#one');
const two = document.querySelector('#two');

function callbackOne() {
  const two = document.querySelector('#two');
  if (!two) return;
  two.remove();
  one.removeEventListener('hover', callbackOne);
}

function callbackTwo() {
  const one = document.querySelector('#one');
  if (!one) return;
  one.remove();
  two.removeEventListener('hover', callbackTwo);
}

one.addEventListener('click', callbackOne);
two.addEventListener('click', callbackTwo);
