$("h1").on("click",function(){
    const r = Math.floor(Math.random()*3);
//if関数
    if(r=1){
        view ="<img src=img/img_goo.jpg>";
    
    if(r=2){
        view ="<img src=img/img_choki.jpg>";    
    }
    if(r=3){
        view ="<img src=img/img_paa.jpeg>"; 
    }
}