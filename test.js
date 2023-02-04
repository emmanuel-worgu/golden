const site = 'plantonicextrade.com'
let arr = [];

arr = site.split('');
let newarr
let index

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])

    if (arr[i] === '.') {
        // console.log(i)

        index = i;
    }
}

newarr = arr.splice(0, index);
console.log(newarr.join('').toUpperCase());