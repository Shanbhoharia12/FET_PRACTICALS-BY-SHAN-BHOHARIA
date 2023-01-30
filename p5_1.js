
function check_prft(nm) {
    let sm = 0;
    for (let i = 1; i <= (nm / 2); i++) {
      if (nm % i == 0) {
        sm += i;
      }
    }
    if (nm == sm) {
      return true;
    }
    return false;
  }
  function check() {
    let n = document.getElementById("numb").value;
    let ans = 0;
    for (let i = n; i < 100000; i++) {
      if (check_prft(i)) {
        ans = i;
        break;
      }
    }
    document.getElementById("ans1").innerHTML = `The perfect number greater than ${n} = ${ans}`;
  }
  