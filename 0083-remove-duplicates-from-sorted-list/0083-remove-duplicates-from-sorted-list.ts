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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let slow = head
    let fast = head
    while (fast !== null) {
        if (slow.val !== fast.val) {
            slow.next = fast
            slow = slow.next
        }
        fast = fast.next
    }
    if (slow !== null && slow.next !== null) {
        slow.next = null
    }

    return head
};