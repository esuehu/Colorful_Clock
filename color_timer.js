let flag =0;
let time = 0;
let color_R = 0;
let color_G = 0;
let color_B = 0;
let color_code = "";

function startTimer(){
    setInterval('showTimer()', 1000);
}
function stopTimer(){
    clearInterval(timer);
}
function showTimer(){
    color_code = "";
    if (time > 16777215){
        time = 0;
    }else{
        const date1 = new Date();
        time = date1.getHours()*3600 + date1.getMinutes()*60 + date1.getSeconds();
        console.log(time);
    }
    let color = "#" + time.toString(16).toUpperCase().padStart(6,"0");

    color_R = parseInt(color.slice(1,3), 16);
    color_G = parseInt(color.slice(3,5), 16);
    color_B = parseInt(color.slice(5,7), 16);

    console.log(color);
    console.log(color_R,color_G,color_B)



    document.getElementById('timer').textContent="#" + time.toString(16).toUpperCase().padStart(6,"0");
    document.body.style.backgroundColor = `rgb(${color_R},${color_G},${color_B})`;
}


//