function commonCutToPalindrome(a, b) {
    if (a.length !== b.length) return -1;
    let ai = 0;
    let bi = b.length - 1;
    while (a[ai] === b[bi]) {
        ai++;
        bi--;
        if (ai > bi) break;
    }
    if (ai >= bi) return ai;
    const leftover = b.substring(ai, bi + 1);
    console.log(leftover);
    return isPalindrome(leftover) ? ai : -1;
}

function cutToPalindromes(a, b) {
    let ai = 0;
    let bi = b.length - 1;
    const results = [];
    while (ai < a.length && bi >= 0 && a[ai] === b[bi]) {
        results.push({ a: a.substring(0, ai + 1), b: b.substring(bi) });
        ai++;
        bi--;
    }
    return results;
}

console.log(commonCutToPalindrome('abbacda', 'bgddcad'));
console.log(commonCutToPalindrome('abbacda', 'bgdebba'));
console.log(commonCutToPalindrome('abcdefghi', 'nggdfdgba'));

console.log(cutToPalindromes('abbacda', 'bgdebba'));

function isPalindrome(a) {
    let l = 0;
    let r = a.length - 1;
    while (l < r) {
        if (a[l] !== a[r]) return false;
        l++;
        r--;
    }
    return true;
}

pattern = ['D', 'D', 'I', 'I', 'D'];
number = 210120