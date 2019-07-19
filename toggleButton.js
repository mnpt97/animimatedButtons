class ToggleButtonAnimation1{
    constructor(switcher, pos0,pos1, duration){
        this.switcher = switcher;
        this.pos0 = pos0;
        this.pos1 = pos1;
        this.posX = 0;
        this.on = false;
        this.Interval;
        this.duration = duration
        this.clear = true
    }
    _pos0(){
        this.switcher.style.left = this.pos0 +'px'
    }
    _pos1(){
        this.switcher.style.left = this.pos1 +'px'

    }
    _onAnimation(){
        this.posX += 0.02 * this.pos1;
        this.switcher.style.left = this.pos0 + this.posX

    }
    _offAnimation(){
        this.posX -= 0.02 * this.pos1;
        this.switcher.style.left = this.pos0 + this.posX
    }
    animationCleared(){
        return this.clear;
    }
    getAnimation(on){
        this.on = on;
        console.log('on = ' + this.on)
        if(!this.on){
            this.Interval = setInterval(() =>{
                if(this.posX + this.pos0 >= this.pos1){
                    clearInterval(this.Interval);
                    this.clear = true
                    this._pos1()
                }
                else{
                    console.log(this.posX)
                    this._onAnimation();
                    this.clear = false
                    
                }
                
            }, this.duration)
        }
        else if(this.on){
            this.Interval = setInterval(() =>{
                if(this.posX <= this.pos0){
                    clearInterval(this.Interval)
                    this.clear = true
                    this._pos0()
                }
                else{
                    this._offAnimation();
                    this.clear = false
                }
                
            }, this.duration)
        }
    }
}

class ToggleButton{
    constructor(buttonStyle){
        this.buttonStyle = buttonStyle;
        this.classPos = this.buttonStyle.classPositionToggleButton;
        this.toggle = document.getElementsByClassName('toggleButton')[this.classPos];
        this.switcher = document.getElementsByClassName('toggleButtonSwitch')[this.classPos];
        ; 
        this.position = this.buttonStyle.position;
        this.width = this.toggle.offsetWidth;
        this.height = this.toggle.offsetHeight;
        this.cBorder = this.buttonStyle.borderColor;
        this.cSwitch = this.buttonStyle.switchColor;
        this.round = this.buttonStyle.round;
        this.orientation = this.buttonStyle.turnOrientation;
        this.switchLeft1 = this.height*0.1;
        this.switchLeft2 = this.width - this.height*0.9
        this.on = false,
        this.clear = false;
        this.animations = {1: new ToggleButtonAnimation1(this.switcher, this.switchLeft1, this.switchLeft2, this.duration)}
        this.animation = this.animations[this.buttonStyle.animationNum]
        this._drawToggle()
        this._drawSwitch()
    }

    _drawToggle(){
        this.toggle.style.position = this.position
        this.toggle.style.border = `${this.height * 0.1}px solid ${this.cBorder}`
        if(this.orientation){
            this.toggle.style.transform = 'rotate(90deg)'
        }
        if(this.round){
            this.toggle.style.borderRadius = `${this.height}px`
        }
    }
    _drawSwitch(){
        this.switcher.style.position = 'absolute';
        this.switcher.style.backgroundColor = this.cSwitch
        this.switcher.style.width = `${this.height * 0.8}px`;
        this.switcher.style.height = `${this.height * 0.8}px`
        this.switcher.style.top = `${this.height * 0.1}px`
        this.switcher.style.left = `${this.height * 0.1}px`
        if(this.round){
            this.switcher.style.borderRadius = `${this.height/2}px`
        }
    }

    clicked(){
        console.log('click')
        this.clear = this.animation.animationCleared()
      
        if(this.on && this.clear){
            this.animation.getAnimation(this.on)
            this.on = false;
        }
        else if(!this.on && this.clear){
            this.animation.getAnimation(this.on)
            this.on = true;
        }
    }


}