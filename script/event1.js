const btn1 = document.querySelector("#btn1")
console.log(btn1)
//버튼 클릭했을 때 실행
//인라인스크립트 <button onClick="실행함수"></button>
//JS 내에서 addEventListener 메소드 활용한 이벤트 방식
//이벤트대상.addEventListener('이벤트종류',실행함수)
/* 1. 함수 따로 작성하는 방법
btn1.addEventListener('click',btn1_func)
 */
function btn1_func(){
    console.log('test')
}
//2. 함수 내부에 작성하는 방법
btn1.addEventListener('click',function(){
    console.log('test')
})
btn1.addEventListener('mouseover',btn1_func)
btn1.addEventListener('mousedown',btn1_func)
//-------------------------------------
/* let num1 = prompt('') //더하기 첫째 수
let num2 = prompt('') //더하기 두번째 수 */
//btn2 클릭했을 때 위 prompt 메서드로 받은 두개의 수를 더해서 경고창에 출력
//1+2=3
const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click',total_func)
function total_func(){
    let num1 = prompt('') //더하기 첫째 수
    let num2 = prompt('') //더하기 두번째 수
    sum = Number(num1)+Number(num2)
    alert(`${num1} + ${num2} = ${sum}`)
}