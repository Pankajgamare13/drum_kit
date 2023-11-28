// document.querySelector("button").addEventListener("click",handleClick);//if we add parenthesis here then it will call before click at the time of refresh 

// function handleClick(){
//     alert("i got clicked");
// }

var btns= document.querySelectorAll("button");

for(i of btns){
    i.addEventListener("click",function(){  //anonymous function
      //  alert("i got clicked")
      this.style.color="white"; //when clicked to change the color of text on image

      var buttonInnerHTML=this.innerHTML;

      switch (buttonInnerHTML) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
             var tom2=new Audio("sounds/tom-2.mp3");
             tom2.play();
            break;

        case "s":
             var tom3=new Audio("sounds/tom-3.mp3");
             tom3.play();
             break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;   
        case "l":
            var kick_bass=new Audio("sounds/kick-bass.mp3");
            kick_bass.play();       
             break;

        default: console.log(buttonInnerHTML);
           
      }
    })
}

