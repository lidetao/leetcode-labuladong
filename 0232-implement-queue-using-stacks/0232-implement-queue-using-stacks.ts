class MyQueue {
    private stackIn: number[]
    private stackOut: number[]

    constructor() {
        this.stackIn = []
        this.stackOut = []
    }

    push(x: number): void {
        this.stackIn.push(x)
    }

    pop(): number {
        this.peek()
        return this.stackOut.pop()
    }

    peek(): number {
        if (!this.stackOut.length) {
            while (!!this.stackIn.length) {
                this.stackOut.push(this.stackIn.pop())
            }
        }
        return this.stackOut[this.stackOut.length - 1]
    }

    empty(): boolean {
        return !this.stackIn.length && !this.stackOut.length
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */