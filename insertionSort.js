function InsertionSort(...Array) {
    for (let j = 1;j < Array.length ; j++){
        let key = Array[j];
        let i = j-1;
        while(i>=0 && Array[i]> key){
            Array[i+1] = Array[i];
            i--;
        }
        Array[i+1] = key;
    }
    console.log(Array);
}
InsertionSort(5,4,3,2,1);