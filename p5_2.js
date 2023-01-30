


function prac5_2() {
    const employees = [
      { name: "Shan Bhoharia", workingDays: 29 },
      { name: "Devarsh Juneja", workingDays: 15 },
      { name: "Srijan Mishra", workingDays: 23 },
      { name: "krupal patel", workingDays: 11 },
      { name: "Shubham Kumar", workingDays: 5 },
      { name: "Yajat Choksi", workingDays: 22 }
    ];
    let baseSalary = 1000;
    let ans = "";
    employees.forEach(employee => {
      let salary = baseSalary * employee.workingDays;
      ans += `The salary of ${employees.name} = ${salary}<br>`;
    });
    document.getElementById("p5_2").innerHTML = ans;
  }