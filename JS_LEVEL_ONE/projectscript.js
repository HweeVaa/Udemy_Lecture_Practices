var firstName = prompt("환영합니다. 이름을 입력하세요.");
var lastName = prompt("성을 입력하세요.");
var age = prompt("나이를 입력하세요")
var tall = prompt("신장(cm)을 입력하세요.")
var petname = prompt("반려동물 이름을 입력하세요.")
alert("정보를 제공해주셔서 감사합니다.")

if (firstName[0] == lastName[0] && age > 20 && age < 30 && tall >= 170 && petname.includes("y") == true) {
    console.log("검사를 통과하셨습네다. 환영합네다 동무!!")
}

else {
    console.log("표시할 정보 없음")
}