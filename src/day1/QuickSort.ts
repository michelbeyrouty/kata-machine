export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1)
}


function qs(arr: number[], lo: number, hi: number): void {

    if (lo >= hi) {
        return;
    }

    const pivot = partition(arr, lo, hi);

    qs(arr, lo, pivot - 1);
    qs(arr, pivot + 1, hi)

}

function partition(arr: number[], lo: number, hi: number): number {

    const pivot = arr[hi]; // Choose at random

    let index = lo - 1;

    for (let i = lo; i < hi; ++i) {

        if (arr[i] <= pivot) {
            index++;
            const temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }

    index++;
    arr[hi] = arr[index];
    arr[index] = pivot;

    return index;
}


// Runtime = O(nlogn)
