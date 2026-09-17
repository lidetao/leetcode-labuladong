/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */


function levelOrder(root: _Node | null): number[][] {
    const result: number[][] = []

    const queue: _Node[] = [root]
    let depth = 0

    while (queue.length) {
        const levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()
            if (!node) {
                continue
            }

            if (!result[depth]) {
                result[depth] = []
            }
            result[depth].push(node.val)

            queue.push(...node.children)
        }
        depth++
    }

    return result
};