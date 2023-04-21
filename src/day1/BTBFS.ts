export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    const q = [head];

    while (q.length) {
        if (needle === q.shift()?.value) {
            return true
        }

        if (head.left) {
            q.push(head.left)
        }
        if (head.right) {
            q.push(head.right)
        }
    }

    return false
}


// You can't do bfs in recursive because it follows a queue approach
// In fact stack preserves shape, stack ==> recursion
