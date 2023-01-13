input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.showString("Now B")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    basic.showString("A+B")
})
input.onGesture(Gesture.TiltRight, function () {
    music.playMelody("C5 B A A G G A B ", 120)
})
basic.showString("Hello!")
basic.showIcon(IconNames.Happy)
basic.showString("Click A")
