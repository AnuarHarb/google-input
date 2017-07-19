'use strict';

var searchList = [];

function removeOptionFromList() {
  console.log(this);
  var option = this.value;
  var i = searchList.indexOf(option);

  if(i != -1) {
  	searchList.splice(i, 1);
    console.log(searchList);
  } else {
    console.log('no hay match');
  }
}

function agregarOption()
{
	var busca = document.getElementById("google-input").value;

        if (searchList.indexOf(busca) < 0 ) {
            console.log("El elemento no se encuentra y se agregara");
						searchList.push(busca);
        }else{
					console.log("El elemento"+ busca +" ya se encuentra");
				}
	console.log(searchList);
}

function paintArray(){
    //var div = document.getElementById('dropdown');
    var ul = document.getElementById("dropdown");
    if(searchList.length=='0'){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode('No hay sugerencias'));
        ul.appendChild(li);
    } else {
        for(let i of searchList){
            var boton = document.createElement("button");
            boton.setAttribute('class','removeButton');
            boton.setAttribute('value',i);
            boton.innerHTML='X';
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(i));
            li.appendChild(boton);
            ul.appendChild(li);
        }
        var options = document.getElementsByClassName("removeButton");
        for (let option of options) {
          option.addEventListener("click",
            removeOptionFromList);
          console.log('elemento de lista');
        }
    }
    //return list;
}

function clearPaint(){
    var ul = document.getElementById("dropdown");
    ul.innerHTML='';
}
