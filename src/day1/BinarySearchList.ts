export default function bs_list(haystack: number[], needle: number): boolean {

    let low = 0;
    let high = haystack.length;

    while (low < high) {

        const midpoint = Math.floor(low + (high - low) / 2)
        const value = haystack[midpoint]

        if (value === needle) {
            return true
        }

        if (value > needle) {
            high = midpoint
        }

        if (value < needle) {
            low = midpoint + 1
        }

    }

    return false

}


// complexity -> O(log(N))
