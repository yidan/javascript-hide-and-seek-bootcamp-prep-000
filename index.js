function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  let e = document.querySelector(".ranked-list")
  e.innerHTML = parseInt(e.innerHTML,10)+n
}
