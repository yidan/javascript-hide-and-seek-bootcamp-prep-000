function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  let e = document.querySelectorAll(".ranked-list li")
  Array.prototype.map.call(e,x => x.innerHTML = parseInt(x.innerHTML,10)+n)
  
}

function deepestChild(){
  return document.querySelector("div#grand-node div div div div")
}