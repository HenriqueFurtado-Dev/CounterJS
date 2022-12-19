// Div number
const num = document.querySelector('.num')

// Buttons
const more = document.querySelector('#more')
const restart = document.querySelector('#restart')
const low =  document.querySelector('#low')

// Define var
var count = 0

// 0 in DIV
num.innerHTML = "0"

// Click buttons
more.addEventListener("click", function(){
    count += 1
    var plus = count += 0
    num.innerHTML = plus
    num.style.color = "green"
})

restart.addEventListener("click",function() {
    num.innerHTML = "0"
    count = 0
    plus = 0
    num.style.color = "yellow"
}  )

low.addEventListener("click", function(){
    var lower = count -= 1
    num.innerHTML = lower
    num.style.color = "red"
})

