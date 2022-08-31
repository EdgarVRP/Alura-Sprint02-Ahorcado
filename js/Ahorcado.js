var btnNewGame = document.getElementById("NewGame");
var btnAddWord = document.getElementById("AddWord");
var btnSaveWord = document.getElementById("SaveWord");
var btnCancel = document.getElementById("Cancel");
var btnOtherGame = document.getElementById("OtherGame");
var btnHelp = document.getElementById("Help");
var btnExit = document.getElementById("Exit");
var dibujo=document.getElementById("Dibujo");

let palabras = ["CENIDET", "CASA","ARBOL","ESCUELA", "ALURA"];
//Funcion random de palabras
function getword(palabras){
    let random = Math.floor(Math.random() * palabras.length);
    return palabras[random];
}
var palabra=getword(palabras);
//ocultamiento de objetos
document.getElementById("Dibujo").style.display = "none";
document.getElementById("SaveWord").style.display = "none";
document.getElementById("Cancel").style.display = "none";
document.getElementById("OtherGame").style.display = "none";
document.getElementById("Help").style.display = "none";
document.getElementById("Exit").style.display = "none";
document.getElementById("Word").style.display = "none";
document.getElementById("palabraNueva").style.display = "none";

//Boton Nuevo Juego
btnNewGame.addEventListener("click", function () {
    document.getElementById("NewGame").style.display = "none";
    document.getElementById("AddWord").style.display = "none";
    document.getElementById("Dibujo").style.display = "block";
    document.getElementById("Word").style.display = "block";
    document.getElementById("Word").innerHTML = palabra;
    document.getElementById("Word").style.display = "block";
  });
//Boton Agregar palabra
btnAddWord.addEventListener("click", function () {
    document.getElementById("NewGame").style.display = "none";
    document.getElementById("AddWord").style.display = "none";
    document.getElementById("palabraNueva").style.display = "block";
    document.getElementById("SaveWord").style.display = "block";
    document.getElementById("Cancel").style.display = "block";
  });
//Cancelar agregar palabra
btnCancel.addEventListener("click", function () {
    document.getElementById("NewGame").style.display = "block";
    document.getElementById("AddWord").style.display = "block";
    document.getElementById("palabraNueva").style.display = "none";
    document.getElementById("SaveWord").style.display = "none";
    document.getElementById("Cancel").style.display = "none";
  });
//Boton guardar palabra
btnSaveWord.addEventListener("click", function () {
    document.getElementById("palabraNueva").style.display = "none";
    document.getElementById("SaveWord").style.display = "none";
    document.getElementById("Cancel").style.display = "none";
    //palabra=toUpperCase(document.getElementById("palabraNueva").value);
    document.getElementById("Dibujo").style.display = "block";
    document.getElementById("Word").style.display = "block";
    document.getElementById("Word").innerHTML = palabra;
  });