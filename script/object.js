//객체
//2개 이상의 데이터 담을 수 있다.
//배열 = 2개 이상의 데이터 "값"
//객체 = 2개 이상의 데이터 "속성", "값"
const obj1 = {
    type:'코리안 숏헤어',
    age:2,
    color:['흰색','갈색']
}
console.log(obj1);
console.log(obj1.type);
console.log(`고양이 종은 ${obj1.type}입니다.`);
console.log(obj1.color);
console.log(obj1.color[0], obj1.color[1]);
const cat1 = {
    type:'러시안 블루',
    color:'회색',
    age:'1',
    gender:'암컷',
    health:'양호',
    birth:'5/20',
    name:'러블',
    birth_message:function(){
        return `${this.name}아 ${this.birth} 생일축하해~!`
    }
}
console.log(cat1);
console.log(cat1.birth_message())
console.log('=========================================')
/* const movie = {
    ko_title:'퓨리오사-매드맥스 사가',
    en_title:'Furiosa: A Mad Max Saga',
    reservation_status:'예매중',
    reservation_limited:'D-2',
    reservation_rate:'37.4%',
    preegg:'99%',
    director:'조지 밀러',
    actor:['안야 테일러 조이','크리스 헴스워스','톰 버크'],
    genre:'액션',
    age:'15세이상관람가',
    time:'148분',
    country:'미국',
    release:'2024.05.22',
    poster:'./images/mad_max_poster.jpg',
    story:'문명 붕괴 45년 후, 황폐해진 세상에 무참히 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 인생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터'
} */
const movie = [{
    ko_title:'퓨리오사-매드맥스 사가',
    en_title:'Furiosa: A Mad Max Saga',
    reservation_rate:'37.4%',
    preegg:'99%',
    director:'조지 밀러',
    actor:['안야 테일러 조이','크리스 헴스워스','톰 버크'],
    genre:'액션',
    age:'15세이상관람가',
    time:'148분',
    country:'미국',
    release:'2024.05.22',
    poster:'./images/mad_max_poster.jpg',
    story:'문명 붕괴 45년 후, 황폐해진 세상에 무참히 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 인생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터'
},{
    ko_title:'청춘18x2 너에게로 이어지는 길',
    en_title:'18×2 Beyond Youthful Days',
    reservation_rate:'12.3%',
    preegg:'99%',
    director:'후지이 미치히토',
    actor:['허광한','키요하라 카야','장효전','미치에다 슌스케','쿠로키 하루','마츠시게 유타카','구로키 히토미'],
    genre:['로맨스','멜로'],
    age:'12세이상관람가',
    time:'148분',
    country:'미국',
    release:'2024.05.22',
    poster:'./images/mad_max_poster.jpg',
    story:'문명 붕괴 45년 후, 황폐해진 세상에 무참히 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 인생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터'
}]
console.log(movie);
console.log(`<img src="${movie[0].poster}" alt="${movie[0].ko_title}">`)
console.log('=========================================')
//고양이1/코숏/1살/남/갈색,흰색,검은색/중성화 유
//고양이2/코숏/2살/여/검은색,흰색/중성화 무
// 고양이3/코숏/3살/남/흰색,회색/중성화 유
const cats = [{
    name:'브라우니',
    type:'코리안 숏헤어',
    age:'1살',
    gender:'남',
    color:['갈색','흰색','검은색'],
    neutrification:'유'
},{
    name:'오레오',
    type:'코리안 숏헤어',
    age:'2살',
    gender:'여',
    color:['검은색','흰색'],
    neutrification:'무'
},{
    name:'그레이',
    type:'코리안 숏헤어',
    age:'3살',
    gender:'남',
    color:['흰색','회색'],
    neutrification:'유'
}]
console.log(cats)
console.log(`현재 보호소 동물은 ${cats.length}마리입니다.`)
console.log(`${cats[0].name}의 나이는 ${cats[0].age}이며, 중성화 유무는 ${cats[0].neutrification}입니다.`)
console.log(`${cats[1].name}의 나이는 ${cats[1].age}이며, 중성화 유무는 ${cats[1].neutrification}입니다.`)
console.log(`${cats[2].name}의 나이는 ${cats[2].age}이며, 중성화 유무는 ${cats[2].neutrification}입니다.`)
//현재 보호소 동물 나이대는 ?살, ?살, ?살입니다.
console.log(`현재 보호소 동물 나이대는 ${cats[0].age}, ${cats[1].age}, ${cats[2].age}입니다.`)
