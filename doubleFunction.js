const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

const noK = (arr) => {
    const reallyNoK = []

    for(const removeK of arr) {
        if(removeK.startsWith('k') === false) {
        reallyNoK.push(removeK)
         }
    }   
     /* console.log(reallyNoK.join(" "))  */

    return reallyNoK
}


const noneK = noK(words)

/* console.log(noneK) */

const arrJoin = (arr) => {
     const joinArr = arr.join(" ")
    /* console.log(arr) */

    return joinArr
}

const project = arrJoin(noneK)

console.log(project)



