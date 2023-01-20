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
basic.showString("Hello!")
basic.showIcon(IconNames.Happy)
basic.showString("Click A")
