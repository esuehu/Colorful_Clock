//origin,起動した日,which_day,起動してからの経過日数,day_memory,経過日数の比較用変数,time,経過秒数記録用,
let origin = 0;
let which_day = 0;
let day_memory = 0;
let time = 0;
let buffer = 0;

let color_R = 0;
let color_G = 0;
let color_B = 0;
let color_code = "";

//起動してからの日数計算
function whattimenow(){
    let date_now = new Date();
    which_day = parseInt(Number((date_now - origin)/1000)/ 86400);
    console.log("Day '" + which_day.toString() +"' after wiped");
}

function startTimer(){
//大体1秒おきに描画関数を呼び出し
    setInterval('showTimer()', 1000);
}
function showTimer(){
//#ffffffまで行ったらリセット,日を跨いだら一日分の秒数加算
    if (time > 16777215){
        time = 0;
    }else if (which_day != day_memory){
        const buffer = 86400 * which_day;
        const date1 = new Date();
        time = date1.getHours()*3600 + date1.getMinutes()*60 + date1.getSeconds() + buffer;
        day_memory = which_day;
    }else{
        const date1 = new Date();
        time = date1.getHours()*3600 + date1.getMinutes()*60 + date1.getSeconds() + buffer;
    }
    let color = "#" + time.toString(16).toUpperCase().padStart(6,"0");

//RGBをそれぞれ取得
    color_R = parseInt(color.slice(1,3), 16);
    color_G = parseInt(color.slice(3,5), 16);
    color_B = parseInt(color.slice(5,7), 16);

    console.log(parseInt(color.slice(1,7), 16));
    console.log(color);
    console.log(color_R,color_G,color_B);
    whattimenow();
//テキストと背景更新
    document.getElementById('timer').textContent="#" + time.toString(16).toUpperCase().padStart(6,"0");
    document.body.style.backgroundColor = `rgb(${color_R},${color_G},${color_B})`;
}

origin = new Date().getTime();