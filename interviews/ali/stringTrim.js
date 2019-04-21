String.prototype.trim = function () {
    var start = 0, end = this.length - 1;
    for (; this[start] === ' ' && start <= end; start++) { }
    if (start === end) { return ''; }
    for (; this[end] === ' ' && end >= 0; end--) { }
    return this.substr(start, end - start + 1);
}

var a = '  aabb  c   ';
var b = '  a  ';
var c = '     ';
var d = 'abcdsf';
console.log(a.trim().length);
console.log(b.trim().length);
console.log(c.trim().length);
console.log(d.trim().length);