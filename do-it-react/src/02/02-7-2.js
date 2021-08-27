// ES6 의 구조분해와 구조 할당 사용 방법
var list = [0, 1];
var [
    item1,      // 대괄호 블록 [] 사이에 추출하고자 하는 값의 인덱스 위치에 변수를 배치 
    item2,
    item3 = -1,     // 선언부호(=) 를 변수와 함께 사용하여 기본값을 할당
] = list;
[item2, item1] = [item1, item2];        // 인덱스 위치에 각각 변경할 변수를 교차 배치하여 배열의 두값을 치환

var obj = {
    key1: 'one',
    key2: 'two',
};
var {
    key1: newKey1,      //콜론(:) 부호와 함께 새 변수명을 선언하여 추출된 키값을 다른 변수명으로 할당
    key2,       // 객체의 키값을 변수에 할당
    key3 = 'default key3 value',        // 선언부호(=) 를 변수와 함께 사용하여 기본값을 할당
} = obj;


var [item1, ...otherItems] = [0, 1, 2];
var { key1, ...other } = { key1: 'one', key2: 'two' };
// otherItems = [1,2]
// others = {key2:'two'}