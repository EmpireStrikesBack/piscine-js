const round = (value) => {
    let neg = value < 0
    value = neg ? -value : value;
    let count = 0;
    while (!(value < 1 && value > -1)) {
        value -= 1;
        count++;
    }
    return value < 0.5 ? (neg ? -count : count) : (neg ? -count - 1 : count + 1);
}

const floor = (value) => {
    let neg = value < 0
    value = neg ? -value : value;
    let valueCopy = value;
    let count = 0;
    while (!(valueCopy < 1 && valueCopy > -1)) {
        valueCopy -= 1;
        count++;
    }
    if (neg) {
        return -count - 1;
    } else {
        return count;
    }

}

const ceil = (value) => {
    if (!value) return 0;
    let neg = value < 0
    value = neg ? -value : value;
    let valueCopy = value;
    let count = 0;
    while (!(valueCopy < 1 && valueCopy >= 0)) {
        valueCopy -= 1;
        count++;
    }
    return (neg) ? -count : count + 1
}

const trunc = (value) => {
    let count = 0;
    let neg = value < 0
    if (value > 0xfffffffff) {
        value -= 0xfffffffff;
        count += 0xfffffffff;
    }
    value = neg ? -value : value;
    let valueCopy = value;
    while (!(valueCopy < 1 && valueCopy > -1)) {
        valueCopy -= 1;
        count++;
    }
    return (neg) ? -count : count
}