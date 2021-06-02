const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

const noK = () => {
    const reallyNoK = []

    for(const removeK of words) {
        if(removeK.startsWith('k') === false) {
        reallyNoK.push(removeK)
         }
    }   
    console.log(reallyNoK.join(" "))

    return reallyNoK
}



noK()

/* console.log(reallyNoK) */

