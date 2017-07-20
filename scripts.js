'use strict';

var searchList = [];
var flag = false;

function agregarOption() {
  var input = document.getElementById("google-input");
	var busca = document.getElementById("google-input").value;
  var container = document.querySelector(".container");
  if (searchList.indexOf(busca) < 0 ) {
      console.log("El elemento no se encuentra y se agregara");
			searchList.push(busca);
      container.setAttribute('class', 'container no-bottom-shadow')
      paintArray();
  }else{
		console.log("El elemento"+ busca +" ya se encuentra");
	}
  input.value = "";
}

function paintArray(){
  //var div = document.getElementById('dropdown');
  var ul = document.getElementById("dropdown");
    //if(tam1!=tam2){
        clearPaint();
        for(let i of searchList){
            var boton = document.createElement("button");
            boton.setAttribute('class','removeButton');
            boton.setAttribute('value',i);
            boton.innerHTML='Eliminar';

            var texto = document.createElement("p");
            texto.setAttribute('class','option');
            texto.setAttribute('value',i);

            var li = document.createElement("li");
            li.appendChild(texto);
            li.appendChild(boton);
            texto.appendChild(document.createTextNode(i));
            ul.appendChild(li);
            flag=true;
        }
        var options = document.getElementsByClassName("removeButton");
        for (let option of options) {
          option.addEventListener("click",
            removeOptionFromList);
        }
    //}
}

function removeOptionFromList() {
  var itemButton = this;
  var itemName = itemButton.previousSibling;
  var option = this.value;
  var i = searchList.indexOf(option);

  if(i != -1) {
  	searchList.splice(i, 1);
    itemButton.innerHTML = "";
    itemName.setAttribute('class','delated');
    itemName.innerHTML = "Se ha eliminado esta búsqueda de tu historial web";
  } else {
    console.log('no hay match');
  }
}

function clearPaint(){
  var ul = document.getElementById("dropdown");
  ul.innerHTML='';
}
