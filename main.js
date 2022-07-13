
let interval = null
function start(){
    if (interval){
        clearInterval(interval)
    }
    
    let time = Number(document.getElementById("input-time").value)

    if (time < 1000) {
        time = 1000
    }

    interval = setInterval(changeBg, time);
}

let bg_list = [1,2,3,4,5,6]
let index = 0
function changeBg(){        
    index++
    if (index > bg_list.length) {
        index = 0
    }

    let bg_skr = bg_list[index]
    document.body.style.backgroundImage = `url("images/${bg_skr}.jpg")`
}