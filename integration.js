
//integration of Menu Button with menuButtonstyle object
let menuButtonStyle = {
    procentualBarHeight: 10,
    barColor: 'white',
    barBorderRadius: true,
    animationDuration: 15
}
let theMenuButton = new MenuButton(menuButtonStyle)

//integration of Plus Button with plusButtonstyle object
let plusButtonStyle = {
    classPositionPlusButton: 0,
    procentualBarHeight: 10,
    barColor: 'red',
    barBorderRadius: true,
    animationDuration: 15,
    animationNum: 1
}
let thePlusButton1 = new PlusButton(plusButtonStyle)

//integration of second Plus Button with plusButtonstyle2 object
let plusButtonStyle2 = {
    classPositionPlusButton: 1,
    procentualBarHeight: 10,
    barColor: 'white',
    barBorderRadius: true,
    animationDuration: 15,
    animationNum: 2
}
let thePlusButton2 = new PlusButton(plusButtonStyle2)