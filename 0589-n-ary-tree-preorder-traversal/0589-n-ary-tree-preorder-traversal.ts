/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 * 
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */


function preorder(root: _Node | null): number[] {
    const result: number[] = []

    function traverse(root: _Node | null) {
        if (!root) {
            return
        }

        result.push(root.val)
        for (const node of root.children) {
            traverse(node)
        }

    }
    traverse(root)

    return result
};