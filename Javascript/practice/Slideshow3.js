var pos = document.getElementById("slide2")
var text = document.getElementById("slideshow")
counter = 2;

function slideshowfunc(){
    console.log("calling");
    if(counter<=3){
    text.style.backgroundColor = "red"
    pos.src = "image"+counter+".jpg"
    counter++
    }else{
        counter = 1
    }

}

setInterval(slideshowfunc,1000)

