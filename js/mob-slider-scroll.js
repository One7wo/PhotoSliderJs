const reactDots = () => {
    if(window.innerWidth<431){
    document.getElementsByClassName('bg')[0].style.cssText = "background-image: url(https://i.pinimg.com/236x/b1/72/d3/b172d37d13b33d42e3f1a414136dc92b.jpg);";
    document.getElementsByTagName('body')[0].style.cssText = "background: rgb(30, 43, 75);"
    }
    document.getElementsByClassName('slider')[0].addEventListener('scroll', () => {
        if(document.getElementsByClassName('slider')[0].scrollLeft<=180){
            if(!document.getElementsByClassName('dot')[0].classList[1]){
            document.getElementsByClassName('dot')[0].classList.add('active')
            document.getElementsByClassName('dot')[1].classList.remove('active')
            document.getElementsByClassName('bg')[0].style.cssText = "background-image: url(https://i.pinimg.com/236x/b1/72/d3/b172d37d13b33d42e3f1a414136dc92b.jpg);";

            }
        }
        if(document.getElementsByClassName('slider')[0].scrollLeft>180 && document.getElementsByClassName('slider')[0].scrollLeft<=360){
            if(!document.getElementsByClassName('dot')[1].classList[1]){
            document.getElementsByClassName('dot')[1].classList.add('active')
            document.getElementsByClassName('dot')[0].classList.remove('active')
            document.getElementsByClassName('dot')[2].classList.remove('active')
            document.getElementsByClassName('bg')[0].style.cssText = "background-image: url(https://1.bp.blogspot.com/-zyDwkhjxmbw/XAywyW7ZFTI/AAAAAAAAXLM/AInbPEZWjLEk8LAR6geygtvfEf6AB0sOQCLcBGAs/s320/ded7deb2eb7068b-a-nw-p_1544335501310.jpg);";

            }
        }
        if(document.getElementsByClassName('slider')[0].scrollLeft>360 && document.getElementsByClassName('slider')[0].scrollLeft<=540){
            if(!document.getElementsByClassName('dot')[2].classList[1]){
            document.getElementsByClassName('dot')[2].classList.add('active')
            document.getElementsByClassName('dot')[1].classList.remove('active')
            document.getElementsByClassName('dot')[3].classList.remove('active')
            document.getElementsByClassName('bg')[0].style.cssText = "background-image: url(https://wmpics.pics/dm-QKW6.jpg);";

        }
        }
        if(document.getElementsByClassName('slider')[0].scrollLeft>540 && document.getElementsByClassName('slider')[0].scrollLeft<=720){
            if(!document.getElementsByClassName('dot')[3].classList[1]){
            document.getElementsByClassName('dot')[3].classList.add('active')
            document.getElementsByClassName('dot')[2].classList.remove('active')
            document.getElementsByClassName('dot')[4].classList.remove('active')
            document.getElementsByClassName('bg')[0].style.cssText = "background-image: url(https://st-de.jigsawplanet.com/i/8e64120191099c0700c69be73b62dc4060/320/jp.jpg);";

            }
        }
        if(document.getElementsByClassName('slider')[0].scrollLeft>720 && document.getElementsByClassName('slider')[0].scrollLeft<=900){
            if(!document.getElementsByClassName('dot')[4].classList[1]){
            document.getElementsByClassName('dot')[4].classList.add('active')
            document.getElementsByClassName('dot')[3].classList.remove('active')
            document.getElementsByClassName('dot')[5].classList.remove('active')
            document.getElementsByClassName('bg')[0].style.cssText = "background-image: url(https://st-de.jigsawplanet.com/i/4368e1005208d203004f0edbed813dd757/320/jp.jpg);";

            }
        }
        if(document.getElementsByClassName('slider')[0].scrollLeft>1000 && document.getElementsByClassName('slider')[0].scrollLeft<=1080){
            if(!document.getElementsByClassName('dot')[5].classList[1]){
            document.getElementsByClassName('dot')[5].classList.add('active')
            document.getElementsByClassName('dot')[4].classList.remove('active')
            document.getElementsByClassName('bg')[0].style.cssText = "background-image: url(https://wmpics.pics/dm-61SQ.jpg);";

            }
        }
    })
}
