// Interface that requires input from programme user
let prompt = require("prompt-sync")()
let grossSalary = prompt('Input gross salary:', "grossSalary")
grossSalary = parseInt(grossSalary)
const personalReleif = 2400


// Calculating PAYE
function payAsYouEarn(grossSalary) {
    if (grossSalary <= 24000) {console.log(0);
        
    }
    else if (grossSalary >= 24001 && grossSalary <= 32333) {
    console.log("Total PAYE payable:" + (((grossSalary-24001) * 0.25) + (0.01 * 24000)-personalReleif));
  } else if (grossSalary > 32333) {
    console.log("Total PAYE payable:" + (((grossSalary - 32333)* 0.3) + ((grossSalary-24001) * 0.25) + (0.01 * 24000)-personalReleif));
  } 
}



//Calculating NHIF payment
function nhif(grossSalary) {
    if (grossSalary > 0 && grossSalary <= 5999) {
      console.log("NHIF Payment:" + 150)
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
      console.log("NHIF Payment:" + 300);
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
      console.log("NHIF Payment:" + 400);
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
      console.log("NHIF Payment" + 500);
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
      console.log("NHIF Payment:" + 600);
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
      console.log("NHIF Payment:" + 750);
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
      console.log("NHIF Payment:" + 850);
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
      console.log("NHIF Payment:" + 900);
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
      console.log("NHIF Payment:" + 950);
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
      console.log("NHIF Payment:" +  1000);
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
      console.log("NHIF Payment:" + 1100);
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
      console.log("NHIF Payment:" + 1200);
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
      console.log("NHIF Payment:" + 1300);
    } else if (grossSalary >= 70000 && grossSalary <= 79999) {
      console.log("NHIF Payment:" + 1400);
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
      console.log("NHIF Payment:" + 1500);
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
      console.log("NHIF Payment:" + 1600);
    } else if (grossSalary >= 100000) {
      console.log("NHIF Payment:" + 1700);
    }
  }
  payAsYouEarn(grossSalary)
  nhif( grossSalary)
  