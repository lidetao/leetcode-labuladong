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

function levelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = []
    let levelNodes: TreeNode[] = [root]

    while (!!levelNodes.length) {
        const levelResult: number[] = []
        const newLevelNodes: TreeNode[] = []
        for (const node of levelNodes) {
            if (!node) {
                continue
            }
            levelResult.push(node.val)
            newLevelNodes.push(node.left)
            newLevelNodes.push(node.right)
        }
        levelResult.length && result.push(levelResult)
        levelNodes = newLevelNodes
    }

    return result
};