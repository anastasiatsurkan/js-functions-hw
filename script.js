// sarcina 1
function maxValue(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        return "Valoarea maxima este: " + n1;
    } else if (n2 >= n1 && n2 >= n3) {
        return "Valoarea maxima este: " + n2;
    } else {
        return "Valoarea maxima este: " + n3;
    }
}

console.log(maxValue(13, 8, 4));

// sarcina 2
function minValue(n1, n2, n3) {
    if (n1 <= n2 && n1 <= n3) {
        return "Valoarea minima este: " + n1;
    } else if (n2 <= n1 && n2 <= n3) {
        return "Valoarea minima este: " + n2;
    } else {
        return "Valoarea minima este: " + n3;
    }
}

console.log(minValue(20, 5, 11));

// sarcina 3
function varstaPersoanei(number) {
    return number >= 18 ? "Ești potrivit pentru a juca acest joc" : "Ești prea tânăr pentru a juca acest joc";
}

console.log(varstaPersoanei(21));


// sarcina 4
function numberLimits(number, start, end) {
    if (number >= start && number <= end) {
        return true;
    } else {
        return false;
    }
}

console.log(numberLimits(52));


// sarcina 5 - nu m-am descurcat
function schimbValutar(amount, fromCurrency, toCurrency) {
    const mdlCurrency = 0.05;
    const usdCurrency = 0.9;
    const ronCurrency = 0.2;

    let euroAmount = 0;

    if (fromCurrency === "MDL") {
        euroAmount = amount * mdlCurrency;
    } else if (fromCurrency === "USD") {
        euroAmount = amount * usdCurrency;
    } else if (fromCurrency === "RON") {
        euroAmount = amount * ronCurrency;
    } else if (fromCurrency === "EUR") {
        euroAmount = amount;
    } else {
        return "Unsupported";
    }

    if (toCurrency === "MDL") {
        return euroAmount / mdlCurrency;
    } else if (toCurrency === "USD") {
        return euroAmount / usdCurrency;
    } else if (toCurrency === "RON") {
        return euroAmount / ronCurrency;
    } else if (toCurrency === "EUR") {
        return euroAmount;
    } else {
        return "Unsupported"
    }
}

console.log(schimbValutar(10, "RON", "USD"));

// sarcina 6
function formeGeometrice(a, b, c, d) {
    if (a === b && a === c && a === d) {
        return "Patrulaterul este un patrat";
    } else if (a === c && b === d) {
        return "Patrulaterul este un dreptunghi";
    } else {
        return "Patrulaterul nu este ordinar";
    }
}

console.log(formeGeometrice(5, 4, 5, 4));

// sarcina 7
function weekDays(number) {
    if (number === 1) {
        return "Luni";
    } else if (number === 2) {
        return "Marti";
    } else if (number === 3) {
        return "Miercuri";
    } else if (number === 4) {
        return "Joi";
    } else if (number === 5) {
        return "Vineri";
    } else if (number === 6) {
        return "Sambata";
    } else if (number === 7) {
        return "Duminica";
    } else {
        return "Undefined";
    }
}

console.log(weekDays(6));



