export default function pre_order_search(head: BinaryNode<number>): number[] {

    return walk(head, [])

}

function walk(current: BinaryNode<number> | null, path: number[]): number[] {

    if (!current) {
        return path;
    }

    // pre-recurse
    path.push(current.value)

    // recurse
    walk(current.left, path)
    walk(current.right, path)

    // post-recurse
    return path
}


// Called DepthFirstSerach
// O(N)
