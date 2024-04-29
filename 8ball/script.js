var timer = 30;
var bars = "||||||||||||||||||||||||||||||";
var ext1_used = false;
var ext2_used = false;
var timerA;


function updateValue(id,variable){
    let messageElement = document.getElementById(id);
    messageElement.textContent = variable;
}

function updateColor(id,color){
    let messageElement = document.getElementById(id);
    messageElement.style.color = color;
}

function updateBackground(id,background){
    let messageElement = document.getElementById(id);
    messageElement.style.backgroundColor = background;
}

function updateAlign(id,align){
    let messageElement = document.getElementById(id);
    messageElement.style.textAlign = align;
}

function toggleEnable(id,enable){
    const messageElement = document.getElementById(id);
    if (enable) {
        messageElement.disabled = false;
        messageElement.style.opacity=1;
    } else if (!enable) {
        messageElement.disabled = true;
        messageElement.style.opacity=0.25;
    }
    
}

function toggle(ball){
    if(document.getElementById(ball).style.opacity==1){
        document.getElementById(ball).style.opacity =0.25;
    } else {
        document.getElementById(ball).style.opacity=1;
    }
}

function reset(){
    for(i=1;i<=15;i++){
        document.getElementById("b"+i).style.opacity=1;
    }

    timer = 30;
    bars = "||||||||||||||||||||||||||||||";
    ext1_used = false;
    ext2_used = false;
    updateValue("ext1","EXTENSION");
    updateValue("ext2","EXTENSION");
    stop();

}

function start(player){

    turn = player;
    timer = 30;
    bars = "||||||||||||||||||||||||||||||";

    updateValue("bar",bars);
    updateValue("secs",timer);
    updateValue("indicator","PLAYER " + turn);
    updateColor("bar","green");
    updateColor("secs","green");

    document.getElementById("indicator").style.visibility = "visible";
    document.getElementById("bar").style.visibility = "visible";
    document.getElementById("secs").style.visibility = "visible";

    if (turn == 1) {
        toggleEnable("start1",false);
        toggleEnable("start2",false);

        toggleEnable("stop1",true);

        if (!ext1_used){
            toggleEnable("ext1",true);
            document.getElementById("ex").style.visibility = "visible";
        }

        timerA = setInterval(decrement,1000);

    } else if (turn == 2) {
        toggleEnable("start1",false);
        toggleEnable("start2",false);

        toggleEnable("ext2",true);
        toggleEnable("stop2",true);

        if (!ext2_used){
            toggleEnable("ext2",true);
            document.getElementById("ex").style.visibility = "visible";
        }

        timerA = setInterval(decrement,1000);
    }

}

function decrement(){

    timer--;

        bars = Array(timer+1).join("|");
        updateValue("secs", timer);
        
        if (timer > 10 && timer <= 30) {
            updateAlign("bar","left");
            updateColor("bar","green"); 
            updateValue("bar",bars);
        } else if (timer > 0 && timer <= 10) {
            updateColor("bar","red"); 
            updateColor("secs","red");

            updateValue("bar",bars);
        } else if (timer == 0) {
            updateAlign("bar","center")
            updateValue("bar","TIME FOUL")

            document.getElementById("ex").style.visibility = "hidden";
            document.getElementById("secs").style.visibility = "hidden";

            stop();
        }

}

function extension(player){
    if(timer > 0){

        if (turn==1 && !ext1_used){
            timer = timer + 30; 

            ext1_used = true;

            updateValue("ext1","EXTENSION USED");
            toggleEnable("ext1",false);
            document.getElementById("ex").style.visibility="hidden";

            updateValue("bar","EXTENSION");
            updateAlign("bar","center");
            updateColor("bar","green");
            updateColor("secs","green");

        } else if (turn==2 && !ext2_used){
            timer = timer + 30;

            ext1_used = true;

            updateValue("ext2","EXTENSION USED");
            toggleEnable("ext2",false);
            document.getElementById("ex").style.visibility="hidden";

            updateValue("bar","EXTENSION");
            updateAlign("bar","center");
            updateColor("bar","green");
            updateColor("secs","green");
            
        }
    }
}

function stop(){
    
    toggleEnable("start1",true);
    toggleEnable("start2",true);
    
    toggleEnable("ext1",false);
    toggleEnable("stop1",false);
    toggleEnable("ext2",false);
    toggleEnable("stop2",false);

    if (timer > 0){
        document.getElementById("indicator").style.visibility = "hidden";
        document.getElementById("ex").style.visibility = "hidden";
        document.getElementById("bar").style.visibility = "hidden";
        document.getElementById("secs").style.visibility = "hidden";
    
    }

    clearInterval(timerA);

}
    
    // p1timer = 30;
    // p2timer = 30;
    // p1bar = "||||||||||||||||||||||||||||||";
    // p2bar = "||||||||||||||||||||||||||||||";
    // ext1_used = false;
    // ext2_used = false;

    // updateValue("seconds1",p1timer);
    // updateValue("seconds2",p2timer);
    // updateValue("bar1", p1bar);
    // updateValue("bar2", p2bar);

    // updateColor("seconds1","green");
    // updateColor("seconds2","green");
    // updateColor("bar1","green");
    // updateColor("bar2","green");

    // document.getElementById("bar1").style.fontSize="small";
    // document.getElementById("bar2").style.fontSize="small";

    // toggleEnable("start1",true);
    // toggleEnable("start2",true);
    // toggleEnable("ext1",false);
    // toggleEnable("ext2",false);
    // toggleEnable("stop1",false);
    // toggleEnable("stop2",false);

    // updateBackground("ex1","green");
    // updateBackground("ex2","green");

    // document.getElementById("ex1").style.visibility = "hidden";
    // document.getElementById("bar1").style.visibility = "hidden";
    // document.getElementById("seconds1").style.visibility = "hidden";
    // document.getElementById("ex2").style.visibility = "hidden";
    // document.getElementById("bar2").style.visibility = "hidden";
    // document.getElementById("seconds2").style.visibility = "hidden";
    
    // try{
    //     clearInterval(timerA);
    // } catch{
    //     return true;
    // }
    
    // try{
    //     clearInterval(timerB);
    // } catch{
    //     return true;
    // }
    

