var p1score, p2score;
var rednum;
var lastred;
var endgame;
var turn;
var objball;

function updateValue(id,variable){
    let messageElement = document.getElementById(id);
    messageElement.textContent = variable;
}

function reset(){

    p1score = 0;
    p2score = 0;
    rednum = 15;
    endgame = false;
    lastred=false;
    turn = 1;
    objball=0;

    disable(1,1);
    disable(2,2);

    updateValue("p1points", p1score);
    updateValue("p2points", p2score);
    updateValue("num_reds", rednum + "x");

    document.getElementById("num_reds").style.opacity = 1;
    document.getElementById("r0").style.opacity = 1;
    document.getElementById("y0").style.opacity = 1;
    document.getElementById("g0").style.opacity = 1;
    document.getElementById("br0").style.opacity = 1;
    document.getElementById("bl0").style.opacity = 1;
    document.getElementById("p0").style.opacity = 1;
    document.getElementById("bk0").style.opacity = 1;
}

function addScore(player,value){

    if(player==1){
        p1score += value;
        updateValue("p1points", p1score);
    }

    if(player==2){
        p2score += value;
        updateValue("p2points", p2score);
    }

    if(!endgame && !lastred){
        if(value==1){

            rednum -= 1;
            updateValue("num_reds", rednum + "x");
    
            if(player==1){
                disable(1,0);
            } else if(player==2){
                disable(2,0);
            }
        } else{
            if(player==1){
                disable(1,1);
            } else if(player==2){
                disable(2,1);
            }
        }
            
        if(rednum == 0){
            lastred=true;

            document.getElementById("r0").style.opacity = 0.25;
            document.getElementById("num_reds").style.opacity = 0.25;

        }
    } else if(lastred){
        lastred=false;
        endgame=true;
        objball=2;
        setupEndgame(turn);
    } else if(endgame){
        if(player==1){
            if(value==2){
                document.getElementById("y0").style.opacity = 0.25;
    
                document.getElementById("y1").disabled = true;
                document.getElementById("y1").style.opacity = 0.25;
    
                document.getElementById("g1").disabled = false;
                document.getElementById("g1").style.opacity = 1;  
    
                objball=3;

            } else if (value==3){
                document.getElementById("g0").style.opacity = 0.25;
    
                document.getElementById("g1").disabled = true;
                document.getElementById("g1").style.opacity = 0.25;
    
                document.getElementById("br1").disabled = false;
                document.getElementById("br1").style.opacity = 1;

                objball=4;

            } else if (value==4){
                
                document.getElementById("br0").style.opacity = 0.25;
    
                document.getElementById("br1").disabled = true;
                document.getElementById("br1").style.opacity = 0.25;
    
                document.getElementById("bl1").disabled = false;
                document.getElementById("bl1").style.opacity = 1;

                objball=5;

            } else if (value==5){
                
                document.getElementById("bl0").style.opacity = 0.25;
    
                document.getElementById("bl1").disabled = true;
                document.getElementById("bl1").style.opacity = 0.25;
    
                document.getElementById("p1").disabled = false;
                document.getElementById("p1").style.opacity = 1;

                objball=6;

            } else if (value==6){
                
                document.getElementById("p0").style.opacity = 0.25;
    
                document.getElementById("p1").disabled = true;
                document.getElementById("p1").style.opacity = 0.25;
    
                document.getElementById("bk1").disabled = false;
                document.getElementById("bk1").style.opacity = 1;

                objball=7;

            } else if (value==7){
                
                document.getElementById("bk0").style.opacity = 0.25;
    
                document.getElementById("bk1").disabled = true;
                document.getElementById("bk1").style.opacity = 0.25;
    
                win();
            }
        } else if(player==2){
            if(value==2){
                document.getElementById("y0").style.opacity = 0.25;
    
                document.getElementById("y2").disabled = true;
                document.getElementById("y2").style.opacity = 0.25;
    
                document.getElementById("g2").disabled = false;
                document.getElementById("g2").style.opacity = 1; 
                
                objball=3;
    
            } else if (value==3){
                document.getElementById("g0").style.opacity = 0.25;
    
                document.getElementById("g2").disabled = true;
                document.getElementById("g2").style.opacity = 0.25;
    
                document.getElementById("br2").disabled = false;
                document.getElementById("br2").style.opacity = 1;

                objball=4;

            } else if (value==4){
                
                document.getElementById("br0").style.opacity = 0.25;
    
                document.getElementById("br2").disabled = true;
                document.getElementById("br2").style.opacity = 0.25;
    
                document.getElementById("bl2").disabled = false;
                document.getElementById("bl2").style.opacity = 1;

                objball=5;

            } else if (value==5){
                
                document.getElementById("bl0").style.opacity = 0.25;
    
                document.getElementById("bl2").disabled = true;
                document.getElementById("bl2").style.opacity = 0.25;
    
                document.getElementById("p2").disabled = false;
                document.getElementById("p2").style.opacity = 1;

                objball=6;

            } else if (value==6){
                
                document.getElementById("p0").style.opacity = 0.25;
    
                document.getElementById("p2").disabled = true;
                document.getElementById("p2").style.opacity = 0.25;
    
                document.getElementById("bk2").disabled = false;
                document.getElementById("bk2").style.opacity = 1;

                objball=7;

            } else if (value==7){
                
                document.getElementById("bk0").style.opacity = 0.25;
    
                document.getElementById("bk2").disabled = true;
                document.getElementById("bk2").style.opacity = 0.25;
    
                win();
            }
        }
        
}

}

