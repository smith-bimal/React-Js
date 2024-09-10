function genRandom(n) {
    let arr = new Array(n);
    for (let i=0; i<n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }

    return arr;
}

function sum(arr){
    return arr.reduce((acc, curr) => acc + curr, 0);
}

export {genRandom, sum};