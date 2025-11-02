function getProperty<T extends { name: string }>(obj: T): string {
    return obj.name;
}

const person = { name: "Alice", age: 25 };
const car = { name: "Tesla", model: "Model 3" };

console.log(getProperty(person));
console.log(getPr
