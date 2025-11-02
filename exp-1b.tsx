import './App.css'

function App() {
  function add(a: number, b: number): number {
 return a + b;
}
function greet(name: string): string {
 return "Hi " + name;
}
console.log(add(15, 10));
console.log(greet("rekha"));
}

export default App
