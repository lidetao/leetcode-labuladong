/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: _Node | null): number[] {
    const result: number[] = []

    function traverse(root: _Node | null) {
        if (!root) {
            return
        }

        for (const node of root.children) {
            traverse(node)
        }
        result.push(root.val)

    }
    traverse(root)

    return result
};