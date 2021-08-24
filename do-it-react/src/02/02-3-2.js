// ES5 문법
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
    one: objectOne.one,     // 키에 해당하는 값 추출
    two: objectTwo.two,
    three: objectTwo.three,
    four: objectTwo.four,
};
var combined = Object.assign({}, objectOne, objectTwo);       // 객체 내장 함수 assign()을 사용하여 두 객체 병합
// combined ={one: 1, two:2, three:3,four:4, other:-1}
var combined = Object.assign({}.objectTwo, objectOne);       // 중복되는 키값이 있으면 이후에 전달된 객체의 값으로 덮어씀
// combined ={ one:1, two:2 , three:3, four:4, other:0}
var others = Object.assign({}, combined);
delete others.other;                // 삭제 연산자를 사용하여 특정 데이터를 추출할 다음 새로운 객체를 만듬
// others = {one:1, two:2, three:3, four:4 }

// ES6 문법
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
    ...objectOne,
    ...objectTwo,
};
// combined = {one:1, two:2, three:3, four:4, other:-1}
var combined = {
    ...objectTwo,
    ...objectOne,
};
// combined = {one:1, two:2, three:3, four:4, other:0}
var { other, ...others } = combined;
// others = {one:1, two:2, three:3, four:4}

