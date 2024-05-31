const btn = document.querySelectorAll('.btn')
const bg = document.querySelectorAll('.bg')
const nav_a = document.querySelectorAll('nav a')
const circle = document.querySelector('.mouse')
console.log(btn, bg, nav_a)
//(스크롤 전) 첫번째 a에 대한 활성화 표시
nav_a[0].classList.add ('active')
//(스크롤 후) 스크롤 위치에 따라 활성화 변경
window.addEventListener('scroll',()=>{
    nav_a.forEach((target, index)=>{
        /* console.log(target, index) */
        if(bg[index].getBoundingClientRect().y <= 400){
            //active 쌓임 방지 초기화 함수 호출
            active_reset()
            //active 활성화 classList
            target.classList.add('active')
        }
    })
})
//active 쌓임 방지 초기화 함수 생성
function active_reset(){
    for(let i of nav_a){i.classList.remove('active')}
}
//abcd 버튼 스크롤 인식
btn.forEach((target, index)=>{
    console.log(target, index)
    target.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0,bg[index].offsetTop)
    })
})
//마우스 따라다니는 이벤트
window.addEventListener('mousemove',(e)=>{
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})
//window mousemove 인식하는 매개변수 종류
/* 
1. screenX, Y : 사용자 모니터 화면 기준으로 좌표 표시
2. clientX, Y : 웹브라우저의 뷰포트 크기 기준으로 좌표 표시
3. offsetX, Y : 객체(노드) 위치 기준으로 좌표 표시
4. pageX, Y : 전체 세로 길이 포함 문서 기준으로 좌표 표시
*/