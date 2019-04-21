var Obj = function (msg) {
    this.msg = msg;
    this.shout = function () {
        console.log(this.msg);
    }
    this.waitAndShout = function () {
        //隔1秒钟后执行上面的shout方法
        var execute = function() {
            this.shout();
        }
        setTimeout(execute.bind(this), 1000);
    }
}

var o = new Obj('hello world');
o.waitAndShout();