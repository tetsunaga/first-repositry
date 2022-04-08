$(".a").on("click",function(){
    const r = Math.floor(Math.random()*3);
    console.log(1);
//if関数
    if(r==1){
        view ="<img src=img/img_goo.jpg>";
        $(".b").text("グー");
    }
    if(r==2){
        view ="<img src=img/img_choki.jpg>";  
        $(".b").text("チョキ");  
    }
    if(r==3){
        view ="<img src=img/img_paa.jpeg>";
        $(".b").text("パー");
    }
})