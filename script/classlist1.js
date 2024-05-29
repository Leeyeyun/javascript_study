const li = document.querySelectorAll('.list li')
const btn = document.querySelector('#login_btn')
console.log(li)
//js style 속성을 이용한 css 적용법
li[0].style.backgroundColor = 'aqua'
li[0].style.borderTop = '2px solid red'
//css class 호출해서 적용하는 방법
//className은 속성으로, 대입연산자를 이용한다.
li[1].className = 'set1'
li[1].className += ' set2'
//classList 메서드 방법(대입연산자가 아니기 때무네 className보다 주의해야할 사항이 적다)
li[2].classList.add ('set2')
li[2].classList.add ('set1')
li[2].classList.remove ('set2')
li[5].addEventListener('click',()=>{
    console.log('.')
})
//=========================
const ip_security = document.querySelector('#ip_security');
const ip_on = ip_security.querySelector('span')
console.log(ip_security, ip_on)
//ip보안 버튼을 클릭 시 자식 span에 on클래스를 toggle 적용
ip_security.addEventListener('click',()=>{
    ip_on.classList.toggle('on')
    ip_security.classList.toggle('on')
})
//질문답변 js
const q = document.querySelectorAll('.q')
console.log(q)
//질문1 클릭 시 답변1 보이기/숨기기 toggle 반복
//질문2 클릭 시 답변2 보이기/숨기기 toggle 반복
q[0].addEventListener('click',()=>{
    q[0].nextElementSibling.classList.toggle('on')
})
q[1].addEventListener('click',()=>{
    q[1].nextElementSibling.classList.toggle('on')
})