// 자바스크립트의 객체 확장 표현식 
// 객체와 객체의 값 선언 -> 키 이름과 값을 각각 할당
var x = 0;
var y = 0;
var obj = { x: x, y: y };
var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value';
var obj2 = {
    x: x,
    methodA: function () { console.log('method A'); },
    methodB: function () { return 0; },
};


// ES6 의 객체 확장 표현식
var X = 0;
var y = 0;
var obj = { x, y };     // 자동으로 키의 이름으로 키값 지정
var randomKeyString = 'other';
var combined = {
    ['one' + randomKeyString]: 'some value',
};
var obj2 = {
    x,
    methodA() { console.log('method A'); },         // function 키워드를 생략하여 함수 선언
    methodB() { return 0; },
};



// 자바스크립트의 구조 분해
var list = [0, 1];
var item1 = list[0];        // 배열의 인덱스를 사용하여 변수에 할당
var item2 = list[1];
var item3 = list[2] || -1;      // || 연산자를 이용하여 배열의 해당 인덱스에 값이 없으면 기본값으로 할당
var temp = item2;       // 배열의 두값을 치환
item2 = item1;
tem1 = temp;
var obj = {
    key1: 'one',
    key2: 'two',
};
var key1 = obj.key1;        //  객체의 키값을 변수에 할당
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value';        // ||연산자를 이용하여 객체의 해당 키값이 없으면 기본값으로 할당
var newKey1 = obj.key1;     // 객체의 키값을 다른 변수에 할당


