module.exports = function reverse(n) {
    let d = Math.abs(n), res = 0
    while (d > 0) { res *= 10; res += d % 10; d = Math.floor(d / 10); }
    return res
}
