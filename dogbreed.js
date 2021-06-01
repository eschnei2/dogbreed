const dogbreed = (breed) => {
    if (breed === "schnauzer") {
         return (`My favroite dog breed is ${breed}`)
    } else if (breed === "meow") {
        return ("I like cats")
    }
}

const myFavorite = dogbreed("schnauzer")

console.log(`When it comes to pets, ${myFavorite}`)