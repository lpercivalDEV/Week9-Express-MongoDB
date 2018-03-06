//Project Name:
//Client Name:
//Author: Lilly Percival
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///
//
//
//
//
//
//
//
//
//
//
///--------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///

//lets the DOM load before running the code inside
document.addEventListener('DOMContentLoaded', function(){

    //this is an array of Wu Tang names that will be pulled from
    let names = ["inspecta","masta","ghostface","killa","odb","Savage", "Coco","Ninja", "RZA", "GZA"];

    //once the user clicks on the submit button, a function will run
    document.getElementById("enter").addEventListener('click', function(event) {
          let one = document.getElementById("first");
          let two = document.getElementById("last");
      }


    // document.getElementById("enter").onclick(function(){
    //this function takes the user's inputs and stores them in variables, there is also an alert if the inputs are left empty

        // if(document.getElementById("first")= null){
        //     alert("Please enter first name")
        // }
        // else if(document.getElementById("last")){
        //     alert("Please enter last name")
        // }
// });

    //this function helps to randomly select a Wu Tang name from the array
    function randomName(choose){
        //finalName is given an arbitrary value - will be reassigned once Math.random runs
        let finalName = 0;
        //the variable generate holds the math.random value
        let generate = Math.random();
        //these conditionals decide which name to pull from the array and combine them with the user's inputs
            if (generate <= 0.10){
                let finalName = one+" "+names[0]+" "+two;
            }
            else if (generate >= 0.11 && generate <= 0.20){
                let finalName = one+" "+names[1]+" "+two;
            }
            else if (generate >= 0.21 && generate <= 0.30){
                let finalName = one+" "+names[2]+" "+two;
            }
            else if (generate >= 0.31 && generate <= 0.40){
                let finalName = one+" "+names[3]+" "+two;
            }
            else if (generate >= 0.41 && generate <= 0.50){
                let finalName = one+" "+names[4]+" "+two;
            }
            else if (generate >= 0.51 && generate <= 0.60){
                let finalName = one+" "+names[5]+" "+two;
            }
            else if (generate >= 0.61 && generate <= 0.70){
                let finalName = one+" "+names[6]+" "+two;
            }
            else if (generate >= 0.71 && generate <= 0.80){
                let finalName = one+" "+names[7]+" "+two;
            }
            else if (generate >= 0.81 && generate <= 0.90){
                let finalName = one+" "+names[8]+" "+two;
            }
            else if (generate >= 0.91 && generate <= 0.99){
                let finalName = one+" "+names[9]+" "+two;
            }

        //prints finalName to the console as a sanity check
        console.log(finalName);
    }
    //prints final wu tang name to the DOM so user can see result
    document.getElementById("h1").innerHTML(one +" "+finalName+" "+ two)

//close of doc.ready function below
});
