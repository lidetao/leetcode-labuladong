function minWindow(s: string, t: string): string {
    // return minWindow_normal(s, t)
    return minWindow_slide(s, t)
};

/**
 * O(M+N)
 */
function minWindow_slide(s: string, t: string): string {
    const need = new Map<string, number>()
    const sLen = s.length
    for (let i = 0; i < t.length; i++) {
        const ch = t.charAt(i)
        const count = need.get(ch) || 0
        need.set(ch, count + 1)
    }

    let start = 0
    let minLen = Number.MAX_SAFE_INTEGER
    let curWin = new Map<string, number>()
    let valid = 0

    let left = 0
    let right = 0
    while (right < sLen) {
        // 扩大窗口
        const ch1 = s.charAt(right)
        right++

        if (need.has(ch1)) {
            // 更新当前窗口数据
            let count = curWin.get(ch1) || 0
            curWin.set(ch1, count + 1)
            if (curWin.get(ch1) === need.get(ch1)) {
                valid++
            }
        }

        while (valid === need.size) {
            if (right - left < minLen) {
                start = left
                minLen = right - left
            }

            // 缩小窗口
            const ch2 = s.charAt(left)
            left++

            if (need.has(ch2)) {
                // 缩小当前窗口数据
                if (need.get(ch2) === curWin.get(ch2)) {
                    valid--
                }

                let count = curWin.get(ch2)
                curWin.set(ch2, count - 1)
            }

        }

    }

    return minLen === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, minLen)
}

/**
 * O(N^2)
 */
function minWindow_normal(s: string, t: string): string {
    const need = new Map<string, number>()
    const sLen = s.length
    for (let i = 0; i < t.length; i++) {
        const ch = t.charAt(i)
        const count = need.get(ch) || 0
        need.set(ch, count + 1)
    }

    let start = 0
    let minLen = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < sLen; i++) {
        let starCh = s.charAt(i)
        if (!need.has(starCh)) {
            continue
        }

        let validate = 0
        let curWin = new Map<string, number>()
        for (let j = i; j < sLen + 1; j++) {
            if (validate === need.size) {
                if (j - i < minLen) {
                    start = i
                    minLen = j - i
                }
                break
            }

            const ch = s.charAt(j)
            if (need.has(ch)) {
                let count = curWin.get(ch) || 0
                curWin.set(ch, count + 1)
                if (curWin.get(ch) === need.get(ch)) {
                    validate++
                }
            }
        }
    }

    return minLen === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, minLen)
}