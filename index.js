function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  let e = document.querySelectorAll(".ranked-list li")
  Array.prototype.map(e,x => x.innerHTML = parseInt(x.innerHTML,10)+n)
  
}
