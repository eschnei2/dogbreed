const order = (sandwich, side, drink, dessert) => {
    const fullOrder = {
        sandwich: "new sammich",
        side: "new side",
        drink: "new drink",
        dessert: "new dessert"
    }
    fullOrder.sandwich = sandwich
    fullOrder.side = side
    fullOrder.drink = drink
    fullOrder.dessert = dessert

    /* console.log(fullOrder) */
    return fullOrder
}


newOrder = order("Chicken Sammie", "Rice", "horchota", "banana")

console.log(newOrder)

git