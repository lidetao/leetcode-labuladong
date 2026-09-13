class MyCircularQueue {
    private readonly size: number
    private readonly queue: number[]
    private start: number
    private end: number
    private count: number

    constructor(k: number) {
        this.size = k
        this.queue = new Array(k)

        this.start = 0
        this.end = 0
        this.count = 0
    }

    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false
        }

        this.queue[this.end] = value
        this.end = (this.end + 1) % this.size
        this.count++
        return true
    }

    deQueue(): boolean {
        if (this.isEmpty()) {
            return false
        }

        this.queue[this.start] = null
        this.start = (this.start + 1) % this.size
        this.count--
        return true
    }

    Front(): number {
        return this.queue[this.start] ?? -1
    }

    Rear(): number {
        return this.queue[(this.end - 1 + this.size) % this.size] ?? -1
    }

    isEmpty(): boolean {
        return this.count <= 0
    }

    isFull(): boolean {
        return this.count >= this.size
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */