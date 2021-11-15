htlm:
<body>
<input type= "date" id=fechanacimiento" min= "1960-01-01" max="2022-01-01">
<h2 id= "edad"></h2>
<script src=js/edad.js"></script>
</body>

JS:


const fechanacimiento=document.getElementByid("fechanacimiento");
const edad= document.getElementById("edad");

const calcularEdad=(fechanacimiento)=>{

const añoActual= parseInt(fechaActual.getFullYear());
const mesActual= parseInt(fechaActual.getFullMonth()) + 1;
const diaActual= parseInt(fechaActual.getFullDate());


const añonacimiento=parseInt(String(fechanacimineto).dubstring(0,4));
const añonacimiento=parseInt(String(fechanacimineto).dubstring(5,7));
const añonacimiento=parseInt(String(fechanacimineto).dubstring(8,10));


let edad=0;
if (mesActual<mesnacimiento){
    edad--;}
else if(mesActua=mesnacimineto){
    if(diaActual<dianacimiento){

    }}
return edad;   };

Window.addventListener(´load´, function (){  

    fechanacimineto.addEventListener(´change´, function()) { 
      if (this.value){
          edad.innerText= La edad es: ${calcularEdad(this.value)}años´;
    }
      });
});