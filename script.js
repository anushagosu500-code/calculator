function display(value) {
    document.getElementById("inp1").value += value;
}

function clearDisplay() {
    document.getElementById("inp1").value = "";
}

function calculate() {
    let expression = document.getElementById("inp1").value;

    try {
        document.getElementById("inp1").value = eval(expression);
    } catch (error) {
        document.getElementById("inp1").value = "Error";
    }
}