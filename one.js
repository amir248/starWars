console.log('oK');
document.querySelector('body');
const position={
  top:0,
  left:0,
  right: 0,
  bottom: 0
}
window.addEventListener('keydown',(e)=>{
  // console.log(e.code);
  if(e.code=='ArrowUp'){
    console.log('ArrowUp');
  }else if(e.code=="ArrowDown"){
    console.log("Down");
  }else if(e.code=='ArrowLeft'){
        position.left++;
        console.log(position.left);
        // document.querySelector('#user').style.left=`${position.left}`;
        document.querySelector('#user').style.cssText=`
        left:${position.left}px;
          display:gird;
          position:absolute;
        `;
    console.log('left');
  }else if(e.code=='ArrowRight'){
    position.right++;
    console.log('Right');
    document.querySelector('#user').style.cssText=`
    right:${position.right}px;
      display:gird;
      position:absolute;
    `;
    
  }else{
    console.log('else');
  }
});
