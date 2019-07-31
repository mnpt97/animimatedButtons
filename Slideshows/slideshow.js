
let slideshowOptions = {
    position : 0, 
    directory : 'slideshowPics/',
    pics : ['slide1.jpg', 'slide2.png', 'slide3.jpg', 'slide4.jpg'],
    direction: 'right'


    
}



class Slideshow1Animation1{
    constructor(picsNames, speed, direction, container){
        this.names = picsNames
        this.pics = [];
        this.pic
        this.len = this.names.length;
        this.dire = direction
        console.log('this.len = ' + this.len)
        this.dur = speed;
        this.v;
        this.width = 0;
        this.num = 0;
        this.i;
        this.move;
        this.container = container
        this.contWi = this.container.offsetWidth

        this.names.forEach((elem) =>{
            this.pic = document.getElementById(elem)
            this.pics.push(document.getElementById(elem))
            console.log('pics.length = ' + this.pics.length)
            if(this.pics.length === this.len){
                console.log('in if')

                this.pics[this.len -1].addEventListener('load', () =>{
                    if(this.dire === 'left'){
                        this.buildLeft();
                    
                    }
                    else if(this.dire === 'right'){
                        this.buildRight();
                    }
                    this.detectChange()

                })
            }

        })
        //this.build();
    }
    detectChange(){
        
        window.addEventListener('resize', () =>{
            if(this.dire === 'left'){
                clearInterval(this.move)
                this.buildLeft();
            
            }
            else if(this.dire === 'right'){
                clearInterval(this.move)
                this.buildRight();
            }
        })
    }
    buildLeft(){
        this.width = 0;
        for(this.i = 0; this.i < this.pics.length; this.i ++){
            this.pics[this.i].style.left = this.width;
            this.width += this.pics[this.i].width;
            this.v = -1    
        }
        this.animateLeft()
    }
    buildRight(){
        
        this.width = this.contWi
        for(this.i = 0; this.i < this.pics.length; this.i ++){
            this.width -= this.pics[this.i].width;
            this.pics[this.i].style.left = this.width;
            this.v = 1

        }
        this.width = 0;
        for(this.i = 0; this.i < this.pics.length; this.i ++){
            this.width += this.pics[this.i].width;
              
        }
        this.animateRight()
    }
    animateLeft(){
        console.log('animate')
        this.move = setInterval(()=>{
            for(this.i = 0; this.i < this.len; this.i ++ ){
                this.pic = this.pics[this.i]
                this.pic.style.left = this.pic.offsetLeft + this.v
                
            }
            if(this.pics[0].offsetLeft <= - this.pics[0].width){
                console.log('in if')
                this.pic = this.pics[0]
                console.log('this.width = ' + this.width)
                this.pic.style.left = this.width + this.pic.offsetLeft
                this.pics.shift();
                this.pics.push(this.pic)
                
            }
            
        }, this.dur)
    }
    animateRight(){
        console.log('animate')
        this.move = setInterval(()=>{
            for(this.i = 0; this.i < this.len; this.i ++ ){
                this.pic = this.pics[this.i]
                this.pic.style.left = this.pic.offsetLeft + this.v
                
            }
            if(this.pics[0].offsetLeft >= this.contWi){
                console.log('in if')
                this.pic = this.pics[0]
                console.log('pic left = '  + ( this.width + this.pic.width))
                this.pic.style.left = -this.width +this.contWi
                this.pics.shift();
                this.pics.push(this.pic)
                
            }
            
        }, this.dur)
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
        console.log(this.len)
        this.animations
        this.direction = this.op.direction
        this.drawPics()
    } 
    drawPics(){
        this.name
        this.i;
        
        for(this.i = 0; this.i < this.len; this.i++){
            this.name = `slidePic_${this.pos}_${this.i}`;
            
            this.container.innerHTML += `<img id = ${this.name} src = '${this.dir + this.pics[this.i]}' style = '
                position: absolute;  ${this.direction}: 0; height: 100%; display: block;' />`
            this.picObjs.push(this.name);
        }
        this.animations = {1: new Slideshow1Animation1(this.picObjs, 20, this.direction, this.container)}
        console.log(this.picObjs)
        
    }
    
    
}
let theSlideShow1 = new Slideshow1(slideshowOptions);