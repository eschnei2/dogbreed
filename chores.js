const person = {
    firstName: "Donald",
    lastName: "McLelland"
}

const choreboy1 = boy =>
 `${boy.firstName} ${boy.lastName} mowed the lawn`

 const choreboy2 = boy =>
 `${boy.firstName} ${boy.lastName} ate a sandwich`

 const choreboy3 = boy =>
 `${boy.firstName} ${boy.lastName} tied some shoes`

 const choreboy4 = boy =>
 `${boy.firstName} ${boy.lastName} took a nap`

 const choreboy5 = boy =>
 `${boy.firstName} ${boy.lastName} washed the dishes`

 const choreboy6 = boy =>
 `${boy.firstName} ${boy.lastName} fixed his life`

 const pickChores = (first, second, third) => {
     const pickedChores = [first, second, third]
     return pickedChores
 }
 
const dayOne = pickChores(choreboy1(person), choreboy2(person), choreboy3(person))

/* console.log(dayOne) */
const newDay = "Tuesday"

const dayPlanner = (firstChore, secondChore, thirdChore, boy, day) => {
    const dayPlanner = (`On ${day}, ${firstChore(boy)}, and ${secondChore(boy)}, and ${thirdChore(boy)}`)
    return dayPlanner


}

console.log(dayPlanner(choreboy1, choreboy2, choreboy3, person, newDay))
