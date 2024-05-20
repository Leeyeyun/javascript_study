//배열
let yoil = []//빈 배열
yoil = ['월','화','수','목','금','토','일'];
console.log(yoil)
console.log(`오늘은 ${yoil[0]}요일입니다.`);
//배열 작성법 2.
let yoil_v2 = new Array(2); //빈 배열*2
console.log(yoil_v2)
console.log(yoil_v2[1])//undefined
yoil_v2[1] = '월';
console.log(yoil_v2)
yoil_v2[0] = '일';
console.log(yoil_v2[0]+'요일');
console.log(yoil_v2);
console.log("===============================")
//배열 기초 문제
//1. 원하는 색상을 6개 배열로 각각 저장하고 그 중 좋아하는 색상 2개를 골라서 콘솔에 출력하세요.
//콘솔결과 예시) 좋아하는 색상은 O, O 입니다.
let color = new Array('skyblue','coral','orange','pink','blue','aquamarine');
console.log(color)
console.log(`제가 좋아하는 색상은 ${color[0]}, ${color[5]}입니다.`)
//2. 좋아하는 과일을 5개 배열로 저장하고 모두 역순으로 출력해보세요.
const fruitArray = ['복숭아','딸기','망고','키위','오렌지'];
console.log(fruitArray);
console.log(fruitArray[4],fruitArray[3],fruitArray[2],fruitArray[1],fruitArray[0]);
//3. 날씨카드(맑음, 흐림, 비, 눈)을 배열로 생성하고 이번주 기상예보를 출력하세요.
const weatherArray = ['맑음','흐림','비','눈'];
console.log(`${yoil[0]}요일 : ${weatherArray[0]}`);
console.log(`${yoil[1]}요일 : ${weatherArray[3]}`);
console.log(`${yoil[2]}요일 : ${weatherArray[2]}`);
console.log(`${yoil[3]}요일 : ${weatherArray[1]}`);
console.log(`${yoil[4]}요일 : ${weatherArray[0]}`);
console.log(`${yoil[5]}요일 : ${weatherArray[0]}`);
console.log(`${yoil[6]}요일 : ${weatherArray[3]}`);
console.log("===============================")
let cgv = new Array(8);
console.log(cgv);
console.log(cgv.length);
cgv[0] = "A1"
console.log(cgv);
cgv[1] = "C3"
console.log(cgv);
cgv.push("F5");
console.log(cgv);
//배열 속성 활용
let megabox = []
console.log(megabox) 
console.log(megabox.length)
megabox.push('A2')
console.log(megabox);
megabox.push('B1')
console.log(megabox);
megabox.unshift('A1');
console.log(megabox);
megabox.pop()
console.log(megabox);
megabox.shift()
console.log(megabox);
megabox.push('F5','F6')
console.log(megabox);
console.log("===============================")
let lottecinema = []
let price = 10000
lottecinema.push('A1','A2','B2','B3')
console.log(lottecinema)
lottecinema.shift()
console.log(lottecinema)
lottecinema.pop()
console.log(lottecinema)
lottecinema.unshift('A1')
console.log(lottecinema)
lottecinema.push('B3')
console.log(lottecinema)
let total = lottecinema.length*price
ticket_price ()
//뒤로가기 인원 수정
lottecinema.pop()
//결제 하기 클릭 후 메세지 출력
ticket_price ()
//뒤로가기 인원 수정
lottecinema.push('D5','D6')
ticket_price ()
//가격 책정 함수
function ticket_price (){
    total = lottecinema.length*price
    console.log(`좌석 배열에 ${lottecinema.length}개의 좌석 정보가 들어있을 때`)
    console.log(`예매하신 좌석은 총 ${lottecinema.length}좌석이며, 성인 1명당 ${price}원 기준으로 총 결제 금액은 ${total}원입니다.`)
}
