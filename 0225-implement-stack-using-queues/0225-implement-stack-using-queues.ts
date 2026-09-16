class MyStack {
    private queue: number[]
    private topItem: number

    constructor() {
        this.queue = []
    }

    push(x: number): void {
        this.queue.push(x)
        this.topItem = x
    }

    pop(): number {
        let size = this.queue.length
        while (size > 2) {
            this.queue.push(this.queue.shift())
            size--
        }
        const newTop = this.queue.shift()
        this.topItem = newTop
        this.queue.push(newTop)

        return this.queue.shift()
    }

    top(): number {
        return this.topItem
    }

    empty(): boolean {
        return !this.queue.length
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */