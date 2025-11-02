namespace Vehicles {
    export class Car {
        constructor(public brand: string, public model: string) {}

        display(): void {
            console.log(`Car: ${this.brand} ${this.model}`);
        }
    }

    export class Bike {
        constructor(public brand: string, public type: string) {}

        display(): void {
            console.log(`Bike: ${this.brand} (${this.type})`);
        }
    }
}


const car = new Vehicles.Car("Toyota", "Corolla");
car.display();

const bike = new Vehicles.Bike("Yamaha", "Sport");
bike.display();
