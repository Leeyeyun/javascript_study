//1. DB 만들기(객체 + 배열)
//2. HTML DOM 자바스크립트 내 생성
//3. 화면(section) 출력
const data = [
    {//첫 번째 상품
        delivery:'샛별배송',
        name:'성주 참외 1.5kg',
        detail:'뽀얀 과육, 시원한 단맛',
        price:15800,
        sale:12,
        review:9999,
    },{//두 번째 상품
        delivery:'샛별배송',
        name:'대추방울토마토 750g',
        detail:'믿고 먹을 수 있는 상품',
        price:8990,
        sale:22,
        review:9999,
    },{//세 번째 상품
        delivery:'샛별배송',
        name:'국산 블루베리 100g',
        detail:'보랏빛 달콤함',
        price:8800,
        sale:20,
        review:9999,
    }
]
console.log(data)
//HTML DOM
//main > p.delivery
//main > h1
//main > p.details
//main > origin_price
//main > div.price > span.sale + span.total_price
//main > p.review
let item = "";
const section = document.querySelector('section')
console.log(item, section)
//할인율 계산 : 원가 * ((100 - 할인값) / 100)
let calc_sale = (100-data[0].sale) / 100
let total_calc =data[0].price * calc_sale

item = `<p class="delivery">${data[0].delivery}</p>`
item += `<h1>${data[0].name}</h1>`
item += `<p class="details">${data[0].detail}</p>`
item += `<p class="origin_price">${data[0].price.toLocaleString('ko-kr')}원</p>`
item += `<div class="price">`
item += `<span class="sale">${data[0].sale}%</span>`
item += `<span class="total_price">${total_calc.toLocaleString('ko-kr')}원</span>`
item += `</div>`
item += `<p class="review">${data[0].review}</p>`
// += 복합대입연산자(기존값에 더한다)
console.log(item)
section.innerHTML = item