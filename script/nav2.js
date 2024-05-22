//1. sub 숨기기 <ul class="sub">
//2. gnb에 마우스를 올리면 <ul class="gnb"><li>
//3. sub 3개가 모두 출력 <ul class="sub">
//동적 절차 체크 후 HTML 태그 확인 후
// HTML DOM 필요 변수 생성
const sub = document.querySelectorAll(".sub")
const gnb = document.querySelectorAll(".gnb > li")
const gnbColor = document.querySelectorAll(".gnb > li > a")
console.log(sub, gnb, gnbColor)
//함수 모음
function mouseoverEvent(){
    sub[0].style.display = 'block'
    sub[1].style.display = 'block'
    sub[2].style.display = 'block'
}
function mouseoutEvent(){
    sub[0].style.display = 'none'
    sub[1].style.display = 'none'
    sub[2].style.display = 'none'
}
//1. sub 숨기기
sub[0].style.display = 'none'
sub[1].style.display = 'none'
sub[2].style.display = 'none'
//2. gnb에 마우스를 올렸다 떼면 -> 3. .sub 나왔다가 사라지기
gnb[0].addEventListener('mouseover',mouseoverEvent)
gnb[0].addEventListener('mouseout',mouseoutEvent)
gnb[1].addEventListener('mouseover',mouseoverEvent)
gnb[1].addEventListener('mouseout',mouseoutEvent)
gnb[2].addEventListener('mouseover',mouseoverEvent)
gnb[2].addEventListener('mouseout',mouseoutEvent)
//gnb hover 시 컬러 및 폰트 두께 변화
gnbColor[0].addEventListener('mouseover',function(){
    gnbColor[0].style.color = '#095BAC'
})
gnbColor[0].addEventListener('mouseout',function(){
    gnbColor[0].style.color = '#000'
})
gnbColor[1].addEventListener('mouseover',function(){
    gnbColor[1].style.color = '#095BAC'
})
gnbColor[1].addEventListener('mouseout',function(){
    gnbColor[1].style.color = '#000'
})
gnbColor[2].addEventListener('mouseover',function(){
    gnbColor[2].style.color = '#095BAC'
})
gnbColor[2].addEventListener('mouseout',function(){
    gnbColor[2].style.color = '#000'
})