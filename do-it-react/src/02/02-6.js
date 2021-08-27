// 기존 자바스크립트의 클래스 표현 방법 알아보기
function Shape(x, y) {
    this.name = 'Shape';
    this.move(x, y);
}
// static 함수를 선언하는 예제
Shape.create = function (x, y) { return new Shape(x, y); };
// 인스턴스 함수를 선언하는 예제
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}
Shape.prototype.area = function () {
    return 0;
};

// 혹은
Shape.prototype = {
    move: function (x, y) {
        this.x;
        this.y;
    },

    area: function () {
        return 0;
    }
};

var s = new Shape(0, 0);
s.area(); // 0


// 자식 클래스(Circle) 생성
function Circle(x, y, radius) {
    Shape.call(this, x, y);      // 내장함수 call() -> 부모의 생성자 호출하여 초깃값 상속
    this.name = 'Circle';
    this.radius = radius;
}
Object.assign(Circle.prototype, Shape.prototype, {      // 부모 클래스 함수 상속
    area: function () {
        return this.radius * this.radius;
    }
});

var c = new Circle(0, 0, 10);
c.area(); // 100


// ES6 클래스 사용 방법 알아보기
class Shape {
    static create(x, y) { return new Shape(x, y); }
    name = 'Shape';
    constructor(x, y) {
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    area() {
        return 0;
    }
}
var s = new Shape(0, 0);
s.area(); //0

class Circle extends Shape {       // Shape 클래스 상속
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    area() {
        if (this.radius === 0) return super.area();
        return this.radius * this.radius;
    }
}
var c = new Circle(0, 0, 10);
c.area(); // 100