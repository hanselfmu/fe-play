/*
请编写一个JavaScript函数 parseQueryString，它的用途是把URL参数解析为一个对象，如：
var url = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2....."
var obj = parseQueryString(url);
alert(obj.key0)? // 输出0
*/
function parseQueryString(url) {
    const queryStr = url.split('?')[1];
    const queryMap = {};
    if (!queryStr) { return queryMap; }
    queryStr.split('&').forEach(queryPair => {
        const [ k, v ] = queryPair.split('=');
        if (v) {
            queryMap[k] = v;
        }
    });
    return queryMap;
}

const g = parseQueryString('https://www.google.com?abc');
console.log(g);