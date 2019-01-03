var n = 5;
var input = `a b c
b d
c e
d
e`

var res = [];

var dependingMap = {};
var dependedMap = {};

var queue = [];

var lines = input.split('\n');
for (var i = 0; i < n; i++) {
    console.log('line', lines[i]);
    var deps = lines[i].split(' ');
    var package = deps[0];
    dependingMap[package] = 0;

    if (deps.length === 1) {
        queue.push(package);
        continue;
    }
    
    for (var j = 1; j < deps.length; j++) {
        var curDep = deps[j];
        dependingMap[package]++;
        if (dependedMap.hasOwnProperty(curDep)) {
            dependedMap[curDep].push(package);
        } else {
            dependedMap[curDep] = [];
            dependedMap[curDep].push(package);
        }
    }
}

queue.sort();
while (queue.length > 0) {
    var cur = queue.shift();
    console.log(dependedMap);
    if (dependedMap.hasOwnProperty(cur)) {
        dependedMap[cur].forEach(function(dependent) {
            if (dependingMap.hasOwnProperty(dependent)) {
                dependingMap[dependent]--;
                if (dependingMap[dependent] === 0) {
                    queue.push(dependent);
                }   
            }
        });
    }
    
    res.push(cur);
    queue.sort();
}

console.log(res.join(' '));