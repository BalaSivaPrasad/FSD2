class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo(): void {
        console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
    }
}

const myCar = new Car("Toyota", "Corolla", 2022);
myCar.displayInfo();
