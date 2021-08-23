var string1 = '안녕하세요';  // 템플릿 문자열에 $기호 사용하여 변수 포함
var string2 = '반갑습니다';
var greeting = `${string1} ${string2}`;
var product = {name: '도서', price:'4200원'};
var message =`제품${product.name}의 가격은 ${product.price}입니다.`;
var multiLine = `문자열1
문자열2`;           // enter 를 눌러 줄을 바꾸는 것 허용 
var value1 = 1;
var value2 = 2;
var boolValue =false;
var operator1 = `곱셈값은 ${value1*value2}입니다.`; // 템플릿 문자열에 $기호 사용하여 연산 포함
var operator2 = `${boolValue ? '참' : '거짓'}입니다.`;