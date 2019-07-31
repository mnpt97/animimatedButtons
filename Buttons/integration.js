
//integration of Menu Button with menuButtonstyle object
let menuButtonStyle = {
    procentualBarHeight: 10,
    position: 'relative',
    barColor: 'white',
    barBorderRadius: true,
    animationDuration: 15
}
let theMenuButton = new MenuButton(menuButtonStyle)

//integration of Plus Button with plusButtonstyle object
let plusButtonStyle = {
    classPositionPlusButton: 0,
    position: 'relative',
    procentualBarHeight: 10,
    barColor: 'red',
    barBorderRadius: true,
    animationDuration: 15,
    animationNum: 1,
    round: false
}
let thePlusButton1 = new PlusButton(plusButtonStyle)

//integration of second Plus Button with plusButtonstyle2 object
let plusButtonStyle2 = {
    classPositionPlusButton: 1,
    position: 'relative',
    procentualBarHeight: 10,
    barColor: 'white',
    barBorderRadius: false,
    animationDuration: 15,
    animationNum: 2,
    round: true
}
let thePlusButton2 = new PlusButton(plusButtonStyle2)

let toggleButtonStyle1 = {
    classPositionToggleButton : 0,
    position : 'relative', 
    borderColor: 'white',
    switchColor: 'white',
    round : true,
    animationDuration : 100,
    turnOrientation : false,
    animationNum : 1
    
}

let theToggleButton1 = new ToggleButton(toggleButtonStyle1)



