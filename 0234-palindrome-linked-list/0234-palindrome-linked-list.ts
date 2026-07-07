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

function isPalindrome(head: ListNode | null): boolean {
    const stack = new Array<number>()

    let fast = head
    let slow = head
    while (fast !== null && fast.next !== null) {
        stack.push(slow.val)
        slow = slow.next
        fast = fast.next.next
    }

    //判断链表总数为奇数还是偶数个
    if (fast !== null) {
        slow = slow.next
    }

    while (slow !== null) {
        if (slow.val !== stack.pop()) {
            return false
        }
        slow = slow.next
    }

    return true
};