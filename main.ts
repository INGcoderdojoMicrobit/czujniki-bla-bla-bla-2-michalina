let dif = 0
let lastP = 0
let D = 0
let P = 0
AlphaBot2.Run(Dir.stop, 0)
basic.pause(100)
AlphaBot2.SensorCalibrated()
basic.forever(function () {
    P = AlphaBot2.readLine() - 2000
    D = P - lastP
    lastP = P
    dif = P / 20 / (D / 5)
    dif = Math.max(dif, -120)
    dif = Math.min(dif, 120)
    if (dif > 0) {
        AlphaBot2.MotorRun(Motors.M1, 0)
        AlphaBot2.MotorRun(Motors.M2, 120 - dif)
    } else {
        AlphaBot2.MotorRun(Motors.M1, 120 + dif)
        AlphaBot2.MotorRun(Motors.M2, 0)
    }
})
