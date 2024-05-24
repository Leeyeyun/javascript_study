//지역변수와 전역변수
//스코프(함수 접근가능 위치)
//지역스코프, 전역스코프
let b = 20;
let c = 30;
function test(){
    //함수의 블록스코프(지역변수) 위치
    let a = 10;
    console.log(a+b)
}
test()
/* console.log(a) */ //error
/* console.log(a+b) */ //error(지역변수를 전역위치에서 사용하려고 했기 때문)
console.log(b+c);
//------------------------------------
let x = 1;
let y
function func1(){
    y = 5;
    console.log(x+y) //6
}
function func2(){
    func1()
    let z = 10;
    console.log(x+y+z) //16
}
func2()//NaN == Not a Number(1+undefined+10)
console.log('--------------------------------')
//자판기 함수(매개변수==파라미터 연습)
//매개변수 없는 vending_machine 함수
//콜라, 사이다 판매 자판기
/* function vending_machine1(){//콜라 버튼 클릭 함수
    console.log('콜라 1개 출력')
}
function vending_machine2(){//사이다 버튼 클릭 함수
    console.log('사이다 1개 출력')
}
vending_machine1()
vending_machine1()
vending_machine2() */
const vending_machine1 = ()=>{
    console.log('콜라 1개 출력')
}
const vending_machine2 = ()=>{
    console.log('사이다 1개 출력')
}
vending_machine1()
vending_machine1()
vending_machine2()
//매개변수 있는 함수 만들기
//1. function vending_machine3(drink) -> drink 매개변수 생성
//2. vending_machine3('콜라') -> 함수 호출 시 매개변수에 대입값 작성('콜라'가 drink 매개변수에 대입됨)
//3. console.log(drink) -> 매개변수에 대입된 값이 함수 내에 실행코드에 전달됨.
//-----------------------------------------------------------------------------
/* function vending_machine3(drink){
    console.log(drink+` 1개 출력`)
}
//함수 호출 시 매개변수에 대입하는 값을 괄호안에 작성
vending_machine3('콜라')
vending_machine3('사이다')
vending_machine3('탄산수') */
console.log('-----------------------------')
const vending_machine3 = (drink)=>{
    console.log(drink + `1개 출력`)
}
vending_machine3('콜라')
vending_machine3('사이다')
vending_machine3('탄산수')
//-----------------------------------------------------------------------------
//매개변수 2개 이상 필요한 경우
//함수 내에 수정 데이터 == 매개변수(파라미터)
/* function vending_machine4(drink, num){
    console.log(`${drink} ${num}개 주문완료`);
}
vending_machine4('콜라',6)//argument
console.log('--------------------------------')
function kiosk(drink='물', ice_hot, num, option){
    console.log(`${drink} ${ice_hot} ${num}잔 ${option} 주문하셨습니다.`)
}
kiosk('아메리카노','ICE',10,'연하게')
kiosk() */
console.log('-----------------------------')
const kiosk = (drink, ice_hot, num, option='옵션선택안함')=>{
    console.log(`${drink} ${ice_hot} ${num}잔 ${option} 주문하셨습니다.`)
}
kiosk('아메리카노','ICE',10,'연하게')
kiosk('카페라떼','ICE',2)