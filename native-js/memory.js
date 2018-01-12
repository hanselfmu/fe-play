var leak = null;

var update = function() {
    var ref = leak;
    var foo = function() {
    };
    leak = {
        bigMem: new Array(1e6).join('*'),
        createLeak: function() {
            console.log('hi again');
        }
    }
};
