export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

    return recursiveCompare(a, b)
}


function recursiveCompare(a: BinaryNode<number> | null | undefined, b: BinaryNode<number> | null | undefined): boolean {

    if (!a === null && b === null) {
        return true
    }

    if (a === null || b === null) {
        return false
    }

    if (a?.value !== b?.value) {
        return false
    }

    return recursiveCompare(a?.left, b?.left) && recursiveCompare(a?.right, b?.right)
}
