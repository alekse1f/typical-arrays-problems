exports.min = function min(a = []) {
    let t = a.length;
    if (t == 0) {
        return 0;
    }
    let m = a[0];
    a.forEach((el) => {
        if (el < m) {
            m = el;
        }
    });
    return m;
};

exports.max = function max(a = []) {
    let t = a.length;
    if (t == 0) {
        return 0;
    }
    let m = a[0];
    a.forEach((el) => {
        if (el > m) {
            m = el;
        }
    });
    return m;
};

exports.avg = function avg(a = []) {
    let m = 0;
    let t = a.length;
    if (t == 0) {
        return 0;
    }
    a.forEach((el) => {
        m += el;
    });
    return m / t;
};
