

const API_URL_latest= 'https://intro-to-js-playground.vercel.app/api/xkcd-comics'
const API_URL= 'https://intro-to-js-playground.vercel.app/api/xkcd-comics/'
var global = Math.floor(Math.random()*100);





//```````````````````displaying loading```````````````````````````````````````//
const loader = document.querySelector("#loading");

// showing loading
function displayLoading() {
  loader.classList.add("display");
  // to stop loading after some time
  setTimeout(() => {
      loader.classList.remove("display");
  }, 2000);
}

// hiding loading 
function hideLoading() {
  loader.classList.remove("display");
}
//```````````````````displaying loading```````````````````````````````````````//



//```````````````````getting images```````````````````````````````````````//


const getComic = (num) => {
  displayLoading()
  const apiStr = (num==0||num>=2514)?API_URL_latest:`${API_URL}${num}`;
  fetch(apiStr)
  .then(res => {return res.json()})
  .then(data=>{console.log(data)
              hideLoading()
              
              document.getElementById("result1").innerHTML=`${data.num}<img src=${data.img} /> Title: ${data.title}`
              })
  .catch(err => console.log('Request Failed', err))
  } 
  
const getComic2 = (num) => {
  displayLoading()
  const apiStr = (num==0||num>=2514)?API_URL_latest:`${API_URL}${num}`;
  fetch(apiStr)
  .then(res => {return res.json()})
  .then(data=>{console.log(data)
                hideLoading()
              //  loadedComics.push(data)
              document.getElementById("result2").innerHTML=`${data.num}<img src=${data.img} /> Title: ${data.title}`
              })
  .catch(err => console.log('Request Failed', err))
  }

const getComic3 = (num) => {
  displayLoading()
  const apiStr = (num==0||num>=2514)?API_URL_latest:`${API_URL}${num}`;
  fetch(apiStr)
  .then(res => {return res.json()})
  .then(data=>{console.log(data)
              hideLoading()
              //  loadedComics.push(data)
              document.getElementById("result3").innerHTML=`${data.num}<img src=${data.img} /> Title: ${data.title}`
              })
  .catch(err => console.log('Request Failed', err))
  } 

const getComic4 = (num) => {
  displayLoading()
  const apiStr = (num==0||num>=2514)?API_URL_latest:`${API_URL}${num}`;
  fetch(apiStr)
  .then(res => {return res.json()})
  .then(data=>{console.log(data)
              //  loadedComics.push(data)
              hideLoading()
              document.getElementById("result4").innerHTML=`${data.num}<img src=${data.img} /> Title: ${data.title}`
              })
  .catch(err => console.log('Request Failed', err))
  } 

  const getComic5 = (num) => {
  displayLoading()
  const apiStr = (num==0||num>=2514)?API_URL_latest:`${API_URL}${num}`;
  fetch(apiStr)
  .then(res => {return res.json()})
  .then(data=>{console.log(data)
              hideLoading()
              //  loadedComics.push(data)
              document.getElementById("result5").innerHTML=`${data.num}<img src=${data.img} /> Title: ${data.title}`
              })
  .catch(err => console.log('Request Failed', err))
  } 



//```````````````````getting images```````````````````````````````````````//



//```````````` when in , load a random page `````````````````````````````//
const getAllComics=(num)=>{
  
  console.log(num)
  getComic(num)
  ++num
  getComic2(num)
  ++num
  getComic3(num)
  ++num
  getComic4(num)
  ++num
  getComic5(num)
}
getAllComics(global)



//```````````` when in , load a random page `````````````````````````````//


//````````````adding eventlistener `````````````````````````````````````//


document.addEventListener('DOMContentLoaded', function () {
  const rand_btn = document.getElementById('comic-rand-btn')
  const right_btn= document.getElementById('right-btn')
  const left_btn = document.getElementById('left-btn')
  const current_btn = document.getElementById('current-btn')
  const next_3= document.getElementById('next3')
  const back_3=document.getElementById('back3')
  let Page_Changing_btn = [rand_btn,right_btn,left_btn,current_btn,next_3,back_3]
  Page_Changing_btn.forEach(btn => btn.addEventListener('click',changeComic))
})

//````````````adding eventlistener `````````````````````````````````````//



//`````````` goes to page num ```````````````````//
const form  = document.querySelector("#comicpageform")
const pageInput = document.querySelector('#page-number')
if (form){
  form.addEventListener('submit',handleSubmit)
}
function handleSubmit(ev){
  
  ev.preventDefault()
  let formEl = document.forms.comicpageform
  let formdata = new FormData(formEl)
  let num = formdata.get('page-number')
  console.log(document.forms.comicpageform)
  console.log(`page num submitted ${num}`)
  getAllComics(num)
  global = num
  console.log(global)
  
}





// `````````````````````````` chnageing views```````````````````//
function showImage(imageId){
  document.getElementById(imageId).style.display = 'block'
}

function hideImage(imageId) {
  document.getElementById(imageId).style.display = 'none';
}

function singles(){
  getAllComics(global)
  displayLoading()
  showImage('result1');
  hideLoading()
  hideImage('result2');
  hideImage('result3');
  hideImage('result4');
  hideImage('result5');
  
}
function threes(){
  getAllComics(global)
  displayLoading()
  showImage('result1');
  showImage('result2');
  showImage('result3');
  hideLoading()
  hideImage('result4');
  hideImage('result5');
  
}

function fivers(){
  getAllComics(global)
  displayLoading()
  showImage('result1');
  showImage('result2');
  showImage('result3');
  showImage('result4');
  showImage('result5');
  hideLoading()
}


const single= document.getElementById('single-btn')
if(single){
  single.addEventListener('click',singles)
}
const triple= document.getElementById('triple-btn')
if(triple){
  triple.addEventListener('click',threes)
}
const fives= document.getElementById('fives-btn')
if(fives){
  fives.addEventListener('click',fivers)
}

//``````````````````````````changing views``````````````````````````````````````//









//````````````````````````showing next comics``````````````````````````````//
var current = global


function changeComic(event) {
  // to get button element of the desired click
  const button = event.target;
 
  if (button.id === 'right-btn') {
    current = ++global
    getComic(current)
    singles()
    console.log(current)


  } else if (button.id === 'left-btn') {

    current = --global
    getComic(current)
    singles()
    console.log(current)
  


  }else if (button.id==='comic-rand-btn'){
    const root = Math.floor(Math.random()*100)
    current = root
    getComic(current)
    singles()
    global = root
    console.log(current)
    
    
  }
  else if (button.id==='current-btn'){
    current = global
    getComic(current)
    singles()
    console.log(current)
  }
  else if (button.id === 'next3'){
    ++global
    ++global
    ++global
    getComic(global)
    threes()
    console.log(global)

  }
  else if (button.id === 'back3'){
    --global
    --global
    --global
    getComic(global)
    threes()
    console.log(global)
  }
}
//````````````````````````showing next comics``````````````````````````````//

