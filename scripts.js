'use strict';
var searchList = [];

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
        console.log('No hay sugerencias');
    } else {
        for(i of searchList){
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(i));
            ul.appendChild(li);
        }
    }
    //return list;
}

function clearPaint(){
    var ul = document.getElementById("dropdown");
    ul.innerHTML='';
}
