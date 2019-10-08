let slideshowOptionsButtons = {
    classname: 'slideshowWButtons',
    // position of the HTML class name
    position: 0,
    directory : 'slideshowPics/',
    pics : ['slide1.jpg', 'slide2.png', 'slide3.jpg', 'slide4.jpg'],
    //direction: portrait or landscape
    direction: 'landscape'
}

function isTouchDevice(){
    return typeof window.ontouchstart !== 'undefined';
}
class SwipeDetection{
    constuctor(swipeBox, ){
        this.sB = swipeBox;
        this.sB.addEventListener('touchstart', () =>{

        })

    }
}

class SlideshowWithButtons{
    constructor(options){
        this.op = options;
        this.fol = this.op.directory;
        this.dir = this.op.direction;
        this.pics = this.op.pics;
        this.ref;
        this.sClass = document.getElementsByClassName(this.op.classname)[this.op.position]
        this.imgpos = 0;

        switch (this.dir) {
            case 'landscape':
                this.ref = 'height'
                break;
        
            case 'portrait':
                this.ref = 'height'
                break;
            default:
                this.ref = 'width';
        }
        this.touch = isTouchDevice()
        this.loadPics()

    }
    loadPics(){
        console.log(this.touch);
        this.pics.forEach(pic => {
            this.sClass.innerHTML += `<img src = ${this.fol + pic} style = '${this.ref}: 100%; float: left; position: absolute; align: middle;display: block'>`
        });

    }
}


let swb = new SlideshowWithButtons(slideshowOptionsButtons)

