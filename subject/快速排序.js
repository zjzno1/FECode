let arr = [1,4,2,6,8,31,9,2,7,0,5,2];

// arr.sort((a, b) => a - b);

// 快速排序
function quickSort(arr, left, right) {
    if (left > right) return;
    let tmp = arr[left];
    let i = left;
    let j = right;
    let t;
    while (i < j) {
        while (arr[j] > tmp && i < j) {
            j--;
        }
        while (arr[i] < tmp && i < j) {
            i++;
        }
        if (i < j) {
            t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }
    arr[left] = arr[i];
    arr[i] = temp;
    quickSort(arr, left, i-1);
    quickSort(arr, i+1, right);
    console.log(arr);
}

quickSort(arr, 1, arr.length-1);