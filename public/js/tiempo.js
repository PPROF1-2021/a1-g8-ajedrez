
let d = new Date();
		let mes = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO", "JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"]
document.getElementById("date1").innerHTML = "<h3> Hoy es: "+ d.getDate()+ " de  "+ mes[d.getMonth()]+ " de "+ d.getFullYear()+ "</h3>";


	contador_s = 0;
	contador_m = 0;
	s = document.getElementById("segundo");
	m = document.getElementById("minuto");
	var cronometro = setInterval(
		function(){
			if(contador==60){
				contador_s=0;
				contador_m++;
				m.innerHTML =contador_m;
				if(contador_m==0){
					contador_m=0;
				}
			}
			s.innerHTML =contador_s;
			contador_s++;
		}
	,1000)
