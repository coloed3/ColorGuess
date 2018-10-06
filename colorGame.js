let numSquare = 6;
let  colors = [];
let  pickedColor;
let  squares = document.querySelectorAll(".square");
let  colorDisplay = document.getElementById("colorDisplay");
let  messageDisplay = document.querySelector("#message");
let  h1 =  document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
setUpModeBtn()
setUpSquare()
reset();
}



function setUpSquare(){
	for(let i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		let clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background= clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
}


function setUpModeBtn(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener('click', function (){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected")
		this.textContent === "Easy" ? numSquare = 6 : numSquare = 12;
	 	reset();

	})
	}
}


function reset(){
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent= "";

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}



resetButton.addEventListener("click", function(){	//when you click on the button generate all new colors
reset()
});




function changeColors(color) {
	//loop through all squares
	for(let i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//generate random number function
function generateRandomColors(num){
	 //make an array
	let arr = [];
	 //add num to randon color to array
		for(let i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());

		}
	 //return that arry
	 return arr;
}

function randomColor(){
	 //pick a red, from zero -255
const r =Math.floor( Math.random()*256 )
const g =Math.floor( Math.random()*256 )
const b =Math.floor( Math.random()*256 )


return "rgb("+ r + ", " + g + ", " + b + ")";

}

