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
      display:gird;
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
      display:gird;
      position:absolute;
    `;
  }else if(e.code=='ArrowLeft'){
        position.left-=skor;
        console.log(position.left);
        // document.querySelector('#user').style.left=`${position.left}`;
        document.querySelector('#user').style.cssText=`
        bottom:${position.bottom}px;
        left:${position.left}px;
          display:gird;
          position:absolute;
        `;
    console.log('left');
  }else if(e.code=='ArrowRight'){
    position.left+=skor;
    console.log('Right');
    document.querySelector('#user').style.cssText=`
    bottom:${position.bottom}px;
    left:${position.left}px;
      display:gird;
      position:absolute;
    `;

  }else{
    console.log('else');
  }
});
window.addEventListener('load',()=>{
  document.querySelector('img').style.cssText=`width:30px;`
  console.log(window.innerWidth+"_"+window.innerHeight);
})
