radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        KSB037.stop()
        basic.showNumber(0)
    }
    if (receivedNumber == 5) {
        KSB037.foreward(1000)
        basic.showNumber(5)
    }
    if (receivedNumber == 6) {
        KSB037.foreward(500)
        basic.showNumber(6)
    }
    if (receivedNumber == 7) {
        KSB037.backward(500)
        basic.showNumber(7)
    }
    if (receivedNumber == 8) {
        KSB037.backward(1000)
        basic.showNumber(8)
    }
    if (receivedNumber == 1) {
        KSB037.leftward(1000)
        basic.showNumber(1)
    }
    if (receivedNumber == 2) {
        KSB037.leftward(500)
        basic.showNumber(2)
    }
    if (receivedNumber == 3) {
        KSB037.rightward(500)
        basic.showNumber(3)
    }
    if (receivedNumber == 4) {
        KSB037.rightward(1000)
        basic.showNumber(4)
    }
})
radio.setGroup(20)
