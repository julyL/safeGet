module.exports = function safeGet(obj, path) {
    if (Array.isArray(path)) {
        return path.reduce((ob, k) => {
            return ob && ob[k] ? ob[k] : undefined;
        }, obj);
    } else if (typeof path == "string") {
        var arrKeys = path.split("."),
            pathKeys = [],
            m;
        arrKeys.forEach(k => {
            if ((m = k.match(/([^\[\]]+)|(\[\d+\])/g))) { // arr[3][2] =>  ['arr',[3],[2]]
                m = m.map(v => v.replace(/\[(\d+)\]/, "$1")); // ['arr',[3],[2]] => ['arr','3','2']
                [].push.apply(pathKeys, m);
            }
        });
        return safeGet(obj, pathKeys);
    }
}