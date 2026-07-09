function checkInclusion(s1: string, s2: string): boolean {
    const need = new Map<string, number>()
    for (let i = 0; i < s1.length; i++) {
        const ch = s1.charAt(i)
        const count = need.get(ch) || 0
        need.set(ch, count + 1)
    }

    console.log('ldt-debug:', need)

    const curWin = new Map<string, number>()
    let valid = 0

    let right = 0
    let left = 0
    while (right < s2.length) {
        const ch1 = s2.charAt(right)
        right++

        if (need.has(ch1)) {
            const count = curWin.get(ch1) || 0
            curWin.set(ch1, count + 1)
            if (curWin.get(ch1) === need.get(ch1)) {
                valid++
            }
        }

        while (right - left >= s1.length) {
            if (valid === need.size) {
                return true
            }

            const ch2 = s2.charAt(left)
            left++

            if (need.has(ch2)) {
                if (curWin.get(ch2) === need.get(ch2)) {
                    valid--
                }
                const count = curWin.get(ch2)
                curWin.set(ch2, count - 1)
            }
        }

    }

    return false
};