// }

// function start_timer1(){
    
//     document.getElementById("bar1").style.fontSize="small";

//     toggleEnable("start1",false);
//     toggleEnable("stop1",true);

//     updateAlign("bar1","left");

//     if(!ext1_used){
//         toggleEnable("ext1",true);
//     }

//     if(p1timer!=30){
//         p1timer = 30;
//         p1bar = Array(p1timer+1).join("|");
//         updateValue("bar1", p1bar);
//         updateValue("seconds1", p1timer);

//         updateColor("seconds1","green");
//         updateColor("bar1","green");
//     }

//     timerA = setInterval(decrement_timer1,1000);

//     toggleEnable("start2",false);

//     document.getElementById("ex1").style.visibility = "visible";
//     document.getElementById("bar1").style.visibility = "visible";
//     document.getElementById("seconds1").style.visibility = "visible";

//     document.getElementById("ex2").style.visibility = "hidden";
//     document.getElementById("bar2").style.visibility = "hidden";
//     document.getElementById("seconds2").style.visibility = "hidden";

// }

// function start_timer2(){

//     document.getElementById("bar2").style.fontSize="small";

//     toggleEnable("start2",false);
//     toggleEnable("stop2",true);

//     updateAlign("bar2","left");

//     if(!ext2_used){
//         toggleEnable("ext2",true);
//     }

//     if(p2timer!=30){
//         p2timer = 30;
//         p2bar = Array(p2timer+1).join("|");
//         updateValue("bar2", p2bar);
//         updateValue("seconds2", p2timer);

//         updateColor("seconds2","green");
//         updateColor("bar2","green");
//     }

//     timerB = setInterval(decrement_timer2,1000);

//     toggleEnable("start1",false);

//     document.getElementById("ex2").style.visibility = "visible";
//     document.getElementById("bar2").style.visibility = "visible";
//     document.getElementById("seconds2").style.visibility = "visible";

//     document.getElementById("ex1").style.visibility = "hidden";
//     document.getElementById("bar1").style.visibility = "hidden";
//     document.getElementById("seconds1").style.visibility = "hidden";

// }

// function decrement_timer1(){
//     p1timer --;
//     p1bar = Array(p1timer+1).join("|");
//     updateAlign("bar1","left");
//     updateValue("bar1", p1bar);
//     updateValue("seconds1", p1timer);

//     if(p1timer==10){
//         updateColor("bar1","red");
//         updateColor("seconds1","red");
//     } else if(p1timer == 0){
//         stop_timer1();
//         updateAlign("bar1","center");
//         updateValue("bar1","TIME FOUL");
//         document.getElementById("bar1").style.fontSize="medium";
//         toggleEnable("start1",false);
//     } else if(p1timer > 30){
//         updateAlign("bar1","center");
//         updateValue("bar1","EXTENSION");
//         document.getElementById("bar1").style.fontSize="medium";
//     } else if(0<p1timer<=30){
//         document.getElementById("bar1").style.fontSize="small";
//     }

// }

// function decrement_timer2(){
//     p2timer --;
//     p2bar = Array(p2timer+1).join("|");
//     updateAlign("bar2","left");
//     updateValue("bar2", p2bar);
//     updateValue("seconds2", p2timer);

//     if(p2timer==10){
//         updateColor("bar2","red");
//         updateColor("seconds2","red");
//     } else if(p2timer == 0){
//         stop_timer2();
//         updateAlign("bar2","center");
//         updateValue("bar2","TIME FOUL");
//         document.getElementById("bar2").style.fontSize="medium";
//         toggleEnable("start2",false);
//     } else if(p2timer > 30){
//         updateAlign("bar2","center");
//         updateValue("bar2","EXTENSION");
//         document.getElementById("bar2").style.fontSize="medium";
//     } else if(0<p2timer<=30){
//         document.getElementById("bar2").style.fontSize="small";
//     }

// }

// function extension1(){
//     if(p1timer > 0){
//         p1timer = p1timer + 30;
//         ext1_used = true;
//     }

//     toggleEnable("ext1",false);

//     updateBackground("ex1","rgba(255,0,0,0.2)");

// }

// function extension2(){
//     if(p2timer > 0){
//         p2timer = p2timer + 30;
//         ext2_used = true;
//     }

//     toggleEnable("ext2",false);

//     updateBackground("ex2","rgba(255,0,0,0.2)");

// }

// function stop_timer1(){
    
//     toggleEnable("start1",true);
//     toggleEnable("ext1",false);
//     toggleEnable("stop1",false);

//     clearInterval(timerA);

//     toggleEnable("start2",true);

// }

// function stop_timer2(){
    
//     toggleEnable("start2",true);
//     toggleEnable("ext2",false);
//     toggleEnable("stop2",false);

//     clearInterval(timerB);

//     toggleEnable("start1",true);

// } 