const arrayOfNumbers: Array<number> = [1,1,2,3,5]
const arrayOfStrings: Array<string> = ['Hello','Bael']


const reverse<T>(array:T[]):T[]{
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)