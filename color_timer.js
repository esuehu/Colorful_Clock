let day = 0;
let time = 0;
let buffer = 0;

let color_R = 0;
let color_G = 0;
let color_B = 0;
let color_code = "";

function startTimer(){
//大体1秒おきに描画関数を呼び出し
    setInterval('showTimer()', 1000);
}
//タイマー停止用だけど使ってないから消してもいい
function stopTimer(){
    clearInterval(timer);
}
function showTimer(){
//#ffffffまで行ったらリセット,日を跨いだら一日分の秒数加算
    if (time > 16777215){
        time = 0;
    }else if (day != new Date().getDate()){
        const date1 = new Date();
        buffer += 86400;
        time = date1.getHours()*3600 + date1.getMinutes()*60 + date1.getSeconds() + buffer;
        day = date1.getDate();
    }else{
        const date1 = new Date();
        time = date1.getHours()*3600 + date1.getMinutes()*60 + date1.getSeconds() + buffer;
    }
    let color = "#" + time.toString(16).toUpperCase().padStart(6,"0");

//RGBをそれぞれ取得
    color_R = parseInt(color.slice(1,3), 16);
    color_G = parseInt(color.slice(3,5), 16);
    color_B = parseInt(color.slice(5,7), 16);

    console.log(color);
    console.log(day);
    console.log(color_R,color_G,color_B);
    console.log(parseInt(color.slice(1,7), 16));

//テキストと背景更新
    document.getElementById('timer').textContent="#" + time.toString(16).toUpperCase().padStart(6,"0");
    document.body.style.backgroundColor = `rgb(${color_R},${color_G},${color_B})`;
}

day = new Date().getDay();
