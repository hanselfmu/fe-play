var _marked = [foo].map(regeneratorRuntime.mark);

/**
 * Created by chan on 11/10/16.
 */

// callee -- generator
function foo() {
    var x, y;
    return regeneratorRuntime.wrap(function foo$(_context) {
        while (1) switch (_context.prev = _context.next) {
            case 0:
                x = 1;
                _context.next = 3;
                return x + 1;

            case 3:
                y = _context.sent;

                console.log(y); // prints out 10

            case 5:
            case "end":
                return _context.stop();
        }
    }, _marked[0], this);
}

// caller code
let g = foo();
console.log(g.next());
console.log(g.next(10)); // prints out {value: 2, done: false}