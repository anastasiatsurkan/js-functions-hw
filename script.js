// sarcina 1
/*function maxValue(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        return ("Valoarea maxima este n1.");

    } else if (n2 >= n1 && n2 >= n3) {
        return ("Valoarea maxima este n2.");

    } else {
        return ("Valoarea maxima este n3.");
    }
}

console.log(maxValue(13, 8, 4));*/

// sarcina 2
/*function minValue(n1, n2, n3) {
    if (n1 <= n2 && n1 <= n3) {
        return ("Valoarea minima este n1.");

    } else if (n2 <= n1 && n2 <= n3) {
        return ("Valoarea minima este n2.");

    } else {
        return ("Valoarea minima este n3.");
    }
}

console.log(minValue(20, 5, 11));*/

// sarcina 3
/*function varstaPersoanei(number) {
    if (number >= 18) {
        return ("Ești potrivit pentru a juca acest joc");

    } else {
        return ("Ești prea tânăr pentru a juca acest joc");
    }
}

console.log(varstaPersoanei(21));*/


// sarcina 4
/*function numberLimits(number) {
    if (number >= 41 && number <= 68){
        return ("True");

    } else {
        return ("False");
    }
}

console.log(numberLimits(52));
*/

// sarcina 5 - nu m-am descurcat
/*function schimbValutar(usd, mdl, ron) {
        if (usd >= 0) {
            return (usd + "USD is " + usd*0.9 + "EUR");
        }

        if (mdl >= 0) {
            return (mdl + "MDL is " + mdl*0.05 + "EUR");
        }

        if (ron >= 0) {
            return (ron + "RON is " + ron*0.2 + "EUR");
        }
    }

console.log(schimbValutar(1, 5, 1));*/

// sarcina 6
function formeGeometrice(a, b, c, d) {
    if (a === b && a === c){
        return ("Patrulaterul este un patrat");

    } else if (a === c && b ===d) {
        return ("Patrulaterul este un dreptunghi");

    } else {
        return ("Patrulaterul nu este ordinar")
    }

}

console.log(formeGeometrice(5, 4, 5, 4))




