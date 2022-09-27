var btnNewGame = document.getElementById("NewGame");
var btnAddWord = document.getElementById("AddWord");
var btnSaveWord = document.getElementById("SaveWord");
var btnCancel = document.getElementById("Cancel");
var btnOtherGame = document.getElementById("OtherGame");
var btnHelp = document.getElementById("Help");
var btnExit = document.getElementById("Exit");
var dibujo=document.getElementById("Dibujo");
var palabraNueva=document.getElementById("palabraNueva");

var labelPalabra=document.getElementById("Word");

let palabras = ["CENIDET", "CASA","ARBOL","ESCUELA", "ALURA"];
//Funcion random de palabras
function getword(palabras){
    let random = Math.floor(Math.random() * palabras.length);
    return palabras[random];
}
var palabra=getword(palabras);
//ocultamiento de objetos
dibujo.style.display = "none";
btnSaveWord.style.display = "none";
btnCancel.style.display = "none";
btnOtherGame.style.display = "none";
btnHelp.style.display = "none";
btnExit.style.display = "none";
labelPalabra.style.display = "none";
palabraNueva.style.display = "none";

//Boton Iniciar Juego
btnNewGame.addEventListener("click", function () {
    btnNewGame.style.display = "none";
    btnAddWord.style.display = "none";
    dibujo.style.display = "block";
    labelPalabra.style.display = "block";
    labelPalabra.innerHTML = palabra;
    btnOtherGame.style.display = "block";
    btnHelp.style.display = "block";
    btnExit.style.display = "block";
  });
//Boton Agregar palabra
btnAddWord.addEventListener("click", function () {
    btnNewGame.style.display = "none";
    btnAddWord.style.display = "none";
    palabraNueva.style.display = "block";
    btnSaveWord.style.display = "block";
    btnCancel.style.display = "block";
  });
//Cancelar agregar palabra
btnCancel.addEventListener("click", function () {
    btnNewGame.style.display = "block";
    btnAddWord.style.display = "block";
    palabraNueva.style.display = "none";
    btnSaveWord.style.display = "none";
    btnCancel.style.display = "none";
  });
//Boton guardar palabra
btnSaveWord.addEventListener("click", function () {
    palabra=palabraNueva.value;
    palabraNueva.style.display = "none";
    btnSaveWord.style.display = "none";
    btnCancel.style.display = "none";
    dibujo.style.display = "block";
    labelPalabra.style.display = "block";
    labelPalabra.innerHTML = palabra;
    btnOtherGame.style.display = "block";
    btnHelp.style.display = "block";
    btnExit.style.display = "block";
  });

  //Boton Nuevo Juego
  btnOtherGame.addEventListener("click", function () {
    btnOtherGame.style.display = "none";
    btnHelp.style.display = "none";
    btnExit.style.display = "none";
    dibujo.style.display = "none";
    labelPalabra.style.display = "none";
    btnNewGame.style.display = "block";
    btnAddWord.style.display = "block";
  });