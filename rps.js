function rpsgame(yourchoice)
{
console.log(yourchoice.id);
var humanchoice,botchoice;
humanchoice=yourchoice;
var number=randomchoice();
console.log(number);
botchoice=notochoice(number);

//console.log(botchoice);
//botchoice=notochoice(randomchoice());
var results=winner(yourchoice, botchoice);
var finalresult=message(results);
console.log(finalresult);
//console.log(results);
rpsfrontend(yourchoice.id,botchoice,finalresult);
}
function notochoice(number)
{//return ["rock","paper","sissor"](number);
if(number===1)
return "paper";
else if(number===2)
return "sissor";
else 
return "rock";


}
function randomchoice()
{
    return (Math.floor(Math.random()*3));
}
function winner(yourchoice, botchoice)
{
    var computerchoice=botchoice;
    var rpsdatabase ={
		"rock":{"sissor": 1,"rock": 0.5, "paper": 0},
		"paper":{"rock":1,"paper":0.5,"sissor":0},
		"sissor":{"paper":1,"sissor":0.5,"rock":0}
    };
    var yourscore=rpsdatabase[yourchoice.id][computerchoice];
	var computerscore=rpsdatabase[computerchoice][yourchoice.id];
	return [yourscore,computerscore];
}
function message([yourchoice, computerchoice])
{
    if (yourchoice===0)
    {/*
        if(computerchoice===1)
        return("its draw.");
        else if (computerchoice===0)
        return ("you win");
    
    }
    else if(yourchoice===0)
    {
        if (computerchoice===0)
        return("its draw.");
        else if(computerchoice===1)
        return("you loose.");
    }*/
return{"message":"you lost","color":"red"};

}
else if(yourchoice===0.5)
{
    return{"message":"you tied.","color":"yellow"};
}
else{
    return{"message":"you win.","color":"green"};
}
}

function rpsfrontend(humanimg,botimg,message){
    //console.log(botimg);
    //console.log(humanimg);
    var imagesdatabase = {
        "rock":document.getElementById('rock').src,
        "paper":document.getElementById('paper').src,
        "sissor":document.getElementById('sissor').src
    }
    console.log(message);
   // console.log(imagesdatabase[humanimg]);
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('sissor').remove();

    var humandiv=document.createElement('div');
var botdiv=document.createElement('div');
var messagediv=document.createElement('div');
humandiv.innerHTML ="<img src='" + imagesdatabase[humanimg] + "' height=150 width=150>"
document.getElementById('flex-box-1').appendChild(humandiv);
messagediv.innerHTML="<h1 style='color:"+ message['color']+";font-size:60px; padding:30px;'>"+ message['message']+"</h1>"
//document.getElementById('flex-box-1').appendChild(messagediv);
//var h1=document.createElement('h1');
//h1.appendChild(messagediv);
document.getElementById('flex-box-1').appendChild(messagediv);
botdiv.innerHTML ="<img src='" + imagesdatabase[botimg] + "' height=150 width=150>"
document.getElementById('flex-box-1').appendChild(botdiv);

}
function myreset()
{
    location.reload();
    var resetdiv=document.createElement('div');
    document.getElementById('refresh').appendChild(resetdiv);
}