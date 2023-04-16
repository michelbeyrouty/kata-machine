export default function bubble_sort(arr: number[]): void {

    let temp = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i); j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

}


// Runtime = N(N+1)/2 => O(N^2)
