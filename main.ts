abstract class Car {
    public name: string;
    public engine: string;
    public power: number;
    public getDescription():string {
        return `${this.name} ${this.engine} ${this.power}` ;
    }
    public cost():number {
        return 30000;
    }
}

class Mersedes extends Car{
    public name = "Mersedes";
    public engine = "Four-Cylinders";
    public power = 320;
}

abstract class CarOptions extends Car{
    decoratedCar: Car;
    public abstract getDescription(): string;
    public abstract cost(): number;

}

class setDoorColor extends CarOptions{
    decoratedCar: Car;
    constructor(car:Car) {
        super();
        this.decoratedCar =car
    }
    public getDescription(): string{
        return `${this.decoratedCar.getDescription()} withDoors&Color`
    };


    public cost(): number {
        return this.decoratedCar.cost() + 10000;
    };
}

class setEngine extends CarOptions{
    decoratedCar: Car;
    constructor(car:Car) {
        super();
        this.decoratedCar =car
    }
    public getDescription(): string{
        return `${this.decoratedCar.getDescription()} Hybrid-Engine`
    };


    public cost(): number {
        return this.decoratedCar.cost() + 8000;
    };
}

let myTesla = new Mersedes();
myTesla = new setDoorColor(myTesla);
myTesla = new setEngine(myTesla);
console.log(myTesla.cost());
console.log(myTesla.getDescription());
