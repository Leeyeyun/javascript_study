const data = [
    {//첫 번째 상품
        title:'나를 소모하지 않는 현명한 태도에 관하여',
        author:['마티아스 뇔케','이미옥'],
        publisher:'퍼스트펭귄',
        date:'2024월 03월',
        price:17800,
        sale:10,
        tag:['#얼리리더','#이달의굿즈','나를바라보다','인간관계에대하여']
    },{//두 번째 상품
        title:'하루 한 장 나의 어휘력을 위한 필사 노트',
        author:'유선경',
        publisher:'위즈덤하우스',
        date:'2024월 03월',
        price:23800,
        sale:10,
        tag:['#얼리리더','#필사','#쓰는맛']
    },{//세 번째 상품
        title:'불변의 법칙',
        author:['모건 하우절','이수경'],
        publisher:'서삼독',
        date:'2024월 02월',
        price:25000,
        sale:10,
        tag:['#얼리리더','#부자되는법','#부자만들기','#돈좀벌어보자','돈모으고싶을때']
    }
]
//title = main>h1>a
//author,publisher,date = div.info>p>a + a + p
//price,sale = div.price>p.total_price + p
//tag = div.tag_wrap > p
let item = "";
//할인가격 계산
let calc_sale = (100-data[1].sale) / 100
let total_calc =data[1].price * calc_sale
const section = document.querySelector('section');
console.log(item, section);
item += `<div class="book">`
item += `<h1><a href="#">${data[1].title}</a></h1>`
item += `<div class="info">`
item += `<p class="author"><a href="#">${data[1].author}</a>저</p>`
item += `<a href="#" class="publisher">${data[1].publisher}</a>`
item += `<p class="date">${data[1].date}</p>`
item += `</div>`
item += `<div class="price">`
item += `<p class="total_price">${total_calc.toLocaleString('ko-kr')}원</p>`
item += `<p class="sale">(${data[1].sale}% 할인)</p>`
item += `</div>`
item += `<p class="tag">`
item += `${data[1].tag[0]}
        ${data[1].tag[1]}
        ${data[1].tag[2]}`
item += `</p>`
item += `</div>`
console.log(item)
section.innerHTML = item

