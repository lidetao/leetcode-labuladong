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

function swapPairs(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head
    }

    let p1 = head
    let newHead = null
    let p2 = head
    while (p1 !== null && p1.next !== null) {
        console.log('ldt-debug:', p1.val)
        const temp = p1.next.next
        if (newHead === null) {
            newHead = p1.next
        } else {
            p2.next = p1.next
            p2 = p1
        }
        p1.next.next = p1
        p1.next = temp
        p1 = temp
    }
    return newHead
};