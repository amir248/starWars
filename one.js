console.log('oK');
document.querySelector('body');
const position={
  top:0,
  left:150,
  right: 0,
  bottom: 0
}
let skor=30
window.addEventListener('keydown',(e)=>{
  // console.log(e.code);
  if(e.code=='ArrowUp'){
    console.log('ArrowUp');
    position.bottom+=skor;
    console.log(position.bottom);
    // document.querySelector('#user').style.left=`${position.left}`;
    document.querySelector('#user').style.cssText=`
    left:${position.left}px;
    bottom:${position.bottom}px;
      display:grid;
      position:absolute;
    `;
  }else if(e.code=="ArrowDown"){
    console.log("Down");
    position.bottom-=skor;
    console.log(position.bottom);
    // document.querySelector('#user').style.left=`${position.left}`;
    document.querySelector('#user').style.cssText=`
    left:${position.left}px;
    bottom:${position.bottom}px;
      display:grid;
      position:absolute;
    `;
  }else if(e.code=='ArrowLeft'){
        position.left-=skor;
        console.log(position.left);
        // document.querySelector('#user').style.left=`${position.left}`;
        document.querySelector('#user').style.cssText=`
        bottom:${position.bottom}px;
        left:${position.left}px;
          display:grid;
          position:absolute;
        `;
    console.log('left');
  }else if(e.code=='ArrowRight'){
    position.left+=skor;
    console.log('Right');
    document.querySelector('#user').style.cssText=`
    bottom:${position.bottom}px;
    left:${position.left}px;
      display:grid;
      position:absolute;
    `;

  }else{
    console.log(e.code);

  }

  if(e.code=='KeyF'){
    console.log("oK");
    oK();
  }
});
window.addEventListener('load',()=>{
  document.querySelector('img').style.cssText=`width:30px;`
  console.log(window.innerWidth+"_"+window.innerHeight);
});
window.addEventListener('load',oK);
function oK(){
  let strel=document.createElement('span');
  pos = ship.getBoundingClientRect();
  strel.style.cssText=`
    display:block;
    background:red;
    width:7px;
    height:7px;
    position:absolute;
    border-radius:50%;
  `
  document.querySelector('main').append(strel);



}
