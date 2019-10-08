
let slideshowOptions = {
    position : 0, 
    directory : 'slideshowPics/',
    pics : ['slide1.jpg', 'slide2.png', 'slide3.jpg', 'slide4.jpg'],
    direction: 'right',
    //Animations: 'hold', 'fluent', 
    animation: {
        type: 'fluent',
        options:{
            speed: 5, 

//specific for 'hold': ##################
            duration: 4000, 
            navigationButtons: true, 
            buttonStyle: {
                rounded: true,
                color: '#000000',
                tansparent: true, 
            }

        }

    }
}



class Slideshow1AnimationFluent{
    constructor(picsNames, direction, container, options){
        this.options = options
        this.names = picsNames
        this.pics = [];
        this.pic
        this.len = this.names.length;
        this.dire = direction
        this.dur = this.options.speed;
        this.move = 0.5
        this.v;
        this.width = 0;
        this.height = 0;
        this.i;
        this.move;
        this.container = container
        this.contWi = this.container.offsetWidth
        this.contHe = this.container.offsetHeight

        this.names.forEach((elem) =>{
            this.pic = document.getElementById(elem)
            this.pics.push(document.getElementById(elem))
            if(this.pics.length === this.len){
                this.pics[this.len -1].addEventListener('load', () =>{
                    this.buildSlideshow()
                    this.detectChange()
                })
            }

        })
        //this.build();
    }
    buildSlideshow(){
        
        if(this.dire === 'left'){
            clearInterval(this.move)
            this.buildLeft();
        
        }
        else if(this.dire === 'right'){
            clearInterval(this.move)
            this.buildRight();
        }
        else if(this.dire === 'top'){
            clearInterval(this.move)
            this.buildTop();
        }
        else if(this.dire === 'bottom'){
            clearInterval(this.move)
            this.buildBottom();
        }
    }
    detectChange(){
        
        window.addEventListener('resize', () =>{
            this.buildSlideshow()
        })
    }
    buildLeft(){
        this.width = 0;
        for(this.i = 0; this.i < this.pics.length; this.i ++){
            this.pics[this.i].style.left = this.width;
            this.width += this.pics[this.i].width;
            this.v = -this.move
        }
        this.animateLeft()
    }
    buildRight(){
        
        this.width = this.contWi
        for(this.i = 0; this.i < this.pics.length; this.i ++){
            this.width -= this.pics[this.i].width;
            this.pics[this.i].style.left = this.width;
            this.v = this.move

        }
        this.width = 0;
        for(this.i = 0; this.i < this.pics.length; this.i ++){
            this.width += this.pics[this.i].width; 
        }
        this.animateRight()
    }
    buildTop(){
        
        this.height = 0
        for(this.i = 0; this.i < this.pics.length; this.i ++){
            this.pics[this.i].style.top = this.height;
            this.height += this.pics[this.i].height;
            this.v = -this.move

        }
        
        this.animateTop()
    }
    buildBottom(){
        
        this.height = this.contHe
        for(this.i = 0; this.i < this.pics.length; this.i ++){
            this.height -= this.pics[this.i].height;
            this.pics[this.i].style.top = this.height;
            this.v = this.move

        }
        this.height = 0;
        for(this.i = 0; this.i < this.pics.length; this.i ++){
            this.height += this.pics[this.i].height; 
        }
        this.animateBottom()
    }

    animateTop(){
        this.move = setInterval(()=>{
            for(this.i = 0; this.i < this.len; this.i ++ ){
                this.pic = this.pics[this.i]
                this.pic.style.top = this.pic.offsetTop + this.v
                
            }
            if(this.pics[0].offsetTop <= - this.pics[0].height){
                this.pic = this.pics[0]
                this.pic.style.top = this.height - this.pic.offsetHeight
                this.pics.shift();
                this.pics.push(this.pic)
                
            }
            
        }, this.dur)
    }
    animateBottom(){
        this.move = setInterval(()=>{
            for(this.i = 0; this.i < this.len; this.i ++ ){
                this.pic = this.pics[this.i]
                this.pic.style.top = this.pic.offsetTop + this.v
                
            }
            if(this.pics[0].offsetTop >= this.contHe){
                this.pic = this.pics[0]
                this.pic.style.top = -this.height + this.contHe
                this.pics.shift();
                this.pics.push(this.pic)
                
            }
            
        }, this.dur)
    }
    animateLeft(){
        this.move = setInterval(()=>{
            for(this.i = 0; this.i < this.len; this.i ++ ){
                this.pic = this.pics[this.i]
                this.pic.style.left = this.pic.offsetLeft + this.v
                
            }
            if(this.pics[0].offsetLeft <= - this.pics[0].width){
                this.pic = this.pics[0]
                this.pic.style.left = this.width + this.pic.offsetLeft
                this.pics.shift();
                this.pics.push(this.pic)
                
            }
            
        }, this.dur)
    }
    animateRight(){
        this.move = setInterval(()=>{
            for(this.i = 0; this.i < this.len; this.i ++ ){
                this.pic = this.pics[this.i]
                this.pic.style.left = this.pic.offsetLeft + this.v
                
            }
            if(this.pics[0].offsetLeft >= this.contWi){
                this.pic = this.pics[0]
                this.pic.style.left = -this.width +this.contWi
                this.pics.shift();
                this.pics.push(this.pic)
                
            }
            
        }, this.dur)
    }

}

class Slideshow1AnimationHold{
    constructor(picsNames, direction, container, options){
        this.showID = 0;
        this.op = options
        this.cont = container;
        this.names = picsNames;
        this.pics = []
        this.names.forEach((elem) =>{
            this.pic = document.getElementById(elem)
            this.pics.push(document.getElementById(elem))
            if(this.pics.length === this.len){
                this.pics[this.len -1].addEventListener('load', () =>{
                    this.buildSlideshow()
                    this.detectChange()
                })
            }

        })
        if(this.op.navigationButtons){
            this.loadButtons(this.op.buttonStyle)
        }

    }
    loadButtons(bStyle){
        this.cont
    }
}

class Slideshow1{
    constructor(options){
        this.op = options
        this.pos = this.op.position
        this.dir = this.op.directory
        this.pics = this.op.pics
        this.container = document.getElementsByClassName('slideshow')[this.pos];
        this.len = this.op.pics.length;
        this.picObjs = []
        this.animation
        this.animationType = this.op.animation.type;
        this.slideOptions = this.op.animation.options
        this.direction = this.op.direction
        if(this.direction === 'top' || this.direction === 'bottom'){
            this.reference = 'width'
        }
        else if(this.direction === 'left' || this.direction === 'right'){
            this.reference = 'height'
        }
        this.drawPics()
        this.setAnimation()
    } 
    drawPics(){
        this.name
        this.i;
        
        for(this.i = 0; this.i < this.len; this.i++){
            this.name = `slidePic_${this.pos}_${this.i}`;
            
            this.container.innerHTML += `<img id = ${this.name} src = '${this.dir + this.pics[this.i]}' style = '
                position: absolute;  ${this.reference}: 100%; display: block;' />`
            this.picObjs.push(this.name);
        }
        
    }
    setAnimation(){
        if(this.animationType === 'fluent'){
            this.animation = new Slideshow1AnimationFluent(this.picObjs, this.direction, this.container, this.slideOptions)
        }
        if(this.animationType === 'hold'){
            this.animation = new Slideshow1AnimationHold(this.picObjs, this.direction, this.container, this.slideOptions)

        }

    }
    
    
}
let theSlideShow1 = new Slideshow1(slideshowOptions);