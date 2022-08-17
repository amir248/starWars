window.addEventListener("load",init);

let Count = 0;
let ship;
let timerId;
let divCount;


function init()
{
	ship = document.getElementsByClassName("ship")[0];
	let posy=0;
	let v1 = 10;
	let pos,y;
	divCount = document.getElementById("count");
	divCount.innerHTML = 0;
	
	newKometa();
	timerId = setInterval(newKometa,5000);
	
	document.addEventListener('keydown', function(e){
		if(e.key == 'ArrowUp'){
			moveV(-1);		
		}else if(e.key == 'ArrowDown'){
			moveV(1);
		}
	});
	
	document.addEventListener('click', function(e){
		
		let newBall = document.createElement("span");
			document.body.append(newBall);
			newBall.classList.add("shot");
			newBall.style.position = "absolute";
			
			newBall.style.left = "400px";
			
			pos = ship.getBoundingClientRect();
			
			newBall.x = 400;
			newBall.style.top = (pos.top+55)  + "px"; 
			
			setTimeout(moveBall,50,newBall);
	});
	
	function moveV(m){
		
		posy += v1*m;
				
		if(posy<0){
			posy = 0;
		}else if(posy>(document.documentElement.clientHeight-150)){
			posy = document.documentElement.clientHeight-150;
		}
		
		ship.style.top = posy+"px";
		
	}
	
	function moveBall(b){
		
		b.x +=10;
		b.style.left = b.x + "px";
		if(b.x > document.documentElement.clientWidth-30){
			b.remove();
			;
		}else{
			setTimeout(moveBall,50,b);
		}		
	}	
}

function newKometa(){
	let newKometa = document.createElement("span");
	document.body.append(newKometa);
	newKometa.classList.add("kometa");
	newKometa.style.position = "absolute";	
	newKometa.x = document.documentElement.clientWidth;
	newKometa.style.left = newKometa.x+"px";
	y = Math.random() * (document.documentElement.clientHeight - 166);	
	newKometa.style.top = y  + "px";
	setTimeout(moveKometa,50,newKometa);
}

function moveKometa(k){
	k.x -=10;
	k.style.left = k.x + "px";
	if(k.x < -293){
		k.remove();
		
		
	}else{
		shots = document.getElementsByClassName("shot");
		
		for(let i=0; i < shots.length; i++){				
			
			if(k.offsetLeft - shots[i].offsetLeft + 30 < 10 && (shots[i].offsetTop < k.offsetTop+130 && shots[i].offsetTop > k.offsetTop+36) && (k.offsetLeft!=0 && k.offsetTop !=0) ){
							
				shots[i].remove();
				Count++;
				//console.log(Count);
				divCount.innerHTML = Count;
				let newBum = document.createElement("span");
				document.body.append(newBum);
				newBum.classList.add("bum");
				newBum.style.position = "absolute";
				newBum.style.left = k.offsetLeft+"px";	
				newBum.style.top = k.offsetTop+"px";
				/* console.log(newBum.style.left);
				console.log(k.offsetLeft+"px"); */
				k.remove();
				
				newBum.classList.add("bigBum");
				
				setTimeout(removeBum,1500,newBum);
			}
			
		}//for
		
		
		if(k.offsetLeft <= 400 && (ship.offsetTop < k.offsetTop+166 && ship.offsetTop+139 > k.offsetTop) && (k.offsetLeft!=0 && k.offsetTop !=0) ){
				
				
				let newBum = document.createElement("span");
				document.body.append(newBum);
				newBum.classList.add("bum");
				newBum.style.position = "absolute";
				newBum.style.left = k.offsetLeft+"px";	
				newBum.style.top = k.offsetTop+"px";
				newBum.classList.add("bigBum");		
				k.remove();
				
				ship.remove();
				clearTimeout(timerId);
						
				setTimeout(gameOver,1500);				
			
		}else{
			setTimeout(moveKometa,50,k);
		}//if
		
		
	}
	
	function removeBum(b){
		
		b.remove();
		console.log(b);
	}
	
	function gameOver(){
		let over = document.createElement("span");
				document.body.append(over);
				over.classList.add("overBegin");
						
	}
	
	
	
}
	

