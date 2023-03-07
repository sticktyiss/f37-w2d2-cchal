const arr1 = [1, 4, 11, 2, 37, -4]
const arr2 = [0, 21, 33, 6, 0, -9]
const arr3 = [0, 1, 2, 3, 4, 5]

addToZero = arr => {
    let addZero = false
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++){
            if (arr[i]+arr[j]===0){
                addZero = true
            }
        }
    }
    console.log(`The array turned out to be ${addZero}`)
}

addToZero(arr1)
addToZero(arr2)
addToZero(arr3)