function disable(player,colour){
    if(player == 1){
        if(colour == 1){

            document.getElementById("r1").disabled = false;
            document.getElementById("r1").style.opacity = 1;

            document.getElementById("y1").disabled = true;
            document.getElementById("y1").style.opacity = 0.25;
            document.getElementById("g1").disabled = true;
            document.getElementById("g1").style.opacity = 0.25;
            document.getElementById("br1").disabled = true;
            document.getElementById("br1").style.opacity = 0.25;
            document.getElementById("bl1").disabled = true;
            document.getElementById("bl1").style.opacity = 0.25;
            document.getElementById("p1").disabled = true;
            document.getElementById("p1").style.opacity = 0.25;
            document.getElementById("bk1").disabled = true;
            document.getElementById("bk1").style.opacity = 0.25;

            document.getElementById("handover1").disabled = false;
            document.getElementById("handover1").style.opacity = 1;

        } else if(colour == 0){

            document.getElementById("r1").disabled = true;
            document.getElementById("r1").style.opacity = 0.25;

            document.getElementById("y1").disabled = false;
            document.getElementById("y1").style.opacity = 1;
            document.getElementById("g1").disabled = false;
            document.getElementById("g1").style.opacity = 1;
            document.getElementById("br1").disabled = false;
            document.getElementById("br1").style.opacity = 1;
            document.getElementById("bl1").disabled = false;
            document.getElementById("bl1").style.opacity = 1;
            document.getElementById("p1").disabled = false;
            document.getElementById("p1").style.opacity = 1;
            document.getElementById("bk1").disabled = false;
            document.getElementById("bk1").style.opacity = 1;

        } else if (colour==2){

            document.getElementById("r1").disabled = true;
            document.getElementById("r1").style.opacity = 0.25;

            document.getElementById("y1").disabled = true;
            document.getElementById("y1").style.opacity = 0.25;
            document.getElementById("g1").disabled = true;
            document.getElementById("g1").style.opacity = 0.25;
            document.getElementById("br1").disabled = true;
            document.getElementById("br1").style.opacity = 0.25;
            document.getElementById("bl1").disabled = true;
            document.getElementById("bl1").style.opacity = 0.25;
            document.getElementById("p1").disabled = true;
            document.getElementById("p1").style.opacity = 0.25;
            document.getElementById("bk1").disabled = true;
            document.getElementById("bk1").style.opacity = 0.25;

            document.getElementById("handover1").disabled = true;
            document.getElementById("handover1").style.opacity = 0.25;

        }
    } else if(player == 2){
        if(colour == 1){

            document.getElementById("r2").disabled = false;
            document.getElementById("r2").style.opacity = 1;

            document.getElementById("y2").disabled = true;
            document.getElementById("y2").style.opacity = 0.25;
            document.getElementById("g2").disabled = true;
            document.getElementById("g2").style.opacity = 0.25;
            document.getElementById("br2").disabled = true;
            document.getElementById("br2").style.opacity = 0.25;
            document.getElementById("bl2").disabled = true;
            document.getElementById("bl2").style.opacity = 0.25;
            document.getElementById("p2").disabled = true;
            document.getElementById("p2").style.opacity = 0.25;
            document.getElementById("bk2").disabled = true;
            document.getElementById("bk2").style.opacity = 0.25;

            document.getElementById("handover2").disabled = false;
            document.getElementById("handover2").style.opacity = 1;

        } else if(colour == 0){

            document.getElementById("r2").disabled = true;
            document.getElementById("r2").style.opacity = 0.25;

            document.getElementById("y2").disabled = false;
            document.getElementById("y2").style.opacity = 1;
            document.getElementById("g2").disabled = false;
            document.getElementById("g2").style.opacity = 1;
            document.getElementById("br2").disabled = false;
            document.getElementById("br2").style.opacity = 1;
            document.getElementById("bl2").disabled = false;
            document.getElementById("bl2").style.opacity = 1;
            document.getElementById("p2").disabled = false;
            document.getElementById("p2").style.opacity = 1;
            document.getElementById("bk2").disabled = false;
            document.getElementById("bk2").style.opacity = 1;

        } else if(colour==2){

            document.getElementById("r2").disabled = true;
            document.getElementById("r2").style.opacity = 0.25;

            document.getElementById("y2").disabled = true;
            document.getElementById("y2").style.opacity = 0.25;
            document.getElementById("g2").disabled = true;
            document.getElementById("g2").style.opacity = 0.25;
            document.getElementById("br2").disabled = true;
            document.getElementById("br2").style.opacity = 0.25;
            document.getElementById("bl2").disabled = true;
            document.getElementById("bl2").style.opacity = 0.25;
            document.getElementById("p2").disabled = true;
            document.getElementById("p2").style.opacity = 0.25;
            document.getElementById("bk2").disabled = true;
            document.getElementById("bk2").style.opacity = 0.25;

            document.getElementById("handover2").disabled = true;
            document.getElementById("handover2").style.opacity = 0.25;

        }
    }
}

