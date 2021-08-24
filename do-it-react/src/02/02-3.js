// ES5 문법
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array2[1], array2[0], array2[1]];   // 배열의 각 요소 추출하여 새로운 배열
var combined = array1.concat(array2);   // concat()함수로 두배열 합침
var combined = [].concat(array1, array2);
var first = array1[0];
var second = array1[1]; // 인덱스로 배열 요소 추출
var three = array1[2] || 'empty';   // ||연산자와 조합하면 배열 요소가 없을 떄 기본값 지정할 수 있음
function func() {
    var args = Array.prototype.slice.call(this, arguments);
    var first = args[0];
    var others = args.slice(1, args.length);
}

// ES6 문법
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [...array1, ...array2];   // 결과 : combined =['one','two','three','four'];

var [first, second, three = 'empty', ...others] = array1;  // 결과:first ='one','second' ='two',three='empty',others=[]
// 올바르지 못한 예
// var wrongArr = ...array1;
function func(...args) { var [first, ...others] = args; }


