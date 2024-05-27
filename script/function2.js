//함수
//매개변수, 화살표 함수(ES6)
//ES5 기본함수 기법
function func1(num1, num2){
    console.log(num1+num2)
}
func1(1,2);
//ES6 화살표함수
//화살표함수는 function 키워드가 생략되므로 function 뒤에 작성하는 함수이름도 쓸 수 없기 때문에 익명함수라고 부른다. 대신 함수는 함수이름으로 호출하지 않으면 사용할 수 없기 때문에 function 뒤에 작성하던 함수명은 const 또는 let을 활용하여 변수로 대신 사용한다.
const func2 = (num1, num2) => {
    console.log(num1*num2)
}
func2(3,4)
console.log('---------------------------')
//----------------------------------
//2~9단 구구단 모두 result 줄바꿈으로 출력하기
//함수명 dan99
//매개변수 반드시 1개 이상 생성
//함수, 변수, 복합대입연산자, 태그 내용 삽입 속성 활용
const result = document.querySelector('.result') //dom선택변수
let total = ""; //복합대입 저장변수
//함수 1개, 매개변수 1개 생성
function dan99(num1){
    total = `${num1} X 1 = ${num1*1}<br>`
    total += `${num1} X 2 = ${num1*2}<br>`
    total += `${num1} X 3 = ${num1*3}<br>`
    total += `${num1} X 4 = ${num1*4}<br>`
    total += `${num1} X 5 = ${num1*5}<br>`
    total += `${num1} X 6 = ${num1*6}<br>`
    total += `${num1} X 7 = ${num1*7}<br>`
    total += `${num1} X 8 = ${num1*8}<br>`
    total += `${num1} X 9 = ${num1*9}<br>`
    total += `=======================<br>`
    /* console.log(total) */
    result.innerHTML += total
}
dan99(1)
dan99(2)
dan99(3)
dan99(4)
dan99(5)
dan99(6)
dan99(7)
dan99(8)
dan99(9)
//result.innerHTML = dan99(2)
console.log('---------------------------')
//매개변수, ES6 화살표함수, 리턴(함수 내에 값을 밖으로 반환)
function func3(a){
    console.log(a+5)
}
function func3_1(a){
    document.write(a+5)
}
function func3_2(a){
    window.alert(a+5)
}
/* func3(10)
func3_1(10)
func3_2(10) */
//(위) 리턴이 없는 함수
//(아래) 리턴이 있는 함수
/* const func4 = (a) => {return a+5}
func4(10) //x실행메서드없음
console.log(func4(10))
result.innerHTML = func4(10)
alert(func4(10)) */

console.log('---------------------------')
let n1 = 10
let n2 = 20
function func5(a,b){
    n1 += n2//30 20
    n2 = a+b//6 
    n1 += n2 //36 6
    return n1 //36
}
console.log(func5(2,4))
//함수의 return은 함수 내의 표현식 중 원하는 결과값만 함수 호출 위치에서 반환해서 사용할 수 있기 때문에 필수속성으로 사용한다.
const p_result = document.querySelector('p.result')
const errorBtn = document.querySelector('#error')
console.log(p_result,errorBtn)
//경고버튼 클릭 시 p.result 위치에 '잘못 클릭하셨습니다.' 함수 경고메세지 출력
function error_message(){
    return '잘못 클릭하셨습니다.'
}
errorBtn.addEventListener('click',function(){
    p_result.innerText = error_message()
})
//동의버튼 클릭 시 result 위치에 '동의하셨습니다'
//동의안함버튼 클릭 시 result 위치에 '비동의하셨습니다'
function agree_message(){
    return '동의하셨습니다'
}
function disagree_message(){
    return '비동의하셨습니다'
}
const p2_result = document.querySelector('p.result:nth-of-type(2)')
const agreeBtn = document.querySelector('#agree')
const disagreeBtn = document.querySelector('#disagree')
console.log(p2_result)
agreeBtn.addEventListener('click',function(){
    p2_result.innerText = agree_message()
})
disagreeBtn.addEventListener('click',function(){
    p2_result.innerText = disagree_message()
})