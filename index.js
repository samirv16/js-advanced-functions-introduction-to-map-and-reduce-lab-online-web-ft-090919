function mapToNegativize(arr) {
    let newArr = []
    for ( let i = 0; i < arr.length; i++ ) {
        newArr.push(arr[i] * -1)
    }
    return newArr
}

function mapToNoChange(arr) {
    let newArr = []
    for ( let i = 0; i < arr.length; i++ ) {
        newArr.push(arr[i])
    }
    return newArr
}

function mapToDouble(arr) {
    let newArr = []
    for ( let i = 0; i < arr.length; i++ ) {
        newArr.push(arr[i] * 2)
    }
    return newArr
}

function mapToSquare(arr) {
    let newArr = []
    for ( let i = 0; i < arr.length; i++ ) {
        newArr.push(arr[i] ** 2)
    }
    return newArr
}

function reduceToTotal(arr, start = 0) {
    let total = start
    for ( let i = 0; i < arr.length; i++ ) {
        total += arr[i]
    }
    return total
}

function reduceToAllTrue(arr) {
    let result
    for ( let i = 0; i < arr.length; i++ ) {
        if (arr[i]) {
            result = true
        } else {
            result = false
        }
    }
    return result
}

function reduceToAnyTrue(arr) {
    let result
    for ( let i = 0; i < arr.length; i++ ) {
        if (!arr[i]){
            result = false
        } else {
            result = true 
        }
    }
    return result 
}