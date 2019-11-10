function distanceFactor(distance) {
    if(distance < 100) {
        return 0;
    } else if(distance > 100 && distance < 500) {
        return 1;
    } else if(distance > 500 && distance < 2000) {
        return 2;
    } else {
        return 3;
    }
}

function recyclableFactor(boolean) {
    if(boolean) {
        return 0;
    }
    return 1;
}

function transportationFactor(type) {
    if(type === "Boat") {
        return 0.8;
    } else if(type === "Ground") {
        return 2;
    } else if(type === "Air") {
        return 3;
    } else if (type === "Rail") {
        return 1;
    }
    return 0;
}

function shippingFactor(type) {
    if(type === "Prime 1-day") {
        return 1.95
    } else if(type === "Prime") {
        return 1.8
    } else if(type === "Priority") {
        return 1.5
    } else if(type === "Expedited") {
        return 1.25
    } else if(type === "FEDEX Next-Day") {
        return 2
    }
    return 0.75
}

function weightFactor(weight) {
    if(weight < 5) {
        return 0
    } else if(weight > 5 && weight < 10) {
        return 0.5
    } else if(weight >10 && weight < 20) {
        return 0.75
    }
    return 1
}

function totalFactor() {
    let total = 0;
    for(i === 0; i<arguments.length; i++) {
        total += arguments[i]
    }
    return total;
}