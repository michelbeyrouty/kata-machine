export default function dfs(head: BinaryNode<number>, needle: number): boolean {

    return recursiveFind(head, needle)
}


function recursiveFind(current: BinaryNode<number> | null, needle: number): boolean {

    if (current === null) {
        return false
    }

    if (current.value == needle) {
        return true
    }

    if (current.value <= needle) {
        return recursiveFind(current.right, needle)
    }

    return recursiveFind(current.left, needle)
}
