
//   function getNextPerfectNumber(input) {
//     let i = parseInt(input) + 1;
//     while (true) {
//       let divisors = getDivisors(i);
//       let sum = divisors.reduce((a, b) => a + b);
//       if (sum === i) {
//         return i;
//       }
//       i++;
//     }
//   }
  
//   function getDivisors(num) {
//     let divisors = [1];
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         divisors.push(i);
//         if (i !== num / i) {
//           divisors.push(num / i);
//         }
//       }
//     }
//     document.getElementById("findBtn").addEventListener("click", function() {
//         let input = document.getElementById("inputNumber").value;
//         let nextPerfectNumber = getNextPerfectNumber(input);
//         document.getElementById("result").innerHTML = `The next perfect number greater than ${input} is ${nextPerfectNumber}.`;
//       });
      
//     return divisors;
    
//   }


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
  