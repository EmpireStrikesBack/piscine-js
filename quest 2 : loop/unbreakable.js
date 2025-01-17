function split(string, split = '') {
    let Tab = []
    let str = ""
    if (split.length == 0) {
        for (let i = 0; i < string.length; i++) {
            Tab.push(string[i])
        }
        return Tab
    }
    for (let i = 0; i < string.length; i++) {
        if (string[i] == split[0]) {
            i = i + split.length - 1
            Tab.push(str)
            str = ""
        } else {
            str += string[i]
        }
    }
    Tab.push(str)
    return Tab
}

function join(arr, separator) {
    let string = ""
    for (let i = 0; i <= arr.length - 1; i++) {
        if (i != arr.length - 1) {
            string += arr[i] + separator
        } else {
            string += arr[i]
        }
    }
    return string
} 