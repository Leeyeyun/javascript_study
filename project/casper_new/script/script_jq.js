//============================ jquery ver ============================//
const $sub = $('.sub');
const $sub_bg = $('.sub_bg');
const $nav = $('nav');
const $nav_clone = $nav.clone()//true 생략가능
const $m_nav = $('.m_nav');
const $all_nav = $('.all_nav');
console.log($sub, $sub_bg, $nav, $m_nav)

$sub_bg.hide();
$sub.hide();

$m_nav.append($nav_clone);

//마우스 올렸을 때 서브 보이기
$nav.on('mouseover',function(){
    $sub_bg.stop().slideDown(300)
    $sub.stop().slideDown(300)
})
//마우스 나갔을 때 서브 숨기기
$nav.on('mouseout',function(){
    $sub_bg.stop().slideUp(300)
    $sub.stop().slideUp(300)
})

//======================== 모바일 nav jquery
const $all_nav_m = $('.m_nav .all_nav')
const $nav_m = $('.m_nav nav')
const $sub_m = $('.m_nav .sub')
const $gnb_li_m = $('.m_nav .gnb > li')
console.log($all_nav_m, $nav_m, $sub_m, $gnb_li_m)
//제이쿼리 반복문 for, 조건문 if, 삼항조건, 함수 작성방법 js 동일
//제이쿼리 클래스 적용 명령
//js(classList.add) -> jq(addClass(클래스명))
//js(classList.toggle) -> jq(toggleClass(클래스명))
//제이쿼리객체.css('속성','값').css('속성','값');
//제이쿼리객체.css({속성:값, 속성:값});
//제이쿼리객체.find('자식 자손 대상')
//제이쿼리객체.eq(인덱스)

$nav_m.addClass('m_nav_hide')
$all_nav_m.on('click',function(e){
    e.preventDefault();
    $nav_m.toggleClass('m_nav_hide')
})
$sub_m.hide();
$gnb_li_m.on('click',function(e){
    e.preventDefault();
    $sub_m.hide();
    //$(this)란? 클릭 이벤트 현재 대상
    $(this).find('.sub').show();
})
