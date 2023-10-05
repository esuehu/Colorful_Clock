//origin,原点とする日付,time,経過秒数記録用,
let origin = new Date(2023,8,18,16).getTime();
let time = 0;

let color_R = 0;
let color_G = 0;
let color_B = 0;
let color_code = "";

let clock_query = document.querySelector('.clock');
const toggle_clock_button = document.querySelector('.button_clock')
let timer_mode = false;

function startTimer(){
//大体1秒おきに描画関数を呼び出し
    
    setInterval('showTimer()', 1000);
}
function clock(){
    let time_now = new Date();
    let h = time_now.getHours().toString();
    let m = time_now.getMinutes().toString();
    let s = time_now.getSeconds().toString();

    return(h.padStart(2,"0") + ":" + m.padStart(2,"0") + ":" + s.padStart(2,"0"));
}
function clock_draw(){
    if(!timer_mode){
        document.getElementById('clock').textContent = clock();
    }
    else{
        document.getElementById('clock').textContent = time.toString() + "s";
    }
}
function toggle_clock(e){
    if (e.target == toggle_clock_button && clock_query.className != "clock"){
        if(timer_mode){
            clock_query.classList.remove('is-active');
            clock_query.style.opacity = 0;
            console.log("hide")
            timer_mode = !timer_mode;
        }
        else{
            timer_mode = !timer_mode;
        }
        console.log(timer_mode)
    }
    else if (e.target == toggle_clock_button && clock_query.className == "clock"){
        clock_query.classList.add('is-active');
        clock_query.style.opacity = 1;
    }   
    clock_draw();
}
function showTimer(){
//#ffffffまで行ったらリセット
    if (time > 16777215){
        const cycle = parseInt(time / 1677215);
        origin += cycle * 1677215*1000;
        time = parseInt(Number(new Date().getTime() - origin)/1000);
    }else{
        const time_now = new Date();
        time = parseInt(Number(new Date().getTime() - origin)/1000);
    }
    let color = "#" + time.toString(16).toUpperCase().padStart(6,"0");

//RGBをそれぞれ取得
    color_R = parseInt(color.slice(1,3), 16);
    color_G = parseInt(color.slice(3,5), 16);
    color_B = parseInt(color.slice(5,7), 16);

    console.log(parseInt(color.slice(1,7), 16));
    console.log(color);
    console.log(color_R,color_G,color_B);

    clock_draw();

//テキストと背景更新
    document.getElementById('timer').textContent="#" + time.toString(16).toUpperCase().padStart(6,"0");
    document.body.style.backgroundColor = `rgb(${color_R},${color_G},${color_B})`;
}
addEventListener('click',toggle_clock);
time = parseInt(Number(new Date().getTime() - origin)/1000);