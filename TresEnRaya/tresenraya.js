let contador = 0;
let contadordepartidas = 0;
let contadorvictorias1 = 0;
let contadorvictorias2 = 0;

var boton_1 = document.getElementById("boton1");
boton_1.addEventListener("click", boton1click);

function boton1click() {
 if (contador %2 == 0) {
    boton_1.textContent = "X";
    boton_1.style.backgroundColor = 'red';
 } else {
    boton_1.textContent = "O";
    boton_1.style.backgroundColor = 'green';
 }
 contador++
 comprobarresultado()
}


var boton_2 = document.getElementById("boton2");
boton_2.addEventListener("click", boton2click);

function boton2click() {
 if (contador %2 == 0) {
    boton_2.textContent = "X";
    boton_2.style.backgroundColor = 'red';
 } else {
    boton_2.textContent = "O";
    boton_2.style.backgroundColor = 'green';
 }
 contador++
 comprobarresultado()
}

var boton_3 = document.getElementById("boton3");
boton_3.addEventListener("click", boton3click);

function boton3click() {
 if (contador %2 == 0) {
    boton_3.textContent = "X";
    boton_3.style.backgroundColor = 'red';
 } else {
    boton_3.textContent = "O";
    boton_3.style.backgroundColor = 'green';
 }
 contador++
 comprobarresultado()
}

var boton_4 = document.getElementById("boton4");
boton_4.addEventListener("click", boton4click);

function boton4click() {
 if (contador %2 == 0) {
    boton_4.textContent = "X";
    boton_4.style.backgroundColor = 'red';
 } else {
    boton_4.textContent = "O";
    boton_4.style.backgroundColor = 'green';
 }
 contador++
 comprobarresultado()
}

var boton_5 = document.getElementById("boton5");
boton_5.addEventListener("click", boton5click);

function boton5click() {
 if (contador %2 == 0) {
    boton_5.textContent = "X";
    boton_5.style.backgroundColor = 'red';
 } else {
    boton_5.textContent = "O";
    boton_5.style.backgroundColor = 'green';
 }
 contador++
 comprobarresultado()
}

var boton_6 = document.getElementById("boton6");
boton_6.addEventListener("click", boton6click);

function boton6click() {
 if (contador %2 == 0) {
    boton_6.textContent = "X";
    boton_6.style.backgroundColor = 'red';
 } else {
    boton_6.textContent = "O";
    boton_6.style.backgroundColor = 'green';
 }
 contador++
 comprobarresultado()
}

var boton_7 = document.getElementById("boton7");
boton_7.addEventListener("click", boton7click);

function boton7click() {
    if (contador %2 == 0) {
       boton_7.textContent = "X";
       boton_7.style.backgroundColor = 'red';
    } else {
       boton_7.textContent = "O";
       boton_7.style.backgroundColor = 'green';
    }
    contador++
    comprobarresultado()
   }

var boton_8 = document.getElementById("boton8");
boton_8.addEventListener("click", boton8click);

function boton8click() {
    if (contador %2 == 0) {
       boton_8.textContent = "X";
       boton_8.style.backgroundColor = 'red';
    } else {
       boton_8.textContent = "O";
       boton_8.style.backgroundColor = 'green';
    }
    contador++
    comprobarresultado()
   }

var boton_9 = document.getElementById("boton9");
boton_9.addEventListener("click", boton9click);

function boton9click() {
    if (contador %2 == 0) {
        boton_9.textContent = "X";
        boton_9.style.backgroundColor = 'red';
    } else {
        boton_9.textContent = "O";
        boton_9.style.backgroundColor = 'green';
    }
    contador++
    comprobarresultado()
    }

