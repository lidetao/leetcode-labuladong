/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const stack1 = new Array<number>()
    const stack2 = new Array<number>()

    let p1 = l1
    while (p1 !== null) {
        stack1.push(p1.val)
        p1 = p1.next
    }

    let p2 = l2
    while (p2 !== null) {
        stack2.push(p2.val)
        p2 = p2.next
    }

    const result = new ListNode(-1)
    let prevNum = 0
    while (stack1.length > 0 || stack2.length > 0) {
        let total = (stack1.pop() || 0) + (stack2.pop() || 0) + prevNum

        prevNum = total >= 10 ? 1 : 0
        total %= 10

        const newNode = new ListNode(total)
        newNode.next = result.next
        result.next = newNode
    }

    if (prevNum > 0) {
        const newNode = new ListNode(prevNum)
        newNode.next = result.next
        result.next = newNode
    }

    return result.next
};