/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    const leftDepth = minDepth(root.left)
    const rightDepth = minDepth(root.right)

    let childrenDepth = 0
    if (leftDepth > 0 && rightDepth > 0) {
        childrenDepth = Math.min(leftDepth, rightDepth)
    } else {
        childrenDepth = leftDepth || rightDepth
    }

    return childrenDepth + 1
};