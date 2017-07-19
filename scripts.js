'use strict';

var searchList = [];
var flag = false;

function removeOptionFromList() {
  console.log(this.value);
  console.log(searchList);
  var option = this.value;
  alert(option);
  var i = searchList.indexOf(option);

  if(i != -1) {
  	searchList.splice(i, 1);
    console.log(searchList);
  } else {
    console.log('no hay match');
  }
}

function agregarOption() {
	var busca = document.getElementById("google-input").value;
  if (searchList.indexOf(busca) < 0 ) {
      console.log("El elemento no se encuentra y se agregara");
			searchList.push(busca);
  }else{
		console.log("El elemento"+ busca +" ya se encuentra");
	}
}

function paintArray(){
  //var div = document.getElementById('dropdown');
  var ul = document.getElementById("dropdown");
    //if(tam1!=tam2){
        clearPaint();
        for(let i of searchList){
            var boton = document.createElement("a");
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

function clearPaint(){
  var ul = document.getElementById("dropdown");
  ul.innerHTML='';
}
