export default class MinHeap {
    public length: number;
    private data: number[];


    constructor() {
        this.data = [];
        this.length = 0
    }

    insert(value: number): void {
        this.data[this.length] = value
        this.heapifyUp(this.length)

        this.length++;
    }

    delete(): number {

        if (this.length === 0) {
            return -1
        }

        const value = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return value
        }

        this.data[0] = this.data[this.length]
        this.heapifyDown(0)
        return value
    }

    private parent(index: number): number {
        return Math.floor((index - 1) / 2)
    }

    private leftChild(index: number): number {
        return index * 2 + 1
    }

    private rightChild(index: number): number {
        return index * 2 + 2
    }

    private heapifyDown(index: number) {

        const Lindex = this.leftChild(index);
        const Rindex = this.rightChild(index)

        if (index >= this.length || Lindex >= this.length) {
            return
        }

        const value = this.data[index]
        const Lvalue = this.data[Lindex];
        const Rvalue = this.data[Rindex];

        if (Lvalue > Rvalue && value > Rvalue) {
            this.data[index] = Rvalue;
            this.data[Rindex] = value;
            this.heapifyDown(Rindex)
        }

        if (Rvalue > Lvalue && value > Lvalue) {
            this.data[index] = Lvalue;
            this.data[Lindex] = value;
            this.heapifyDown(Lindex)
        }

    }

    private heapifyUp(index: number): void {

        if (index === 0) {
            return
        }

        const p = this.parent(index)
        const pv = this.data[p]
        const v = this.data[index]

        if (pv > v) {
            this.data[index] = pv
            this.data[p] = v
            this.heapifyUp(p)
        }
    }
}
