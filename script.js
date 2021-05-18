var scroll1= window.pageYOffset;
window.onscroll= function(){
    var scroll2= window.pageYOffset;
    if(scroll1> scroll2){
        document.querySelector('.navbar').style.visibility ="visible";
    }else{
        document.querySelector('.navbar').style.visibility ="hidden";
    }
	scroll1= scroll2;
    
}


