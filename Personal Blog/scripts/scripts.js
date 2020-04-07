

// POPUP BOX OPENING SCRIPTS

var popupShow = document.getElementById("popup-opener");

var popupClose = document.getElementById("popup-closer");

var popupBox = document.getElementById("popup-box-code");

popupShow.addEventListener("click",function(){
    popupBox.classList.add("open-pop-up");
});

popupClose.addEventListener("click",function(){
    popupBox.classList.remove("open-pop-up");
});


// WELCOME BOX CLOSING SCRIPTS

var welcomeBtn = document.getElementById("welcome-btn");

var welcomeBox = document.getElementById("welcome-open");

welcomeBtn.addEventListener("click",function(){
    welcomeBox.classList.add("welcome-hide");
});
