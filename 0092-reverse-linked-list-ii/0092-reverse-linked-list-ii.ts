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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const dummy = new ListNode(-1)
    dummy.next = head

    let p1 = dummy
    for (let i = 1; i < left; i++) {
        p1 = p1.next
    }

    const subHead = reverseK_it(p1.next, right - left + 1)
    p1.next = subHead

    return dummy.next
};

function reverseK_it(head: ListNode | null, k: number): ListNode | null {
    let p_old = head
    let p_new = null
    let new_end = null
    for (let i = 1; i <= k; i++) {
        let temp = p_old.next
        p_old.next = p_new
        p_new = p_old

        if (new_end === null) {
            new_end = p_new
        }

        p_old = temp
    }

    if (p_old !== null) {
        new_end.next = p_old
    }

    return p_new
}

function reverseK_rec(head: ListNode | null, k: number): ListNode | null {
    return head
}