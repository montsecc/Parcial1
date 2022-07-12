let minusculas = document.getElementById("convertir-minusculas")
minusculas.addEventListener("click",mayAmin)


function mayAmin(event){
  event.preventDefault()
  let nombres = 'txt_may';
  let splitNombres = nombres.split(",");
  let mayNombres = splitNombres.map(palabra => {
    return palabra[0].toLowerCase() + palabra.slice(1);
  })
}

let convertir = document.getElementById("humano-perro")
convertir.addEventListener("click",convierte)

function convierte(event){
  event.preventDefault()
  let humano = document.getElementById("edad_humano").value
  parseInt(edad_humano);
  perro= humano * 7
  let edad_perro=perro
}