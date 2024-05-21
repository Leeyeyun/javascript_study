/* 
계산식) 적정체중 = (본인신장-100)*0.9
- 현재 키와 몸무게를 자유롭게 입력하고
- 버튼을 눌렀을 때 최종 목표 칸에 메세지 출력하기
결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.
*/
const height = document.querySelector("#height")
const weight = document.querySelector("#weight")
const goals = document.querySelector("#goals")
const btn = document.querySelector("button")
console.log(height, weight, btn)
btn.addEventListener('click',goal_func)
function goal_func(){
    let user_h = Number(height.value)
    let user_w = Number(weight.value)
    let calc = (user_h - 100) * 0.9
    goals.value = `적정체중은 ${calc}kg이며, ${user_w - calc}kg 초과되셨습니다. 노력하세요.`
}