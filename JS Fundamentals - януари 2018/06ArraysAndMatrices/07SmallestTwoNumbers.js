function 07(arr) {
    console.log(arr.sort((a,b) => a-b)
        .slice(0,2));
}
arr = [100,200,3000,4,5,6,1];
07(arr);