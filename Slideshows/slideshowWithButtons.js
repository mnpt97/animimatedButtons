let slideshowOptionsButtons = {
    classname: 'slideshowWButtons',
    // position of the HTML class name
    position: 0,
    directory : 'slideshowPics/',
    pics : ['slide1.jpg', 'slide4.jpg', 'slide3.jpg'],//, 'slide2.png', 'slide3.jpg', 'slide4.jpg'],
    //direction: portrait or landscape
    direction: 'landscape'
}

function isTouchDevice(){
    return typeof window.ontouchstart !== 'undefined';
}

class SwipeDetection{
    constructor(){
        
        console.log('swipeDetect')
        //this.addListeners();
        this.touchstart = {x: 0, y: 0};
        this.touchend = {x: 0, y: 0};
        this.swipe;
        this.text1 = document.getElementsByClassName('text1');
    }
    listenStart(evt){
        this.touchstart.x = evt.touches[0].clientX
        this.touchstart.y = evt.touches[0].clientY
    }
    listenEnd(evt){
        this.touchend.x = evt.changedTouches[0].clientX
        this.touchend.y = evt.changedTouches[0].clientY
        this.swipe = this.touchstart.x-this.touchend.x
        
    }
    

    handleSwipe(sliderPos){
        if(this.swipe > 0){
            this.text1[0].innerHTML = 'left';
            sliderPos += 1
        }
        else if(this.swipe < 0){
            this.text1[0].innerHTML = 'right';
            sliderPos -= 1
        }
        return sliderPos
    }
}

class SlideshowWithControls{
    constructor(options){
        this.op = options;
        this.fol = this.op.directory;
        this.dir = this.op.direction;
        this.picStrings = this.op.pics;
        this.ref;
        this.sClass = document.getElementsByClassName(this.op.classname)[this.op.position]
        this.calcPos = 0;
        this.actPos = 0;
        this.boxWidth;
        this.whileAnimate = false;
        this.boxLeft = 0;
        this.boxMoveDiv = 0;
        this.imgpos = {};
        this.imgs
        this.imgBoxes
        this.swiper;
        this.text1 = document.getElementsByClassName('text1');

        switch (this.dir) {
            case 'landscape':
                this.ref = 'width'
                break;
            case 'portrait':
                this.ref = 'height'
                break;
            default:
                this.ref = 'width';
        }

        //checks for touch device -> if true: adds touchstart and touchend event listener
        this.touch = isTouchDevice()
        if(this.touch){
            this.swiper = new SwipeDetection(this.sClass)
            this.touchListener()
            this.text1[0].innerHTML = 'touch'
        }
        else{
            this.text1[0].innerHTML = 'no touch'
        }
        this.loadPics()
        this.layoutPics();
        this.arangeBoxes()

    }
    touchListener(){
        this.sClass.addEventListener('touchstart', (evt) =>{
            this.swiper.listenStart(evt)
        },false)
        this.sClass.addEventListener('touchend', (evt) =>{
            this.swiper.listenEnd(evt)
            this.calcPos = this.swiper.handleSwipe(this.actPos)
            if(this.calcPos >= 0 && this.calcPos < this.picStrings.length && !this.whileAnimate){
                this.animate(this.actPos - this.calcPos)
                this.actPos = this.calcPos
            }
            else{
                this.calcPos = this.actPos
            }
        },false)
    }
    //loads images in boxes and centers them in it
    loadPics(){
        console.log(this.touch);
        this.picStrings.forEach(pic => {
            this.sClass.innerHTML += 
                `<div class = 'sliderBox' style = 'position: absolute; width: 100%; height: 100%; background-color: black'>
                    <img src = ${this.fol + pic} class = 'slideImg' style = 'margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0;'>
                </div>`
        });
    }
    //layouts the image depending on the orientation
    layoutPics(){
        this.imgs = document.getElementsByClassName('slideImg');
        for(this.i = 0; this.i < this.imgs.length; this.i++){
            console.log(this.i)
            if(this.imgs[this.i].naturalWidth > this.imgs[this.i].naturalHeight){
                this.imgs[this.i].style.width = '100%';
            }
            else if(this.imgs[this.i].naturalWidth < this.imgs[this.i].naturalHeight){
                this.imgs[this.i].style.height = '100%';
            }
        }
    }
    arangeBoxes(){
        this.imgBoxes = document.getElementsByClassName('sliderBox');
        this.boxWidth = this.imgBoxes[0].offsetWidth;
        console.log(this.boxWidth)
        for(this.i =0; this.i < this.imgBoxes.length; this.i++){
            this.imgBoxes[this.i].style.left = this.boxLeft  + 'px';
            this.boxLeft += this.boxWidth 
        }
    }
    animate(div){
        this.whileAnimate = true
        console.log(div)
        this.aniInterval = setInterval(()=>{
            console.log(this.imgBoxes[0].offsetLeft);
            for(this.i = 0; this.i < this.imgBoxes.length; this.i++){
                this.imgBoxes[this.i].style.left = this.imgBoxes[this.i].offsetLeft + 2*div + 'px'
                
            }
            this.boxMoveDiv += 2;
                console.log(this.boxMoveDiv, this.boxWidth)
                if(this.boxMoveDiv>= this.boxWidth){
                    clearInterval(this.aniInterval)
                    this.boxMoveDiv = 0;
                    this.whileAnimate = false
                }
        },5)
        


    }
}

let swb = new SlideshowWithControls(slideshowOptionsButtons)

