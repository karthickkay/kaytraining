var pos = document.getElementById("slide")

var text = document.getElementById("slideshow")
counter = 1;
imgcount = 1;


function slideshowfunc(){
    console.log("calling");
    if(counter>3)
    {
        counter = 1
    }
    text.style.backgroundColor = "red"
    pos.src = "image"+counter+".jpg"    
    pos.style.left = imgcount*10 +"px"  
    console.log(imgcount)
    if(imgcount>110)
    {
    imgcount = 1
    counter++;
    }
    imgcount++    

}

setInterval(slideshowfunc,40)