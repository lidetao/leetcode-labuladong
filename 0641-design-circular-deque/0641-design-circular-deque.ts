class MyCircularDeque {
    private readonly size: number
    private readonly deque: number[]
    private start: number
    private end: number
    private count: number

    constructor(k: number) {
        this.size = k
        this.deque = new Array(k)

        this.start = 0
        this.end = 0
        this.count = 0
    }

    insertFront(value: number): boolean {
        if (this.isFull()) {
            return false
        }

        let newStart = (this.start - 1 + this.size) % this.size
        this.deque[newStart] = value
        this.start = newStart
        this.count++
        return true
    }

    insertLast(value: number): boolean {
        if (this.isFull()) {
            return false
        }

        this.deque[this.end] = value
        this.end = (this.end + 1) % this.size
        this.count++
        return true
    }

    deleteFront(): boolean {
        if (this.isEmpty()) {
            return false
        }

        this.deque[this.start] = null
        this.start = (this.start + 1) % this.size
        this.count--
        return true
    }

    deleteLast(): boolean {
        if (this.isEmpty()) {
            return false
        }

        let endIndex = (this.end - 1 + this.size) % this.size
        this.deque[endIndex] = null
        this.end = endIndex
        this.count--
        return true
    }

    getFront(): number {
        return this.deque[this.start] ?? -1
    }

    getRear(): number {
        return this.deque[(this.end - 1 + this.size) % this.size] ?? -1
    }

    isEmpty(): boolean {
        return this.count <= 0
    }

    isFull(): boolean {
        return this.count >= this.size
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */