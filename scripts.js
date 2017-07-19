'use strict';

var searchList = ["1","2","3"];

var options = document.getElementsByClassName("removeButton");
for (let option of options) {
  option.addEventListener("click",
    removeOptionFromList);
}

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
