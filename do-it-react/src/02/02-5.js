// 기존 자바스크립트 함수 선언하는 2가지 방법
// 첫번째
function add(first, second) {
    return first + second;
}
// typeof add ==='function'
// 두번쨰
// 익명 함수
var add = function (first, second) {
    return first + second;
};
// typeof add ==='function'



// ES6  화살표 함수 사용 방법 
var add = (first, second) => {      // 화살표 함수로 변경
    return first + second;
};
var add = (first, second) => first + second;
var addAndMultiple = (first, second) => ({ add: first + second, multiply: first * second });

function addNumber(num) {       // 함수 표현식 반환
    return function (value) {
        return num + value;
    };
}
var addNumber = num => value => num + value;        // 화살표 함수를 사용 -> 간결한 코드

class Myclass {
    value = 10;
    constructor() {
        var addThis2 = function (first, second) {
            return this.value + first + second;
        }.bind(this);
        var addThis3 = (first, second) => this.value + first + second;

    }
}