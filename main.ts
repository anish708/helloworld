input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.showString("Now B")
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("....")
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.Happy)
    basic.showString("Shake")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    basic.showString("A+B")
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.showString("Don't flip me")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("B B A G E B F C5 ", 180)
    music.playMelody("A F B G C5 A B G ", 180)
})
basic.showString("Hello!")
basic.showIcon(IconNames.Happy)
basic.showString("Click A")
