function isPositive (nbr) {
    if (nbr > 0) {
        return true;
    } else if (nbr < 0) {
        return false;
    }
}

function abs (nbr) {
    if (isPositive(nbr)) {
        return nbr;
    } else if (nbr == 0) {
        return 0;
    }else {
        return -nbr;
    }
}