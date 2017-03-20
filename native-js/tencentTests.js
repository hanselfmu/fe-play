/**
 * Created by chan on 2/15/17.
 */
/*
 1. 使用正则表达式精确匹配出如下字符串中加粗部分的 3052202501

 > ptui_loginuin=3052202501%20;pt2gguin=o3052202501;uin=o3052202501;ptisp=ctc
 */

var strToMatch = 'ptui_loginuin=3052202501%20;pt2gguin=o3052202501;uin=o3052202501;ptisp=ctc';
var regex = /(?:;uin=o)(3052202501)/;
var found = strToMatch.match(regex);
console.log(found[1]);

function count(str) {
    var countMap = {};

    if (str.length < 1) {
        return null;
    }

    var result = {
        maxChar: '',
        maxCount: -Infinity
    }

    for (let i = 0; i < str.length; i++) {
        let cur = str[i];
        if (countMap[cur]) {
            countMap[cur]++;
        } else {
            countMap[cur] = 1;
        }

        if (countMap[cur] > result.maxCount) {
            result.maxChar = cur;
            result.maxCount = countMap[cur];
        }
    }

    return result;
}

console.log(count('1231&%#O9991abbbsdfaksdjbafoi'));

/*
 3. 假设你有一个函数，产生[0, 5)之间的随机整数，每个数字概率1/5，如何使用这个函数产生[0, 7)之间的随机整数，每个数字概率1/7
 */
function rand0To4() {}      // return a random number between 0 to 4
function rand0To6() {
    var curRand = rand0To4();
    return curRand * 7 / 5;
}

/*
 4. 现在有一个基准数组 records，先要求你维护其子集 selection 数组（初始为空），维护操作包含删除和插入。

 插入：给定 records 数组中的一个元素，插入到 selection 中

 删除：给定 records 数组中的一个元素，把它从 selection 中删除

 现在要求你：实现 insert() 和 remove() 方法来实现以上操作。设计一个算法，保证每次维护操作后，
 保持 selection 数组中的元素的偏序关系与 records 数组中的保持一致，分析你算法的复杂度。

 /** 请自行设计函数的参数 */
var records = [1, 2, 3, 4, 5, 6];
var selection = [];
function insert(el) {
    if (records.includes(el) && !selection.includes(el)) {     // O(n)
        // 假如selection已有则不重复插入?
        selection.push(el);         // O(1)
    }
}

function remove(el) {
    let elIndex = selection.indexOf(el);    // O(n)
    if (elIndex > -1) {
        selection.splice(elIndex, 1);       // O(n)
    }
}

/*
 5. 有一个扁平的数组描述了一系列的地理信息，类似于：

 ```
 var locationList = [
    { id: 0, name: "中国" },
    { id: 1, pid: 0, name: "广东省" },
    { id: 2, pid: 1, name: "深圳市" },
    { id: 3, pid: 1, name: "广州市" },
    ...
 ]
 ```

 其中每个节点的 `pid` 指向了它所属上级地区，现要求把这个数组转换成树状结构：

 ```
 var locationTree = buildLocationTree(locationList);
 ```

 其中 `locationTree` 的结构应该如下：

 ```
 interface LocationTree {
    root: LocationNode;
 }
 interface LocationNode {
    id: number;
    pid?: number; // 问号表示可选属性
    name: string;
    subLocations?: LocationNode[];
 }
 ```

 请实现 `buildLocationTree()`，输出的父节点里面包含子节点的数组
 */
function LocationNode(id, name, pid) {
    this.id = id;
    this.name = name;
    this.pid = pid;     // || null;

    this.subLocations = [];

    this.addSubLocation = function(locationNode) {
        this.subLocations.push(locationNode);
    }

    this.getParentId = function() {
        return this.pid;
    }
}

// O(2n)
function buildLocationTree(locationList) {
    var nodeIdsMap = {};
    var root = null;

    for (let i = 0; i < locationList.length; i++) {
        let cur = locationList[i];
        nodeIdsMap[cur.id] = new LocationNode(cur.id, cur.name, cur.pid);
        if (cur.pid === undefined || cur.pid === null) {
            // root
            root = nodeIdsMap[cur.id];
        }
    }

    Object.keys(nodeIdsMap).forEach(id => {
        let cur = nodeIdsMap[id];
        let pid = cur.getParentId();
        if (pid !== undefined && pid !== null) {
            nodeIdsMap[pid].addSubLocation(cur);
        }
    });

    return root;
}

console.log(buildLocationTree([
    { id: 0, name: "中国" },
    { id: 1, pid: 0, name: "广东省" },
    { id: 2, pid: 1, name: "深圳市" },
    { id: 3, pid: 1, name: "广州市" },
    { id: 4, pid: 0, name: "河北省" },
    { id: 5, pid: 4, name: "石家庄市" },
    { id: 6, pid: 4, name: "唐山市" }
]));