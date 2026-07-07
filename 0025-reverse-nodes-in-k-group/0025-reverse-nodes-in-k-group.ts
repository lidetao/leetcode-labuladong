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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let p1 = head
    let newHead = null
    let p2 = head

    while (p1 !== null) {
        let isFullK = true
        let p1k = p1
        for (let i = 0; i < k; i++) {
            if (p1k !== null) {
                p1k = p1k.next
            } else {
                isFullK = false
                break
            }
        }

        let groupHead = p1
        let groupEnd = null
        if (isFullK) {
            const [p1head, p1end] = reverseK(p1, k)
            groupHead = p1head
            groupEnd = p1end
            p1 = p1end.next
        } else {
            p1 = null
        }

        if (newHead === null) {
            newHead = groupHead
        } else {
            p2.next = groupHead
        }
        p2 = groupEnd
    }

    return newHead
};

function reverseK(head: ListNode | null, k: number): [ListNode, ListNode] {
    let p1 = head
    let newLink = null
    for (let i = 0; i < k; i++) {
        const temp = p1.next

        p1.next = newLink
        newLink = p1
        p1 = temp
    }

    head.next = p1

    return [newLink, head]
}