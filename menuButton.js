class MenuButton{
    constructor(buttonStyle){
        this.buttonStyle = buttonStyle;
        this.menuButton = document.getElementById('menuButton');
        this.bars = document.getElementsByClassName('menuButtonBar');
        this.open = false
        this.butHeight = menuButton.offsetHeight;
        this.barHe = this.butHeight * (this.buttonStyle.procentualBarHeight/100)
        this.c = this.buttonStyle.barColor;
        this.animation = false
        this.i
        this.duration = menuButtonStyle.animationDuration;
        this.topClose = {bar1: 0, bar2: this.butHeight/2 - this.barHe/2, bar3: this.butHeight - this.barHe};
        this.degree = 0;
        this.Interval;
        this.styleButton()
        this.bar();
        this.drawBar();
    }
    styleButton(){
        this.menuButton.style.position = 'relative'
    }
    bar(){
        for(this.i = 0; this.i < this.bars.length; this.i++){
            this.bars[this.i].style.height = this.barHe + 'px'
            this.bars[this.i].style.width = '100%'
            this.bars[this.i].style.backgroundColor = this.c
            this.bars[this.i].style.position = 'absolute'
            if(this.buttonStyle.barBorderRadius){
                this.bars[this.i].style.borderRadius = this.barHe +'px'
            }
        }
    }
    drawBar(){
        this.bars[0].style.top = this.topClose.bar1 + 'px';
        this.bars[0].style.zIndex = 1
        this.bars[1].style.top = this.topClose.bar2 + 'px';
        this.bars[1].style.zIndex = 2
        this.bars[2].style.top = this.topClose.bar3 + 'px';
        this.bars[2].style.zIndex = 3

    }
    openButton(){
        if(this.bars[0].offsetTop <= this.topClose.bar2 || this.bars[2].offsetTop >= this.topClose.bar2){
            this.bars[0].style.top = this.bars[0].offsetTop + 2 +'px'
            this.bars[2].style.top = this.bars[2].offsetTop -2 +'px'
        }

        else if(this.degree <= 45){
            this.bars[2].style.backgroundColor = 'rgba(0,0,0,0)'           
            this.bars[0].style.transform = `rotate(${this.degree}deg)`
            this.bars[1].style.transform = `rotate(${-this.degree}deg)`
            this.degree += 3
        }   
        else{clearInterval(this.Interval)
            this.animation = false
        }
    }
    closeButton(){

        if(this.degree >= 0){
            this.bars[0].style.transform = `rotate(${this.degree}deg)`
            this.bars[1].style.transform = `rotate(${-this.degree}deg)`
            this.bars[2].style.transform = `rotate(${-this.degree}deg)`
            this.degree -= 3
        }
        else if(this.bars[0].offsetTop-1 >= this.topClose.bar1 || this.bars[2].offsetTop <= this.topClose.bar3-1){
            this.bars[2].style.backgroundColor = this.c
            this.bars[0].style.top = this.bars[0].offsetTop - 2 +'px'
            this.bars[2].style.top = this.bars[2].offsetTop + 2 +'px'
        }
        
        else{clearInterval(this.Interval)
            this.animation = false;
        }
    }
    clicked(){
        if(this.open && !this.animation){
            this.animation = true
            this.Interval = setInterval(() =>{
                this.closeButton()
            }, this.duration)
            this.open = false;
        }
        else if(!this.open && !this.animation){
            this.animation = true
            this.Interval = setInterval(() =>{
                this.openButton()
            }, this.duration)
            this.open = true;

        }
    }

}
