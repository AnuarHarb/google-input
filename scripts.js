'use strict';

var searchList = [];

function paintArray(){
    //var div = document.getElementById('dropdown');
    var ul = document.getElementById("dropdown");
    if(searchList.length=='0'){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode('No hay sugerencias'));
        ul.appendChild(li);
    } else {
        for(i of searchList){
            var boton = document.createElement("button");
            boton.setAttribute('class','removeButton');
            boton.innerHTML='X';
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(i));
            li.appendChild(boton);
            ul.appendChild(li);
        }
    }
    //return list;
}

function clearPaint(){
    var ul = document.getElementById("dropdown");
    ul.innerHTML='';
}