function handover(oldplayer){
    if(!endgame && !lastred){
        if(oldplayer==1){
            disable(1,2);
            disable(2,1);
            updateValue("turnTracker","Player 2's Turn");
            turn = 2;
        } else if(oldplayer==2){
            disable(2,2);
            disable(1,1);
            updateValue("turnTracker","Player 1's Turn");
            turn = 1
        }
    } else if(lastred){
        if(oldplayer==1){
            updateValue("turnTracker","Player 2's Turn");
            turn = 2;
            document.getElementById("handover1").disabled = true;
            document.getElementById("handover1").style.opacity = 0.25;
            document.getElementById("handover2").disabled = false;
            document.getElementById("handover2").style.opacity = 1;
        } else if(oldplayer==2){
            updateValue("turnTracker","Player 1's Turn");
            turn = 1
            document.getElementById("handover2").disabled = true;
            document.getElementById("handover2").style.opacity = 0.25;
            document.getElementById("handover1").disabled = false;
            document.getElementById("handover1").style.opacity = 1;
        }
        lastred=false;
        endgame=true;
        setupEndgame(turn);
    } else if(endgame){
        if(turn==2){

            turn = 1;
            updateValue("turnTracker","Player 1's Turn");

            if(objball==2){
                document.getElementById("y1").disabled = false;
                document.getElementById("y1").style.opacity = 1;
                document.getElementById("y2").disabled = true;
                document.getElementById("y2").style.opacity = 0.25;
                document.getElementById("handover2").disabled = true;
                document.getElementById("handover2").style.opacity = 0.25;
                document.getElementById("handover1").disabled = false;
                document.getElementById("handover1").style.opacity = 1;
            } else if(objball==3){
                document.getElementById("g1").disabled = false;
                document.getElementById("g1").style.opacity = 1;
                document.getElementById("g2").disabled = true;
                document.getElementById("g2").style.opacity = 0.25;
                document.getElementById("handover2").disabled = true;
                document.getElementById("handover2").style.opacity = 0.25;
                document.getElementById("handover1").disabled = false;
                document.getElementById("handover1").style.opacity = 1;
            } else if(objball==4){
                document.getElementById("br1").disabled = false;
                document.getElementById("br1").style.opacity = 1;
                document.getElementById("br2").disabled = true;
                document.getElementById("br2").style.opacity = 0.25;
                document.getElementById("handover2").disabled = true;
                document.getElementById("handover2").style.opacity = 0.25;
                document.getElementById("handover1").disabled = false;
                document.getElementById("handover1").style.opacity = 1;
            } else if(objball==5){
                document.getElementById("bl1").disabled = false;
                document.getElementById("bl1").style.opacity = 1;
                document.getElementById("bl2").disabled = true;
                document.getElementById("bl2").style.opacity = 0.25;
                document.getElementById("handover2").disabled = true;
                document.getElementById("handover2").style.opacity = 0.25;
                document.getElementById("handover1").disabled = false;
                document.getElementById("handover1").style.opacity = 1;
            } else if(objball==6){
                document.getElementById("p1").disabled = false;
                document.getElementById("p1").style.opacity = 1;
                document.getElementById("p2").disabled = true;
                document.getElementById("p2").style.opacity = 0.25;
                document.getElementById("handover2").disabled = true;
                document.getElementById("handover2").style.opacity = 0.25;
                document.getElementById("handover1").disabled = false;
                document.getElementById("handover1").style.opacity = 1;
            } else if(objball==7){
                document.getElementById("bk1").disabled = false;
                document.getElementById("bk1").style.opacity = 1;
                document.getElementById("bk2").disabled = true;
                document.getElementById("bk2").style.opacity = 0.25;
                document.getElementById("handover2").disabled = true;
                document.getElementById("handover2").style.opacity = 0.25;
                document.getElementById("handover1").disabled = false;
                document.getElementById("handover1").style.opacity = 1;
            }
        } else if(turn==1){

            turn = 2;
            updateValue("turnTracker","Player 2's Turn");

            if(objball==2){
                document.getElementById("y2").disabled = false;
                document.getElementById("y2").style.opacity = 1;
                document.getElementById("y1").disabled = true;
                document.getElementById("y1").style.opacity = 0.25;
                document.getElementById("handover1").disabled = true;
                document.getElementById("handover1").style.opacity = 0.25;
                document.getElementById("handover2").disabled = false;
                document.getElementById("handover2").style.opacity = 1;
            } else if(objball==3){
                document.getElementById("g2").disabled = false;
                document.getElementById("g2").style.opacity = 1;
                document.getElementById("g1").disabled = true;
                document.getElementById("g1").style.opacity = 0.25;
                document.getElementById("handover1").disabled = true;
                document.getElementById("handover1").style.opacity = 0.25;
                document.getElementById("handover2").disabled = false;
                document.getElementById("handover2").style.opacity = 1;
            } else if(objball==4){
                document.getElementById("br2").disabled = false;
                document.getElementById("br2").style.opacity = 1;
                document.getElementById("br1").disabled = true;
                document.getElementById("br1").style.opacity = 0.25;
                document.getElementById("handover1").disabled = true;
                document.getElementById("handover1").style.opacity = 0.25;
                document.getElementById("handover2").disabled = false;
                document.getElementById("handover2").style.opacity = 1;
            } else if(objball==5){
                document.getElementById("bl2").disabled = false;
                document.getElementById("bl2").style.opacity = 1;
                document.getElementById("bl1").disabled = true;
                document.getElementById("bl1").style.opacity = 0.25;
                document.getElementById("handover1").disabled = true;
                document.getElementById("handover1").style.opacity = 0.25;
                document.getElementById("handover2").disabled = false;
                document.getElementById("handover2").style.opacity = 1;
            } else if(objball==6){
                document.getElementById("p2").disabled = false;
                document.getElementById("p2").style.opacity = 1;
                document.getElementById("p1").disabled = true;
                document.getElementById("p1").style.opacity = 0.25;
                document.getElementById("handover1").disabled = true;
                document.getElementById("handover1").style.opacity = 0.25;
                document.getElementById("handover2").disabled = false;
                document.getElementById("handover2").style.opacity = 1;
            } else if(objball==7){
                document.getElementById("bk2").disabled = false;
                document.getElementById("bk2").style.opacity = 1;
                document.getElementById("bk1").disabled = true;
                document.getElementById("bk1").style.opacity = 0.25;
                document.getElementById("handover1").disabled = true;
                document.getElementById("handover1").style.opacity = 0.25;
                document.getElementById("handover2").disabled = false;
                document.getElementById("handover2").style.opacity = 1;
            }
        }
    }
}

