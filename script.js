let time = document.querySelector("#time")
let start = document.querySelector("#start")
let restart = document.querySelector("#restart")
let pause = document.querySelector("#pause")
let starter;
let milisec = "00"
let secend = "00"
let minute = "00"
let startTry = 0
let avalin = 1

function startKey() {
    if (startTry == 0) {
        start.setAttribute("disabled","")
        startTry++
        starter = true
        chronimeter()
    } else if (startTry > 0 && starter == "falsee") {
        start.setAttribute("disabled","")
        starter = true
    }
}
function pauseKey() {
    if (starter == true) {
        starter = "falsee"
        avalin = 1
    } else if (starter == "falsee" && avalin != 0) {
        starter = true
        avalin = 1
    }
}
function restartKey() {
    time.innerHTML = "00:00:00"
    milisec = "00"
    secend = "00"
    minute = "00"
    starter = "falsee";
    start.removeAttribute("disabled","")
    avalin = 0
}
function chronimeter() {
    if (starter == true) {
        setInterval(() => {
            if (starter == true) {
                milisec++
                if (milisec.length == 1) {
                    milisec = milisec.padStart(2, "0")
                }
                time.innerHTML = `${minute.toString().padStart(2, "0")}:${secend.toString().padStart(2, "0")}:${milisec.toString().padStart(2, "0")}`
                if (milisec == 99) {
                    secend++
                    milisec = "00"
                } else if (secend == 60) {
                    minute++
                    secend = "00"
                }
            }
        }, 10)
    }
}
start.addEventListener("click", startKey)
pause.addEventListener("click", pauseKey)
restart.addEventListener("click", restartKey)
addEventListener("keydown", (e) => { if (e.key == " ") { pauseKey() } })
addEventListener("keydown", (e) => { if (e.key == "Enter") { startKey() } })
addEventListener("keydown", (e) => { if (e.key == "Backspace") { restartKey() } })