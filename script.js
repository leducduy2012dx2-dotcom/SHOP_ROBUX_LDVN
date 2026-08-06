function chon(goi){

const popup=document.getElementById("popup");

const title=document.getElementById("title");

title.innerHTML="💎 "+goi;

popup.style.display="flex";

}

function dong(){

document.getElementById("popup").style.display="none";

}

// Đóng popup khi bấm ra ngoài

window.onclick=function(e){

const popup=document.getElementById("popup");

if(e.target==popup){

popup.style.display="none";

}

}
