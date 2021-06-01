const evenOrOdd = (roll) => {
    if (roll%2 === 0) {
        console.log("Even")
    }else {
        console.log("Odd")
    }
}

const rNums = [5, 3, 2, 1000, 34553, 0, 5]

evenOrOdd(5)
evenOrOdd(0)

for (const rNum of rNums) {
    evenOrOdd(rNum)
}