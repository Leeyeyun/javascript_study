//올바른 id, pw => admin, 1234
let userid = 'admin';
let userpw = 1233;
/* if(userid == 'admin'){
    console.log('로그인성공')
}else{
    console.log('로그인실패')
} */
//삼항 조건연산자 => 조건식 ? 참일 때 실행 : 거짓 실행
/* let result = userid == 'admin' ? '로그인성공' : '로그인실패'
console.log(result)
console.log('--------------------------')
//if, else ver1 userpw
if(userpw == 1234){
    console.log('로그인성공')
}else{
    console.log('비밀번호를 다시 확인해주세요')
} */
//삼항 조건 ver2 userpw
let pw_result = userpw ==1234 ? '로그인 성공' : '비밀번호를 다시 확인해주세요'
console.log(pw_result)
//-----------------------논리연산+
//&&(and) 모두 참일 때 참
//||(or) 하나라도 참이면 참
console.log('--------------------------')
//if(비교연산 논리연산 비교연산)
//if(비교연산 논리연산 (비교 논리 비교))
if(userid == 'admin' && userpw =='1234'){
    console.log('로그인 성공')
}else {
    console.log('로그인 실패')
}
console.log('--------------------------')
// let num = prompt('1~20 사이 중 좋아하는 수를 입력하세요')
let num = 5
//num이 받은 숫자가 10보다 작으면 '10이하입니다'
//아니면 '11이상입니다' 출력
if(num < 10 && num>=1){
    console.log('10 이하입니다.')
}else{console.log('11 이상입니다.')}
console.log('--------------------------')
//거짓일때 추가 조건을 만들고 싶다면? else if
//if(조건식){조건식1이 참일때 실행결과}
//else if(조건식3){else if(조건식3){조건식1, 조건식 모두 거짓, 조건식3 참일 때}}
//else {조건식 1,2,3} 모두 거짓일 때 자동 실행
//위 아래 왼쪽 오른쪽 게임 캐릭터 이동 게임
const move = '왼쪽'
/* if(game_move == '왼쪽'){
    console.log('왼쪽 한칸 이동')
}else if(game_move == '오른쪽'){
    console.log('위쪽 1칸 이동')
}else if(game_move == '위쪽'){
    console.log('아래 1칸 이동')
}else if(game_move == '아래쪽'){
    console.log('아래쪽 1칸 이동')
}
else {
    console.log('잘못 입력하셨습니다.')
} */
//논리연산을 이용한 간편한 처리 방법
if(move == '왼쪽' || move == '오른쪽' || move == '위쪽' || move == '아래쪽'){
    console.log(`${move} 1칸 이동`)
}else{
    console.log('잘못 입력하셨습니다')
}
console.log('--------------------------')
//키오스크 소스 선택 : 설탕, 케챱, 머스터드
//위 3개 중 하나의 소스를 선택하면 "OO 소스 추가"
//"소스 선택 안하셨습니다."
const source = '머스터드'
if(source == '설탕' || source == '케챱' || source == '머스터드'){
    console.log(`${source} 소스 추가`)
}else{
    console.log('소스 선택 안하셨습니다.')
}//if, else if, else
//A~F 점수에 따라 평균 등급
//0~100 사이 입력
//100~90 A / 89~90 B / 79~80 C / 69~60 D / 59이하 F
let score = 89
let grade = ''
/* if(score >= 90 && score <= 100){
    grade = 'A'
}else if(score >= 80 && score <= 89){
    grade = 'B'
}else if(score >= 70 && score <= 79){
    grade = 'C'
}else if(score >= 60 && score <= 69){
    grade = 'D'
}else if(score >= 0 && score <= 59){
    grade = 'F'
}else{
    grade = '오류'
} */
if(score > 0 && score < 101){
    //1~100 참으로 인식하는 위치
    if(score >= 90){//100~90
        grade = 'A'
    }else if(score >= 80){
        grade = 'B'
    }
}else{
    alert('잘못 입력하셨습니다')
}
console.log(`당신의 점수는 ${grade} 학점입니다`)
console.log('--------------------------')
const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]
console.log(birthday_flower[0])
console.log(birthday_flower[0].flower)
//사용자가 입력한 생일을 체크해서 버튼 클릭 시
//사용자 생일 1월이라면 1월에 대한 탄생화와 꽃말이 result 출력
//출력 예)?월의 탄생화는 ?, 꽃말은 ?입니다.
//잘못입력하셨습니다. 1~12월 중 입력해주세요.
const month = document.querySelector("#month")
const btn = document.querySelector("#btn")
const result = document.querySelector(".result")
let birthday_month = ''
let flower_type = ''
let flower_content =''
console.log(month, btn, result)
btn.addEventListener('click',()=>{
    if(month.value > 0 && month.value < 13){
        birthday_month = month.value;
        flower_type = birthday_flower[month.value-1].flower;
        flower_content = birthday_flower[month.value-1].content;
        /* if(month.value == 1){
            flower_type = birthday_flower[0].flower;
            flower_content = birthday_flower[0].content;
        }else if(month.value == 2){
            flower_type = birthday_flower[1].flower;
            flower_content = birthday_flower[1].content;
        }else if(month.value == 3){
            flower_type = birthday_flower[2].flower;
            flower_content = birthday_flower[2].content;
        }else if(month.value == 4){
            flower_type = birthday_flower[3].flower;
            flower_content = birthday_flower[3].content;
        }else if(month.value == 5){
            flower_type = birthday_flower[4].flower;
            flower_content = birthday_flower[4].content;
        }else if(month.value == 6){
            flower_type = birthday_flower[5].flower;
            flower_content = birthday_flower[5].content;
        }else if(month.value == 7){
            flower_type = birthday_flower[6].flower;
            flower_content = birthday_flower[6].content;
        }else if(month.value == 8){
            flower_type = birthday_flower[7].flower;
            flower_content = birthday_flower[7].content;
        }else if(month.value == 9){
            flower_type = birthday_flower[8].flower;
            flower_content = birthday_flower[8].content;
        }else if(month.value == 10){
            flower_type = birthday_flower[9].flower;
            flower_content = birthday_flower[9].content;
        }else if(month.value == 11){
            flower_type = birthday_flower[10].flower;
            flower_content = birthday_flower[10].content;
        }else if(month.value == 12){
            flower_type = birthday_flower[11].flower;
            flower_content = birthday_flower[11].content;
        } */
        result.innerHTML = `${birthday_month}월의 탄생화는 ${flower_type}, 꽃말은 ${flower_content}입니다.`
    }else{result.innerHTML = '잘못입력하셨습니다. 1~12월 중 입력해주세요.'}
})


