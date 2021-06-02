const fish = () => {
    const roll = Math.random() * 2
    const fixed = roll.toFixed(0)

    if (fixed != 1  && fixed != 2) {
        console.log("Sven hooked a tuna!  :)")
        console.log(fixed)
    } else {
        console.log("Sven came up empty-handed.  :( ")
        console.log(fixed)
    }

}

fish()