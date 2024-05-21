//num1, num2 사용자가 숫자 값을 입력하고 결과버튼을 클릭했을 때
//#result 결과 위치에 "정답은 00에요!" 출력
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const btn = document.querySelector('button')
const result = document.querySelector('#result')
btn.addEventListener('click',total_func)
function total_func(){
    let num_first = Number(num1.value)
    let num_second = Number(num2.value)
    sum = num_first + num_second
    result.value = `정답은 ${sum.toLocaleString('ko-kr')}입니다!`
}