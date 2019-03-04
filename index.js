console.log("Hello world")
let count = 0;

const element = document.getElementById("counter")


function increase(){
    count++;
    console.log(count)
    element.innerText = count
}


function decrease(){
    count--;
    console.log(count)
    element.innerText = count
}


function reset(){
    count = 0;
    console.log(count)
    element.innerHTML = count
}

function selectTheme(theme){
    document.getElementsByTagName("body")[0].className = theme
    document.getElementsByTagName("main")[0].className = theme
    const button = document.getElementsByTagName("button")
    for(let i = 0; i < button.length; i++){
        button[i].className = theme
    }
}