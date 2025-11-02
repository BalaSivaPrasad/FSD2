import './App.css'

function App() {
  const square = (x: number): number => x * x;

function greet(name?: string) {
 console.log("Hello " + (name || "Guest"));
}

function multiply(a: number, b: number = 2) {
 return a * b;
}

function sumAll(...nums: number[]): number {
 return nums.reduce((total, n) => total + n, 0);
}

console.log(square(5));
greet('REKHA');
console.log(multiply(5));
console.log(sumAll(1, 2, 3, 4));
}

export default App

