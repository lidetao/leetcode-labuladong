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

function reverseList(head: ListNode | null): ListNode | null {
    // return reverseList_it(head)
    return reverseList_rec(head)
};

/**
* 迭代法
*/
function reverseList_it(head: ListNode | null): ListNode | null {
    let p_old = head
    let p_new = null

    while (p_old !== null) {
        const temp = p_old.next

        p_old.next = p_new
        p_new = p_old

        p_old = temp
    }

    return p_new
}

/**
* 递归法
 */
function reverseList_rec(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head
    }

    const newHead = reverseList_rec(head.next)
    head.next.next = head
    head.next = null

    return newHead
}