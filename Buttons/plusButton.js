class PlusButtonAnimation1{
    constructor(bars, duration){
        this.Interval;
        this.degree = 0;
        this.bars = bars;
        this.clear = true
        this.duration = duration
    }
    closeButton(){
        this.clear = false
        this.Interval = setInterval(()=>{
            this.degree -= 3;
            this.bars[0].style.transform = `rotate(${this.degree}deg)`
            if(this.degree >= 90){
                this.bars[1].style.transform = `rotate(${this.degree}deg)`
            }
            if(this.degree <= 0){
                this.clear = true
                clearInterval(this.Interval)
            }
        }, this.duration)
    }
    openButton(){
        this.clear = false
        this.Interval = setInterval(()=>{
            this.degree += 3;
            this.bars[0].style.transform = `rotate(${this.degree}deg)`
            if(this.degree >= 90){
                this.bars[1].style.transform = `rotate(${this.degree}deg)`
            }
            if(this.degree >= 180){
                this.clear = true
                clearInterval(this.Interval)
            }
        }, this.duration)
    }
    getClear(){
        return this.clear
    }
}

class PlusButtonAnimation2{
    constructor(bars, duration){
        this.Interval;
        this.degree = 90;
        this.bars = bars;
        this.clear = true
        this.duration = duration
    }
    closeButton(){
        this.clear = false
        this.Interval = setInterval(()=>{
            this.degree -= 3;
            this.bars[1].style.transform = `rotate(${this.degree}deg)`
            if(this.degree <= 90){
                this.clear = true
                clearInterval(this.Interval)
            }
        }, this.duration)
    }
    openButton(){
        this.clear = false
        this.Interval = setInterval(()=>{
            this.degree += 3;
            this.bars[1].style.transform = `rotate(${this.degree}deg)`
            if(this.degree >= 180){
                this.clear = true
                clearInterval(this.Interval)
            }
        }, this.duration)
        
    }
    getClear(){
        return this.clear
    }
}
class PlusButton{
    constructor(buttonStyle){
        this.buttonStyle = buttonStyle;
        this.num = this.buttonStyle.classPositionPlusButton
        this.plusButton = document.getElementsByClassName('plusButton')[this.num];
        this.bars = [document.getElementsByClassName('plusButtonBar')[this.num * 2], document.getElementsByClassName('plusButtonBar')[this.num * 2 + 1]];
        this.animationNum = this.buttonStyle.animationNum;
        this.open = false
        this.butHeight = this.plusButton.offsetHeight;
        this.barHe = this.butHeight * (this.buttonStyle.procentualBarHeight/100)
        this.c = this.buttonStyle.barColor;
        this.round = this.buttonStyle.round;
        this.clear = true
        this.i
        this.duration = this.buttonStyle.animationDuration;
        this.rotateClose = {bar1: 0, bar2: 90};
        this.topClose = this.butHeight/2 - this.barHe/2
        this.degree = 0;
        this.Interval;
        this.styleButton()
        this.bar();
        this.drawBar();
        this.animations = {1: new PlusButtonAnimation1(this.bars, this.duration), 
            2: new PlusButtonAnimation2(this.bars, this.duration)}
        this.animation = this.animations[this.animationNum]
    }
    styleButton(){
        this.plusButton.style.position = this.buttonStyle.position
        if(this.round){
            this.plusButton.style.borderRadius = this.butHeight + 'px'
            this.plusButton.style.borderStyle = 'solid';
            this.plusButton.style.borderColor = this.c;
            this.plusButton.style.borderWidth = this.barHe +'px';

        }
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
        this.bars[0].style.top = this.topClose + 'px';
        this.bars[0].style.zIndex = 1
        this.bars[0].style.transform = `rotate(${this.rotateClose.bar1}deg)`
        this.bars[1].style.top = this.topClose+ 'px';
        this.bars[1].style.zIndex = 2
        this.bars[1].style.transform = `rotate(${this.rotateClose.bar2}deg)`
    }
    clicked(){
        this.clear = this.animation.getClear()
        if(this.open && this.clear){
            this.open = !this.open;
            this.animation.closeButton()
        }
        else if(!this.open && this.clear){
            this.open = !this.open;
            this.animation.openButton()
        }
    }
}