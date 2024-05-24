//#re 영역에 100자 이상을 쓰고 리뷰 등록버튼을 클릭하면 "등록완료" 팝업 출력
//#re 영역에 100자 이하를 쓰고 리뷰 등록버튼을 클릭하면 "100자 이상 써주세요" 팝업 출력
const textarea = document.querySelector('#re')
const btn = document.querySelector('#reviewBtn')
let result = ''
console.log(textarea, btn)
btn.addEventListener('click',function(){
    console.log(textarea.value.length);
    result = textarea.value.length > 100 ? '등록완료' : '100자 이상 입력하세요'
    alert(result)
})