function comprobarresultado() {

    if (boton_1.textContent == "X" && boton_2.textContent == "X" && boton_3.textContent == "X") {
        alert("El jugador UNO ha ganado la partida") 
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias1 = contadorvictorias1 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias1").textContent = contadorvictorias1;

    } else if (boton_1.textContent == "X" && boton_4.textContent == "X" && boton_7.textContent == "X") {
        alert("El jugador UNO ha ganado la partida")
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias1 = contadorvictorias1 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias1").textContent = contadorvictorias1;

    } else if (boton_1.textContent == "X" && boton_5.textContent == "X" && boton_9.textContent == "X") {
        alert("El jugador UNO ha ganado la partida")
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias1 = contadorvictorias1 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias1").textContent = contadorvictorias1;;

    } else if (boton_2.textContent == "X" && boton_5.textContent == "X" && boton_8.textContent == "X") {
        alert("El jugador UNO ha ganado la partida")
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias1 = contadorvictorias1 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias1").textContent = contadorvictorias1;

    } else if (boton_3.textContent == "X" && boton_5.textContent == "X" && boton_7.textContent == "X") {
        alert("El jugador UNO ha ganado la partida")
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias1 = contadorvictorias1 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias1").textContent = contadorvictorias1;

    } else if (boton_3.textContent == "X" && boton_6.textContent == "X" && boton_9.textContent == "X") {
        alert("El jugador UNO ha ganado la partida")
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias1 = contadorvictorias1 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias1").textContent = contadorvictorias1;

    } else if (boton_4.textContent == "X" && boton_5.textContent == "X" && boton_6.textContent == "X") {
        alert("El jugador UNO ha ganado la partida")
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias1 = contadorvictorias1 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias1").textContent = contadorvictorias1;

    } else if (boton_7.textContent == "X" && boton_8.textContent == "X" && boton_9.textContent == "X") {
        alert("El jugador UNO ha ganado la partida") 
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias1 = contadorvictorias1 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias1").textContent = contadorvictorias1;
    }


    else if (boton_1.textContent == "O" && boton_2.textContent == "O" && boton_3.textContent == "O") {
        alert("El jugador DOS ha ganado la partida")
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias2 = contadorvictorias2 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias2").textContent = contadorvictorias2;

    } else if (boton_1.textContent == "O" && boton_4.textContent == "O" && boton_7.textContent == "O") {
        alert("El jugador DOS ha ganado la partida")
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias2 = contadorvictorias2 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias2").textContent = contadorvictorias2;

    } else if (boton_1.textContent == "O" && boton_5.textContent == "O" && boton_9.textContent == "O") {
        alert("El jugador DOS ha ganado la partida")
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias2 = contadorvictorias2 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias2").textContent = contadorvictorias2;

    } else if (boton_2.textContent == "O" && boton_5.textContent == "O" && boton_8.textContent == "O") {
        alert("El jugador DOS ha ganado la partida")
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias2 = contadorvictorias2 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias2").textContent = contadorvictorias2;

    } else if (boton_3.textContent == "O" && boton_5.textContent == "O" && boton_7.textContent == "O") {
        alert("El jugador DOS ha ganado la partida")
        document.getElementById("partidas").textContent = + 1;
        document.getElementById("victorias2").textContent = + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias2").textContent = contadorvictorias2;
        
    } else if (boton_3.textContent == "O" && boton_6.textContent == "O" && boton_9.textContent == "O") {
        alert("El jugador DOS ha ganado la partida")
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias2 = contadorvictorias2 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias2").textContent = contadorvictorias2;

    } else if (boton_4.textContent == "O" && boton_5.textContent == "O" && boton_6.textContent == "O") {
        alert("El jugador DOS ha ganado la partida") 
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias2 = contadorvictorias2 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias2").textContent = contadorvictorias2;

    } else if (boton_7.textContent == "O" && boton_8.textContent == "O" && boton_9.textContent == "O") {
        alert("El jugador DOS ha ganado la partida") 
        contadordepartidas = contadordepartidas + 1;
        contadorvictorias2 = contadorvictorias2 + 1;
        document.getElementById("partidas").textContent = contadordepartidas;
        document.getElementById("victorias2").textContent = contadorvictorias2;
    }
}

function resetear() {
    contador = 0;
   
    boton_1.textContent = ""
    boton_1.style.backgroundColor = "white"

    boton_2.textContent = ""
    boton_2.style.backgroundColor = "white"

    boton_3.textContent = ""
    boton_3.style.backgroundColor = "white"

    boton_4.textContent = ""
    boton_4.style.backgroundColor = "white"
    
    boton_5.textContent = ""
    boton_5.style.backgroundColor = "white"

    boton_6.textContent = ""
    boton_6.style.backgroundColor = "white"

    boton_7.textContent = ""
    boton_7.style.backgroundColor = "white"

    boton_8.textContent = ""
    boton_8.style.backgroundColor = "white"

    boton_9.textContent = ""
    boton_9.style.backgroundColor = "white"
}