function setupEndgame(player){
    if(player==1){
    
        document.getElementById("g1").disabled = true;
        document.getElementById("g1").style.opacity = 0.25;
        document.getElementById("br1").disabled = true;
        document.getElementById("br1").style.opacity = 0.25;
        document.getElementById("bl1").disabled = true;
        document.getElementById("bl1").style.opacity = 0.25;
        document.getElementById("p1").disabled = true;
        document.getElementById("p1").style.opacity = 0.25;
        document.getElementById("bk1").disabled = true;
        document.getElementById("bk1").style.opacity = 0.25;
        
        document.getElementById("y2").disabled = true;
        document.getElementById("y2").style.opacity = 0.25;
        document.getElementById("g2").disabled = true;
        document.getElementById("g2").style.opacity = 0.25;
        document.getElementById("br2").disabled = true;
        document.getElementById("br2").style.opacity = 0.25;
        document.getElementById("bl2").disabled = true;
        document.getElementById("bl2").style.opacity = 0.25;
        document.getElementById("p2").disabled = true;
        document.getElementById("p2").style.opacity = 0.25;
        document.getElementById("bk2").disabled = true;
        document.getElementById("bk2").style.opacity = 0.25;  
    
    } else if(player==2){

        document.getElementById("y1").disabled = true;
        document.getElementById("y1").style.opacity = 0.25;    
        document.getElementById("g1").disabled = true;
        document.getElementById("g1").style.opacity = 0.25;
        document.getElementById("br1").disabled = true;
        document.getElementById("br1").style.opacity = 0.25;
        document.getElementById("bl1").disabled = true;
        document.getElementById("bl1").style.opacity = 0.25;
        document.getElementById("p1").disabled = true;
        document.getElementById("p1").style.opacity = 0.25;
        document.getElementById("bk1").disabled = true;
        document.getElementById("bk1").style.opacity = 0.25;
        
        document.getElementById("g2").disabled = true;
        document.getElementById("g2").style.opacity = 0.25;
        document.getElementById("br2").disabled = true;
        document.getElementById("br2").style.opacity = 0.25;
        document.getElementById("bl2").disabled = true;
        document.getElementById("bl2").style.opacity = 0.25;
        document.getElementById("p2").disabled = true;
        document.getElementById("p2").style.opacity = 0.25;
        document.getElementById("bk2").disabled = true;
        document.getElementById("bk2").style.opacity = 0.25;

    }
        
}

function win(){

    document.getElementById("handover1").disabled = true;
    document.getElementById("handover1").style.opacity = 0.25;
    document.getElementById("handover2").disabled = true;
    document.getElementById("handover2").style.opacity = 0.25;

    if(p1score>p2score){
        alert("Player 1 Wins!");
    } else if(p2score>p1score){
        alert("Player 2 Wins!");
    } else{
        alert("It's a tie!");
    }
}