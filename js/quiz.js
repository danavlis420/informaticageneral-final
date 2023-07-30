let correctas = [2,1,2,3,1,1,3,2,3,2];
let seleccionadas = [];
let puntos=0;
function respuesta(preg, elegida){
    seleccionadas[preg]=elegida.value;
}
function puntaje(){
    puntos=0;
    for (i=0;i<correctas.length;i++) {
        if(correctas[i]==seleccionadas[i]){
            puntos++;
        }
    }
    document.getElementById("puntaje").innerHTML=puntos+"/10";
}