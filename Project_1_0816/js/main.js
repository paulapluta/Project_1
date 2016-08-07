document.addEventListener("DOMContentLoaded", function(){

    var nextButton = document.getElementById("nextPicture");
    var prevButton = document.getElementById("prevPicture");
    var liArray = document.querySelectorAll(".xx");
    var index = 0;

    console.log(nextButton);
    console.log(prevButton);
    console.log(liArray);
    console.log(index);

    liArray[index].className += " visible";

    nextButton.addEventListener("click", function(event) {
        liArray[index].classList.remove("visible");
        if(index===liArray.length-1) index = -1;
        liArray[++index].className += " visible";
    });

    prevButton.addEventListener("click", function(event) {
        liArray[index].classList.remove("visible");
        if(index===0) index = liArray.length;
        liArray[--index].className += " visible";
    });

});
