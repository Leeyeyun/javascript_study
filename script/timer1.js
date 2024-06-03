//타이머 함수
//setInterval() 일정시간 반복 타이머
let num1 = 0; //초기값
//setInterval 타이머함수는 단독사용도 가능하지만 초기 생성 시 다른 변수에 담아두면 버튼 등의 이벤트로 제어가 가능하기 때문에 변수에 담아 생성하는 것을 추천한다.
//작성방법1
//let timer1 = setInterval(function(){},일정시간(ms))
/* let timer1 = setInterval(function(){
    num1++; //1씩 증가
    console.log(num1)
},1000) */
//작성방법2
/* let timer1 = setInterval(timer2,1000)
function timer2(){
    num1++; //1씩 증가
    console.log(num1)
} */
let num2 = 0;
/* let timer3 = setInterval(timer4,500) */
function timer4(){
    console.log(num2)
    num2++
    if(num2 > 5){num2 = 0}
}
//이미지 슬라이드 만들기
//3초 간격으로 500px 만큼 옆으로 이동하는 슬라이드 제작
//translateX(0) -> translateX(-500px) -> translateX(-1000px) -> translateX(0) -> 반복
//0, 500, 1000, 0, 500, 1000, 0 반복값부터 타이머 제작
let slide_num = 0;
let total = 0;
let slide_timer = setInterval(slide_timer_func,3000)
//DOM 출력 버전
const slide_container = document.querySelector('.slide_container')
console.log(slide_container)
function slide_timer_func(){
    //0, 500, 1000, 0, 500, 1000, 0 반복값부터 타이머 제작
    //500-1000-(0-500-1000-0-500-1000) 반복
    //slide_num 기준 : 1-2-0-1-2-0-1-2 반복
    slide_num++
    if(slide_num > 2){slide_num = 0}
    total = slide_num*500
    console.log(total, slide_num);
    slide_container.style.transform = `translateX(-${total}px)`
    //translateX(값) 500 1000 0 500 1000
}
/* 숫자 console 확인 버전 */
/* function slide_timer_func(){
    //0, 500, 1000, 0, 500, 1000, 0 반복값부터 타이머 제작
    //500-1000-(0-500-1000-0-500-1000) 반복
    //slide_num 기준 : 1-2-0-1-2-0-1-2 반복
    slide_num++
    total = slide_num*500
    if(slide_num == 3){slide_num = 0}
    console.log(total, slide_num);
} */