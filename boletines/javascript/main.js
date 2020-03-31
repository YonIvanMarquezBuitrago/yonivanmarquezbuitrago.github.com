//Obtener los elementos de la calse .close
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function(links){
    //Agregar un evento click a cada uno de ellos
    links.addEventListener("click",function(evento){
        evento.preventDefault();
       
        let content = document.querySelector(".content");

        //Quitarle las clases de animacion que ya tiene
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");
         
        //Agregarle las clases para animar su salida 
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        setTimeout(function(){
            location.href="/boletines";
        },1000);
        

        return false;

    })
});

/*
//Obtener los elementos de la calse .close
let iconos = document.querySelectorAll("i");
//Recorrerlos
iconos.forEach(function(iconos){
    
    iconos.classList.remove("far fa-star")
});
*/
