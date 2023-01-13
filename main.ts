input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.showString("B")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    basic.showString("A+B")
})
basic.showIcon(IconNames.Happy)
