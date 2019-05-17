
let cats = [
"https://loremflickr.com/320/240?random=1",
"https://loremflickr.com/320/240?random=2",
"https://loremflickr.com/320/240?random=3",
"https://loremflickr.com/320/240?random=4",
"https://loremflickr.com/320/240?random=5",
"https://loremflickr.com/320/240?random=6",
"https://loremflickr.com/320/240?random=7",
"https://loremflickr.com/320/240?random=8",
"https://loremflickr.com/320/240?random=9"
]

let url = `https://loremflickr.com/320/240?random=`

function getCats(idx){
  return url+idx
}

let currIdx = 0

function getPic(){
  let pic = document.getElementsByClassName("main-img")
  return pic
}

function renderCats(){
  let pic = getPic()
  for(let i=0;i<pic.length;i++){
    pic[i].src = getCats(i+currIdx)
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  let pic = getPic()
  renderCats(cats)
  setInterval(next,4000)

})


function prev(){
  if(currIdx !==0){
    currIdx=currIdx-3
  }
  renderCats(cats)
}

function next(){
  currIdx = currIdx+3
  renderCats(cats)
}
