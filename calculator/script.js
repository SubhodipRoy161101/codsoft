function dis(value) {
  document.getElementById("display").value += value;
}

function cDis() {
  document.getElementById("display").value = "";
}

function calc() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
