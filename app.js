let isStatus = document.querySelector("h5");
let addFriend = document.querySelector("#addFriend");
let check = 0;
addFriend.addEventListener("click" , function(){
    if(check === 0){
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "Green";
        check = 1;
    }
    else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "Red";
        check = 0;
    }
});
