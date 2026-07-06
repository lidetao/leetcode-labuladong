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
    return reverseList_it(head)
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