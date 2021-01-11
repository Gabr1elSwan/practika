let arr = [1, "от", 2, 3, 4, 5, 6, 7, 8, 9, "до", 10];
const delate = function (arr, from, to) {
    let first = arr.indexOf(from);
    let second = arr.indexOf(to);
    const newArr = arr.splice(first, (second + 1 - first));
    return newArr;
};
delate(arr, 'от', 'до');