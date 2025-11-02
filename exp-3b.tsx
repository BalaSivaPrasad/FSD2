
class Car {
    public brand: string;
    protected model: string;
    private year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public displayInfo(): void {
        console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
    }
}


class ElectricCar extends Car {
    private batteryCapacity: number;

    constructor(brand: string, model: string, year: number, batteryCapacity: number) {
        super(brand, model, year);
        this.batteryCapacity = batteryCapacity;
    }

   
    public override displayInfo(): void {
        console.log(`Electric Car: ${this.brand} ${this.model} with ${this.batteryCapacity} kWh battery`);
    }
}


const myCar = new Car("Toyota", "Corolla", 2020);
myCar.displayInfo();

const myEV = new ElectricCar("Tesla", "Model 3", 2024, 75);
myEV.displayInfo();
