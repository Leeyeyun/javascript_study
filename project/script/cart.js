//item_wrap 안 자식 item의 개수를 top의 total_num 출력
//item_wrap 안 자식 item의 개수 <= 콘솔 출력
const item_wrap = document.querySelector('.item_wrap')
console.log(item_wrap.childElementCount)
//item의 개수를 top의 total_num 출력
const total_num = document.querySelector('.total_num')
total_num.innerText = item_wrap.childElementCount