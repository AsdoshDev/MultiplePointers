
function averagePair(arr, target) {
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let average = (arr[start] + arr[end]) / 2;
        if (average === target)
            return true;
        else if (average > target)
            end--;
        else if (average < target)
            start++;
    }
    return false;
}
