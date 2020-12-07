
export function randomArray(len, n) {

    // Skapa en ny tom array av längd len
    const a = new Array(len)

    // Fyll varje plats i arrayen med ett random heltal
    for (let i = 0; i < a.length; i++) {
        a[i] = randomInt(n)
    }

    return a
}

function randomInt(n) {
    return Math.floor(Math.random() * (n + 1))
}

    const array1 =[5, 8, 10, 9]
    const array2 =[1, 2, 3, 4]
    const array3 =[5, 6, 7, 8]

export function swap(arr, arr1, arr2) {
    let temp = arr[arr1]
    arr[arr1] = arr[arr2]
    arr[arr2] = temp
    console.log(arr)
}

swap(array3, 1, 3)
swap(array1, 1, 3)
swap(array2, 1, 3)