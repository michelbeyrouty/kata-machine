type Node<T> = {
    value: T,
    previous?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head: Node<T> | undefined

    constructor() {
        this.length = 0
        this.head = undefined
    }

    push(item: T): void {

        const node = {
            value: item
        } as Node<T>

        this.length += 1;

        if (!this.head) {
            this.head = node
            return
        }

        node.previous = this.head
        this.head = node

    }
    pop(): T | undefined {

        this.length = Math.max(0, this.length - 1)

        if (this.length == 0) {
            const head = this.head
            this.head = undefined
            return head?.value
        }

        const head = this.head
        this.head = head?.previous

        return head?.value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}
