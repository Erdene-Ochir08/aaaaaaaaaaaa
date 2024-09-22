var cPoint = document.querySelector('.cPoint');
var pPoint = document.querySelector('.pPoint');
var cChoice = document.querySelector('.cChoice');
var pChoice = document.querySelector('.pChoice');
var winner = document.querySelector('.winner');
var computerChoice;
var cCount=0, pCount=0;
console.log(cPoint);
function play(playerChoice){
	//alert(playerChoice);
	pChoice.innerText="Player choice:"+playerChoice;
	// computer -> 0,1,2 -> 0->scissors,1->rock, 2->paper
	var random = Math.floor(Math.random()*3);
	console.log(random);
	if(random==0){
		cChoice.innerText = "Computer choice:scissors";
		computerChoice="scissors";
	}else if(random==1){
		cChoice.innerText = "Computer choice:rock";
		computerChoice="rock";
	}else{
		cChoice.innerText = "Computer choice:paper";
		computerChoice="paper";
	}
	// winner p->rock:scissors, paper:rock,scissors:paper
	if(
	(playerChoice=="rock" && computerChoice=="scissors") 
	|| (playerChoice=="paper" && computerChoice=="rock")
	|| (playerChoice=="scissors" && computerChoice=="paper")
	){
		winner.innerText="Winner:Player";
	}else if(playerChoice==computerChoice){
		winner.innerText="Winner:Tie";
	}else{
		winner.innerText="Winner:Computer";
		// ++ 1-eer nemegduulne, -- 1-eer buuruulna
		cCount++;
	}
	cPoint.innerText="Computer:"+cCount;
}

function restart(){
	cCount=0;
	pCount=0;
	cPoint.innerText="Computer:0";
	pPoint.innerText="Player:0";
	winner.innerText="Winner:";
	pChoice.innerText="Player Choice:";
	cChoice.innerText="Computer Choice";
}