console.log('oK');
document.querySelector('body');
const position={
  top:0,
  left:150,
  right: 0,
  bottom: 0
}
window.addEventListener('keydown',(e)=>{
  // console.log(e.code);
  if(e.code=='ArrowUp'){
    console.log('ArrowUp');
    position.bottom+=10;
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
    position.bottom-=10;
    console.log(position.bottom);
    // document.querySelector('#user').style.left=`${position.left}`;
    document.querySelector('#user').style.cssText=`
    left:${position.left}px;
    bottom:${position.bottom}px;
      display:gird;
      position:absolute;
    `;
  }else if(e.code=='ArrowLeft'){
        position.left-=10;
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
    position.left+=10;
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
