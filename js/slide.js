const next = () => {
  let posX = document.getElementsByClassName('slider__screen-box')[0].offsetLeft;
  const step = 250;
    if(posX<=20 && posX> -730 ){
    document.getElementsByClassName('slider__screen-box')[0].style.cssText = `
      transition: all 0.3s ease;
      left: ${posX-step}px;
    `}
    if(posX<= -700){
      document.getElementsByClassName('slider__screen-box')[0].style.cssText = `
      transition: all 0.9s ease;
      left: -730px;
    `
    }
    changeBg(document.getElementsByClassName('slider__screen-box')[0].style.left.split('p')[0])
    
}

const prev = () => {
  let posX = document.getElementsByClassName('slider__screen-box')[0].offsetLeft;
  const step = 250;
    if(posX<20 && posX>= -750){
    document.getElementsByClassName('slider__screen-box')[0].style.cssText = `
      transition: all 0.3s ease;
      left: ${posX+step}px;
    `}
    if(posX>= 0){
      document.getElementsByClassName('slider__screen-box')[0].style.cssText = `
      transition: all 0.9s ease;
      left: 20px;
    `
    }
    changeBg(document.getElementsByClassName('slider__screen-box')[0].style.left.split('p')[0])
    
}

const changeBg = (posX) => {
  if(posX == 20){
    document.getElementsByClassName('bg')[0].style.cssText = "background-image: url(https://1.bp.blogspot.com/-zyDwkhjxmbw/XAywyW7ZFTI/AAAAAAAAXLM/AInbPEZWjLEk8LAR6geygtvfEf6AB0sOQCLcBGAs/s320/ded7deb2eb7068b-a-nw-p_1544335501310.jpg);";
    document.getElementsByTagName('body')[0].style.cssText = "background: rgb(103, 225, 255);"
  }
  if(posX<20 && posX>=-230){
      document.getElementsByClassName('bg')[0].style.cssText = "background-image: url(https://wmpics.pics/dm-QKW6.jpg);";
      document.getElementsByTagName('body')[0].style.cssText = "background: rgb(223, 121, 121);"
  }
  if(posX<-230 && posX>=-480){
      document.getElementsByClassName('bg')[0].style.cssText = "background-image: url(https://st-de.jigsawplanet.com/i/8e64120191099c0700c69be73b62dc4060/320/jp.jpg);";
      document.getElementsByTagName('body')[0].style.cssText = "background: rgb(186, 208, 233));"
  }
  if(posX<-480 && posX>=-730){
    document.getElementsByClassName('bg')[0].style.cssText = "background-image: url(https://st-de.jigsawplanet.com/i/4368e1005208d203004f0edbed813dd757/320/jp.jpg);";
    document.getElementsByTagName('body')[0].style.cssText = "background: rgb(189, 243, 251);"
}
}
