const yes= document.querySelector(".yes")
const no=document.querySelector(".no")
const que=document.querySelector(".que")
const my=document.querySelector(".my")
var div = document.getElementById("x");

var img = document.createElement("img");
    img.src = "hchc.gif";


let allstringsforno=
["Estás segura?",
"Muy segura??",
"Vuelve a pensarlo...",
"Vamoooos, piensalo de nuevo",
"Considera cambiar tu respuesta",
"Plissssss",
"Vuelve a leer la pregunta",
"Te amo 3 millones",
"Ya siento que solo estas jugando",
"Te haré la pregunta de nuevo",
"Sabes cual es la respuesta correcta...",
"Ultima oportunidad"
];
let index=0;



function FunctionToExecute(){
     
     let currentsize=parseInt(window.getComputedStyle(yes).fontSize);
     yes.style.fontSize=(currentsize+9)+'px';


     no.innerText=allstringsforno[index];
     index=(index+1)%allstringsforno.length;
}






    yes.addEventListener("click", function () {
        que.textContent = "LO SABÍAAAAA, TE AMITOO <3";
        que.style.textAlign="center";
        que.style.fontSize="18px";
        yes.remove();
        no.remove();
        my.remove();
        div.appendChild(img);
  div.setAttribute("style", "text-align:center");
   ;

    });