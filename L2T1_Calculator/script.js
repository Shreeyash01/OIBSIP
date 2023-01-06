let inpString = "";
let outpString = "";

let keys = document.querySelectorAll('.key');

Array.from(keys).forEach((key) => {
    const value = key.dataset.key;

    key.addEventListener('click', () => {
        if (value == 'result') {
            if (checkEnd()) {
                inpString += 0;
                outpString = eval(percentInp(inpString));
                document.querySelector('.output').innerHTML = outpString;
            } else {
                outpString = eval(percentInp(inpString));
                document.querySelector('.output').innerHTML = outpString;
            }
        }
        else if (value == 'clear') {
            inpString = "";
            outpString = "";
            document.querySelector('.input').innerHTML = inpString;
            document.querySelector('.output').innerHTML = outpString;
        }
        else if (value == 'backspace') {
            inpString = inpString.slice(0, -1);
            document.querySelector('.input').innerHTML = cleanInp(inpString);
        }
        else if (value == 'brackets') {
            if (
                inpString.indexOf("(") == -1 ||
                inpString.indexOf("(") != -1 &&
                inpString.indexOf(")") != -1 &&
                inpString.lastIndexOf("(") < inpString.lastIndexOf(")")
            ) {
                inpString += "(";
            }
            else if (
                inpString.indexOf("(") != -1 &&
                inpString.indexOf(")") == -1 ||
                inpString.indexOf("(") != -1 &&
                inpString.indexOf(")") != -1 &&
                inpString.lastIndexOf("(") > inpString.lastIndexOf(")")
            ) {
                inpString += ")";
            }
            document.querySelector('.input').innerHTML = cleanInp(inpString);
        }
        else {
            if (!outpString == "") {
                inpString = "";
                outpString = "";
                document.querySelector('.input').innerHTML = inpString;
                document.querySelector('.output').innerHTML = outpString;
            }
            if (checkInp(value)) {
                inpString += value;
                document.querySelector('.input').innerHTML = cleanInp(inpString);
            }
        }
    });
});
function cleanInp(inpString) {
    let inpArr = inpString.split("");

    for (let i = 0; i < inpArr.length; i++) {
        if (inpArr[i] == "*") {
            inpArr[i] = ` <span class="operator">x</span> `;
        } else if (inpArr[i] == "/") {
            inpArr[i] = ` <span class="operator">÷</span> `;
        } else if (inpArr[i] == "+") {
            inpArr[i] = ` <span class="operator">+</span> `;
        } else if (inpArr[i] == "-") {
            inpArr[i] = ` <span class="operator">-</span> `;
        } else if (inpArr[i] == "(") {
            inpArr[i] = ` <span class="operator">(</span> `;
        } else if (inpArr[i] == ")") {
            inpArr[i] = ` <span class="operator">)</span> `;
        } else if (inpArr[i] == "%") {
            inpArr[i] = ` <span class="operator">%</span> `;
        }
    }
    return inpArr.join("");
};
function checkEnd() {
    let lastInp = inpString.slice(-1);
    let operators = ["+", "-", "*", "/"];

    if (operators.includes(lastInp)) {
        return true;
    } else {
        return false;
    }
};
function percentInp(inpString) {
    let iArr = inpString.split("");
    for (let i = 0; i < iArr.length; i++) {
        if (iArr[i] == "%") {
            iArr[i] = "/100";
        }
    }
    return iArr.join("");
};
function checkInp(value) {
    let operators = ["+", "-", "*", "/"];

    const zero = "0";
    if (
        inpString[0] == "+" ||
        inpString[0] == "-" ||
        inpString[0] == "*" ||
        inpString[0] == "/"
    ) {
        inpString = zero + inpString;
    }

    let lastInp = inpString.slice(-1);
    if (value == "." && lastInp == ".") {
        return false;
    }
    if (operators.includes(value)) {
        if (operators.includes(lastInp)) {
            return false;
        }
        else {
            return true;
        }
    }
    return true;

};
