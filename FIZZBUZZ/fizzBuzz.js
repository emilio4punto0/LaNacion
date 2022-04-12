const arrayInts = Array.from(Array(60).keys())

const fizzBuzzFunc = arrayInts.map((numToCheck, index)=>{

    const divisible = (divisor, number) => number % divisor == 0
    const numbersInclude = (numsToCheck, number) => numsToCheck.toString().split('').some(x => x == number)

    const fizzBuzz = divisible(3, numToCheck) && divisible(5, numToCheck)
    const fizz = divisible(3, numToCheck) || numbersInclude(numToCheck, 3)
    const buzz = divisible(5, numToCheck) || numbersInclude(numToCheck, 5)

    switch (true) {

        case fizzBuzz:
        return {fizzBuzz: numToCheck}

        case fizz:
        return {fizz: numToCheck}

        case buzz:
        return {buzz: numToCheck}    
            
        default:
        return {justNumber: numToCheck}
    }
})

console.log(fizzBuzzFunc, "fizbuzz")