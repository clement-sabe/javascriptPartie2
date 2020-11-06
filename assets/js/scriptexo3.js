document.querySelector('img').onclick = changeImage;
   normal = 0 
function changeImage(){
    if (normal == 0){
        normal=1;
   document.querySelector('img').style.width ='100%'; 
   document.querySelector('img').style.height ='100%';
}
   else {
    normal=0;
    document.querySelector('img').style.width ='50%'; 
    document.querySelector('img').style.height ='50%'; 
   } 
}