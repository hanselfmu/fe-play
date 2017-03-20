/**
 * Created by chan on 2/24/17.
 */

// XSS
var query = window.location.search.substring(1);
var vars = decodeURIComponent(query).split("&");
var params = {};
for (var i = 0; i < vars.length; i++) {
    var elements = vars[i].split("=");
    if (elements[1] != "undefined" && elements[1] != "null") {
        if (!params[elements[0]]) {
            params[elements[0]] = elements[1];
        } else {
            params[elements[0]] += '&' + elements[1];
        }
    }
}

var searchStr = params.search;

var newDiv1 = document.createElement('div');
var newContent = document.createTextNode(searchStr);
newDiv1.appendChild(newContent);

var newDiv2 = document.createElement('div');
newDiv2.innerHTML = searchStr;

document.body.append(newDiv1);
document.body.append(newDiv2);

document.write('hahaha');