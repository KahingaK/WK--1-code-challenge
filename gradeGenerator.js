// STUDENT GRADE GENERATOR
// Interface that asks user for input
let prompt = require("prompt-sync")()
let studentGrade = prompt('Input student grade', "studentGrade")
studentGrade = parseInt(studentGrade)

// Calculates and outputs student grade
function gradeGenerator(studentGrade ) {
   
    if (studentGrade >= 79 && studentGrade <= 100) { console.log("A")
        
    } else if (studentGrade >=60 && studentGrade < 79) { console.log("B")
        
    } else if (studentGrade >=49 && studentGrade <59) { console.log("C")
        
    } else if (studentGrade >=40&&  studentGrade <49) {console.log("D")
        
    } else if (studentGrade >= 0 && studentGrade < 40 ) {console.log("E")
     
        
    }
  // Incase values do not fall within required range
    else {console.log( "Input grade between 1-100")}
}
    
gradeGenerator(studentGrade)
    
    