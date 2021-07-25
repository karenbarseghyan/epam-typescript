var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.name + " " + this.engine + " " + this.power;
    };
    Car.prototype.cost = function () {
        return 30000;
    };
    return Car;
}());
var Mersedes = /** @class */ (function (_super) {
    __extends(Mersedes, _super);
    function Mersedes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Mersedes";
        _this.engine = "Four-Cylinders";
        _this.power = 320;
        return _this;
    }
    return Mersedes;
}(Car));
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
var setDoorColor = /** @class */ (function (_super) {
    __extends(setDoorColor, _super);
    function setDoorColor(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    setDoorColor.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + " withDoors&Color";
    };
    ;
    setDoorColor.prototype.cost = function () {
        return this.decoratedCar.cost() + 10000;
    };
    ;
    return setDoorColor;
}(CarOptions));
var setEngine = /** @class */ (function (_super) {
    __extends(setEngine, _super);
    function setEngine(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    setEngine.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + " Hybrid-Engine";
    };
    ;
    setEngine.prototype.cost = function () {
        return this.decoratedCar.cost() + 8000;
    };
    ;
    return setEngine;
}(CarOptions));
var myTesla = new Mersedes();
myTesla = new setDoorColor(myTesla);
myTesla = new setEngine(myTesla);
console.log(myTesla.cost());
console.log(myTesla.getDescription());
