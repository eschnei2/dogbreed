const go = (dir, speed) => {
    console.log(`The car is moving ${dir} at ${speed} mph`)

    if (speed > 75){
        console.log("SLOW DOWN!")
    }

}


go("up", 3)