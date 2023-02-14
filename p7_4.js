// import {studentname} from "./p7_1,js";
// import {id1, id2, id3, id4, id5} from "./p7_2.js";
// import {college_name} from "./p7_3.js";

//  document.getElementById("first").innerHTML = "<b>ID: </b>" + id1 +
// ",<b> Name: </b>" + studentname[0] + " From<b> " + college_name.college_1_name +
// "</b>";
//  document.getElementById("second").innerHTML = "<b>ID: </b>" + id2 +
// ",<b> Name: </b>" + studentname[1] + " From<b> " + college_name.college_2_name +
// "</b>";
//  document.getElementById("third").innerHTML = "<b>ID: </b>" + id3 +
// ",<b> Name: </b>" + studentname[2] + " From<b> " + college_name.college_3_name +
// "</b>";
//  document.getElementById("forth").innerHTML = "<b>ID: </b>" + id4 +
// ",<b> Name: </b>" + studentname[3] + " From<b> " + college_name.college_4_name +
// "</b>";
//  document.getElementById("fifth").innerHTML = "<b>ID: </b>" + id5 +
// ",<b> Name: </b>" + studentname[4] + " From<b> " + college_name.college_5_name +
// "</b>";



import { calculate_r  } from "./p7_1.js";
import { validateinfo }  from "./p7_3.js";
import { processpayment } from "./p7_2.js";


calculate_r(1000, 5, 2);
validateinfo("John", "Doe", "1234567890", "1234567890");
processpayment(2222222222222222, "John Doe", "123", "12/22");
window.calculate_r=calculate_r;
window.validateinfo=validateinfo;
window.processpayment=processpayment;