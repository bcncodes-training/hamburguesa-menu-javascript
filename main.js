let navicon = document.querySelector('.navicon');
let navigation = document.querySelector('.navigation');

function drawCloseIcon(){
    if(navicon.classList.contains('open')){
        navicon.classList.replace('open','close');
    }
    else{
        navicon.classList.replace('close','open');
    }
}


navicon.onclick = drawCloseIcon;
