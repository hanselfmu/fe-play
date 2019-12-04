const { originProperties, originDataMap } = require('./origin');
const { updateProperties, updateDataMap } = require('./update');

console.log('checking originProperties against updateProperties');
console.log(`has ${originProperties.length} origin properties`);
console.log(`has ${updateProperties.length} update properties`);

console.log('checking originDataMap against updateDataMap');

console.log('missing from updateDataMap')
for (let [key, value] of Object.entries(originDataMap)) {
    if (!updateDataMap[key]) {
        console.log(`----   ${key}`);
    }
}

console.log('missing from originDataMap');
for (let [key, value] of Object.entries(updateDataMap)) {
    if (!originDataMap[key]) {
        console.log(`++++   ${key}`);
    }
}

function diff(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return true;
    }
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) {
            return true;
        }
    }
    return false;
}

console.log('diff from originDataMap');
for (let [key, value] of Object.entries(originDataMap)) {
    if (updateDataMap[key]) {
        if (diff(value.values, updateDataMap[key].values)) {
            console.log(`DIFF ${key}   `, value.values, updateDataMap[key].values);
        }
    }
}
